import {Component} from "@angular/core";
import {ProjectDetailPage} from "../../orderdetail/projectdetail";
import {SharedService} from "../../../../../service/share.service";
import {NavController, NavParams, AlertController} from 'ionic-angular';
import {ProjectService} from "../../../../../service/ajax/projects.service";
import {Util} from "../../../../../service/util";
import {NetworkService} from "../../../../../service/network.service";
import {Platform} from 'ionic-angular';

declare let BC: any;
declare let md5: any;
declare let getRandomHost: any;
declare let getPayChannel: any;
declare let Math: any;
declare let jQuery: any;
declare let plus: any;
declare let document;
declare let window: any;

@Component({
    selector: 'page-payment',
    templateUrl: 'order-process-payment.html'
})
export class OrderProcessPayment {


    projectDetail: ProjectDetailPage

    project;

    channels;

    ionDidViewEnter() {
        //配置业务支持的支付通道，支付需要服务端支持，在BeeCloud上支持支付宝支付和微信支付；


    }

    constructor(private navCtrl: NavController,
                private shared: SharedService,
                public navParams: NavParams,
                public projServ: ProjectService,
                public util: Util,
                public platform: Platform,
                public http: NetworkService,
                private alertCtrl: AlertController) {
        this.project = navParams.get("project")

        // console.log("进入支付页")

        // if (window.plus) {
        //     console.log('window.plus 存在')
        //     this.ready();
        // } else {
        //     console.log('window.plus 不存在, 增加了事件监听器')
        //     document.addEventListener("plusready", this.ready(), false);
        // } // 扩展API准备完成后要执行的操作 function plusReady(){ var ws = plus.webview.currentWebview(); //pw回车可输出plus.webview // ... code }


    }

    selected = 1

    select(index) {
        this.selected = index;
    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }


    toPay() {
        console.log("toPay");

        console.log("使用预先联系客服支付")
        let alert = this.alertCtrl.create({
            title: '请联系客服人员支付订单',
            subTitle: '13636534637',
            buttons: [
                {
                    text: '确认',
                    handler: () => {
                        // window.location.href = "tel:" + 13636534637;
                        // alert.dismiss()
                        this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
        // this.nav.push(OrderProcessPayment, {project: this._project});

        // this.projServ.money(this.project.id)
        //     .then(() => {
        // this.util.toast("支付成功")
        // this.navCtrl.pop();
        // })
        // .catch((error) => this.util.toast(error))


        // this.toPayBeeCloud();
    }

    toPayByAliPay() {

        // const alipayOrder: AlipayOrder = {
        //     todo
        // app_id: "",
        // method: "alipay.trade.app.pay",
        // sign_type: "",
        // sign: "",
        // timestamp: this.util.currentformat(),
        // notify_url: "",
        // biz_content: "",
        // charset: "UTF-8",
        // format: "JSON",
        // version: "1.0"
        // };
        //
        // this.alipay.pay(alipayOrder)
        //     .then(result => {
        //         console.log(result); // Success
        //         this.util.toast("支付成功")
        //         this.navCtrl.pop();
        //     })
        //     .catch(error => {
        //         console.log(error); // Failed
        //         this.util.toast(error && error.message || "支付失败")
        //     });
        //

    }


    toPayJs() {

    }

    toPayBeeCloud() {

        console.log("toPayBeeCloud")

        let _appid = "07028a19-f3a8-44f6-b3d7-839ec59cf63c";

        let title = "test yemao";

        let amount = "1";

        //todo
        let out_trade_no = this.randomString(20);

        let testSecret = "5e23c8fe-8357-4500-a85c-4ee2042dd84e"

        let appSecret = "cc46da9a-daa6-413c-ac66-a6aa666284e5";

        let sign = md5(_appid + title + amount + out_trade_no + appSecret)

        console.log(sign)

        let data = {
            "app_id": _appid,
            "instant_channel": "ali",
            // debug: true,
            // "optional": {},
            // "return_url": "http://139.196.169.139:8082/jlApp/template/networks/index.html",
            "title": title,
            "amount": amount,
            "out_trade_no": out_trade_no, //唯一订单号
            "sign": sign
        }

        this.doPay(data, () => {
            this.util.toast("成功")
        }, () => {
            this.util.toast("失败")
        })

        /**
         * click调用错误返回：默认行为console.log(err)
         */
    }


    ready() {
        console.log("调用了ready")
        if (window.plus) {
            console.log("window.plus 存在")
        } else {
            console.log("window.plus 不存在")
        }

        var support_channel = ['alipay', 'wxpay'];
        plus.payment.getChannels(function (s) {
            this.channels = s;
        }, function (e) {
            console.log("获取支付渠道信权限失败:" + e.message);
        });
    }

    getRandomHost() {
        var hosts = ['https://apibj.beecloud.cn',
            'https://apihz.beecloud.cn',
            'https://apisz.beecloud.cn',
            'https://apiqd.beecloud.cn'
        ];
        return "" + hosts[parseInt(Math.random() + Math.random() + Math.random())] + "/2/rest/app/bill";
    }


    doPay(payData, cbsuccess, cberror) {

        let loading = this.util.createLoading("加载中...")
        loading.present();
        jQuery.ajax(getRandomHost(), {
            data: JSON.stringify(payData),
            type: 'post',
            dataType: 'json',
            contentType: "application/json",
            success: function (data) {
                loading.dismiss()
                loading = null;
                var paySrc = '';
                if (data.result_code == 0) {
                    var payChannel = getPayChannel(payData.channel);
                    if (payChannel) {
                        if (payChannel.id === 'alipay') {
                            paySrc = data.order_string;
                        } else if (payChannel.id === 'wxpay') {
                            var statement: any = {};
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
                    var bcError: any = {};
                    bcError.code = data.result_code;
                    bcError.message = data.result_msg + ":" + data.err_detail;
                    cberror(bcError);
                }
            },
            error: function (xhr, errorType, error) {
                if (loading != null) {
                    loading.dismiss();
                }
                cberror(error);
            }
        });
    }


    randomString(len) {
        len = len || 20;
        var $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
        /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
        var maxPos = $chars.length;
        var pwd = '';
        for (let i = 0; i < len; i++) {
            pwd += $chars.charAt(Math.floor(Math.random() * maxPos));
        }
        return pwd;
    }

}