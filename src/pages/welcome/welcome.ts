import {Component} from '@angular/core';
import {NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {LoginPage} from "../common/login/login";
import {OrderDetailPage} from "../common/order/orderdetail/orderdetail"
import {OrderListComponent} from "../designer/orderlist/orderlist";
import {EmployerModulePage} from "../employer/employer";
import {DesignerModulePage} from "../designer/designer";
import {PublishTaskPage} from "../common/publishtask/publishtask";
import {DesignerWalletPage} from "../designer/wallet/wallet";
import {CommentPage} from "../designer/comment/comment";
import {TaskSquarePage} from "../designer/tasksquare/tasksquare";
import {ChatMessagePage} from "../designer/chatmessage/chatmessage";
import {BlankPage} from "../blank/blank";
import {DesignerMeDetailPage} from "../designer/me/medetail/medetail";
import {AddCasePage} from "../designer/me/addcase/addcase";
import {AddHonorPage} from "../designer/me/addhonor/addhonor";
import {CaseDetailPage} from "../designer/me/casedetail/casedetail";
import {ProjectsPage} from "../employer/projects/projects";
import {NetworkService} from "../../service/network.service";
import {PayPage} from "../employer/pay/pay";
import {CommentOrderPage} from "../common/order/comment-order/comment-order";
import {ChooseDesignerPage} from "../employer/choosedesigner/choosedesigner";
import {DesignerTabsPage} from "../designer/tabs/tabs";
import {SharedService} from "../../service/share.service";
import {EmployerTabsPage} from "../employer/tabs/tabs";
import {ImService} from "../../service/im/service.im";
import {IMPage} from "../im/im";
import {ChatPage} from "../im/chat/chat";
import {State} from "../../service/im/state.im";
import {SearchDesignerPage} from "../employer/searchdesigner/searchdesigner";
import {RegisterPage} from "../common/register/register";
import {OrderProcessDetailPage} from "../common/order/orderprocess/orderprocess";


@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class WelcomePage {

    rootPage: any;
    state: any = 1;
    register: any = RegisterPage;

    /**
     * 这是主页的快速入口，用于开发
     * */
    orderDetailPage: any = OrderDetailPage;
    orderListComponent: any = OrderListComponent;

    employerHome: any = EmployerModulePage;

    loginPage: any = LoginPage;

    designerLogin: any = LoginPage;

    designerHome: any = DesignerModulePage;


    pulishtaskPage: any = PublishTaskPage;
    designerWalletPage: any = DesignerWalletPage;
    taskSquarePage: any = TaskSquarePage;
    commentPage: any = CommentPage;
    chatMessagePage: any = ChatMessagePage;
    designerMeDetailPage: any = DesignerMeDetailPage;
    addcase: any = AddCasePage;
    addhonor: any = AddHonorPage;
    casedetail: any = CaseDetailPage;
    paypage: any = PayPage;
    choosedesigner: any = ChooseDesignerPage;
    projectsPage: any = ProjectsPage;
    list: any = BlankPage;
    searchdesigner: any = SearchDesignerPage;
    commentOrderPage: any = CommentOrderPage;
    orderProcessDetailPage:any=OrderProcessDetailPage;

    constructor(public navCtrl: NavController, public navParams: NavParams,
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

    }

    openChat() {
        this.navCtrl.push(ChatPage, {})
    }

    openMsgs() {
        this.navCtrl.push(IMPage, {})
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
    private url = "http://localhost:3000/hello"

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
        this.shared.isDesigner = false;
        this.navCtrl.push(EmployerModulePage, {})
    }

    openDesigner() {
        this.shared.isDesigner = true;
        this.navCtrl.push(DesignerModulePage, {});
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

    slides = [
        "assets/img/Walkthrough_1.png",
        "assets/img/Walkthrough_2.png",
        "assets/img/Walkthrough_3.png",
        "assets/img/Walkthrough_4.png"
    ];


}