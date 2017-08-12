import {Component} from "@angular/core";
import {ProjectDetailPage} from "../../orderdetail/projectdetail";
import {SharedService} from "../../../../../service/share.service";
import {NavController, NavParams} from 'ionic-angular';
import {ProjectsService} from "../../../../../service/ajax/projects.service";
import {Util} from "../../../../../service/util";

declare let BC: any;
declare let md5: any;

@Component({
    selector: 'page-payment',
    templateUrl: 'order-process-payment.html'
})
export class OrderProcessPayment {


    projectDetail: ProjectDetailPage

    project;

    constructor(private navCtrl: NavController,
                private shared: SharedService,
                public navParams: NavParams,
                public projServ: ProjectsService,
                public util: Util) {
        this.project = navParams.get("project")
    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }


    toPay() {
        this.projServ.money(this.project.id)
            .then(() => {
                this.util.toast("支付成功")
                this.navCtrl.pop();
            })
            .catch((error) => this.util.toast(error))
    }

    toPayBeeCloud() {

        console.log("toPay")

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

        /**
         * click调用错误返回：默认行为console.log(err)
         */
        BC.err = function (data) {
            //注册错误信息接受
            alert(data["ERROR"]);
            console.log(data["ERROR"])
        }
        '/'
        BC.click(data, {
            dataError: (msg) => {
                console.log("Error!!!!!!!!");
                console.log(msg)
            },
            wxJsapiFinish: (res) => {
                console.log("Finsih!!!!!!!!!");
                console.log(res)
            },
            wxJsapiSuccess: (res) => {
                console.log("Finsih!!!!!!!!!");
                console.log(res)
            },
            wxJsapiFail: (res) => {
                console.log("Finsih!!!!!!!!!");
                console.log(res)
            }
        })
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