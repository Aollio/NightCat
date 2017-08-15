var beecloud = {};
var channels = null;
/*[{"id":"alipay","description":"支付宝","serviceReady":true},
    {"id":"wxpay","description":"微信","serviceReady":true}];*/
var w = null;

beecloud.payReq = function (data, cbsuccess, cberror) {
    doPay(data, cbsuccess, cberror);
};

beecloud.genBillNo = function () {
    var d = new Date();
    var vYear = d.getFullYear();
    var vMon = d.getMonth() + 1;
    var vDay = d.getDate();
    var h = d.getHours();
    var m = d.getMinutes();
    var se = d.getSeconds();
    var ms = d.getMilliseconds();
    billno = "" + vYear + (vMon < 10 ? "0" + vMon : vMon) + (vDay < 10 ? "0" + vDay : vDay) + (h < 10 ? "0" + h : h) + (m < 10 ? "0" + m : m) + (se < 10 ? "0" + se : se) + ms;
    return billno;
};

function readPlus() {
    //配置业务支持的支付通道，支付需要服务端支持，在BeeCloud上支持支付宝支付和微信支付；
    var support_channel = ['alipay', 'wxpay'];
    plus.payment.getChannels(function (s) {
        channels = s;
    }, function (e) {
        console.log("获取支付渠道信权限失败:" + e.message);
    });
};

function getRandomHost() {
    var hosts = ['https://apibj.beecloud.cn',
        'https://apihz.beecloud.cn',
        'https://apisz.beecloud.cn',
        'https://apiqd.beecloud.cn'
    ];
    return "" + hosts[parseInt(3 * Math.random())] + "/2/rest/app/bill";
}

/**
 * 获取支付通道
 *
 */
function getPayChannel(bc_channel) {
    var dc_channel_id = '';
    //alert(bc_channel=="ALI_APP");
    if (bc_channel == "ALI_APP") {
        dc_channel_id = 'alipay';
    } else if (bc_channel == "WX_APP") {
        dc_channel_id = 'wxpay';
    }
    for (var i in channels) {
        if (channels[i].id == dc_channel_id) {
            return channels[i];
        }
    }
    return null;
}

function doPay(payData, cbsuccess, cberror) {
    if (w) return;

    w = plus.nativeUI.showWaiting();
    mui.ajax(getRandomHost(), {
        data: JSON.stringify(payData),
        type: 'post',
        dataType: 'json',
        contentType: "application/json",
        success: function (data) {
            w.close();
            w = null;
            var paySrc = '';
            if (data.result_code == 0) {
                var payChannel = getPayChannel(payData.channel);
                if (payChannel) {
                    if (payChannel.id === 'alipay') {
                        paySrc = data.order_string;
                    } else if (payChannel.id === 'wxpay') {
                        var statement = {};
                        statement.appid = data.app_id;
                        statement.noncestr = data.nonce_str;
                        statement.package = data.package;
                        statement.partnerid = data.partner_id;
                        statement.prepayid = data.prepay_id;
                        statement.timestamp = parseInt(data.timestamp);
                        statement.sign = data.pay_sign;
                        paySrc = JSON.stringify(statement);
                    }
                    plus.payment.request(payChannel, paySrc, cbsuccess, cberror);
                }
            } else {
                var bcError = {};
                bcError.code = data.result_code;
                bcError.message = data.result_msg + ":" + data.err_detail;
                cberror(bcError);
            }
        },
        error: function (xhr, errorType, error) {
            w.close();
            w = null;
            cberror(error);
        }
    });
}