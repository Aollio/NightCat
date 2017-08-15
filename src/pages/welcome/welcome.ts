import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {LoginPage} from "../common/login/login";
import {EmployerModulePage} from "../employer/employer";
import {DesignerModulePage} from "../designer/designer";
import {BlankPage} from "../blank/blank";
import {NetworkService} from "../../service/network.service";
import {SharedService} from "../../service/share.service";
import {ImService} from "../../service/im/service.im";
import {IMPage} from "../im/im";
import {ChatPage} from "../im/chat/chat";
import {State} from "../../service/im/state.im";
import {RegisterPage} from "../common/register/register";
import {Slides} from 'ionic-angular';
import {OrderProcessWaitcomment} from "../common/order/orderprocess/order-process-waitcomment/waitcomment";
import {OrderProcessPayment} from "../common/order/orderprocess/order-process-payment/order-process-payment";


@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class WelcomePage {

    rootPage: any;
    state: any = 1;
    register: any = RegisterPage;


    list: any = BlankPage;
    waitcomment: any = OrderProcessWaitcomment;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public platform: Platform,
                public toastCtrl: ToastController,
                public http: NetworkService,
                public shared: SharedService,
                public im: ImService,
                public navParam: NavParams) {

        console.log('enter welcome')
        let isregister = this.navParam.get('register')
        console.log(isregister)
        if (isregister == 'true') {
            this.enterRegister()
        }
        let one = this.navParam.get('state');
        if (one != null) {
            this.state = one;
        }
    }

    openTest() {
        this.navCtrl.push(OrderProcessPayment, {})
    }

    openChat() {
        this.navCtrl.push(ChatPage, {})
    }

    openMsgs() {
        this.navCtrl.push(IMPage, {})
    }

    openBlank() {
        this.navCtrl.push(BlankPage, {})
    }

    customBtn() {
        // this.im.initializeNim();
        State.INSTANCE.getUserByAccount('12')
            .then(user => console.log(user))
            .catch(error => console.log(error))
    }

    closeNim() {
        console.log('close Nim')
        this.im.closeNim()
    }


    //用于测试get/post请求
    private url = "http://localhost:3000/notifications"

    getTest() {
        console.log("开始doget请求")
        this.http.get(this.url, {
            message: 'hello get', value: 'good', phone: 'abaphone'
        }, {})
            .then(data => {
                    console.log('get成功')
                    console.log(data);
                }
            )
            .catch(error => {
                console.log(error.status);
            })
    }

    postTest() {
        console.log("开始dopost请求")
        let param = {
            phone: 'abaphone', password: 'passwordasda', message: 'hello get', value: 'good'
        }
        this.http.post(this.url, param)
            .then(data => {
                    console.log("POST 成功")
                    console.log(data);
                    this.toast(data)
                }
            )
            .catch(error => {
                console.log("POST 出现了异常")
                console.log(error)
                console.log("post异常" + error.status);
            })
    }

    toast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    }


    open(page, option) {
        this.navCtrl.push(page, option)
    }


    openEmployer() {
        console.log("雇主模块")
        this.shared.setIsDesModule(false);
        this.navCtrl.setRoot(EmployerModulePage, {}, {animate: true})
    }

    openDesigner() {
        console.log("设计师模块")
        this.shared.setIsDesModule(true);
        this.navCtrl.setRoot(DesignerModulePage, {}, {animate: true});
    }

    /**
     * 打开登录/注册页面
     * */
    openLogin(typeinfo) {
        this.navCtrl.push(LoginPage, {
            type: typeinfo
        })
    }

    enterRegister() {
        this.state = 2
    }

    slidesImg = [
        "assets/img/er1.png",
        "assets/img/er2.png",
    ];

    @ViewChild(Slides) slides: Slides;

    toggleEnterBtn() {
        let currentIndex = this.slides.getActiveIndex();
        let button = document.getElementById("enterbutton");
        if (button) {
            if (this.slides.isEnd()) {
                button.style.bottom = "0";
            } else {
                button.style.bottom = "-4.6rem";
            }
        }
    }


    //todo 保存登陆信息  自动登录
}