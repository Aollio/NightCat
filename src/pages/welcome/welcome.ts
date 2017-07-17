import {Component} from '@angular/core';
import { NavController, NavParams, Platform, ToastController} from 'ionic-angular';
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

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class WelcomePage {

    rootPage: any;


    /**
     * 这是主页的快速入口，用于开发
     * */
    orderDetailPage: any = OrderDetailPage;
    orderListComponent: any = OrderListComponent;

    employerHome: any = EmployerModulePage;
    employerLogin: any = LoginPage;
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

    projectsPage: any = ProjectsPage;
    list: any = BlankPage;

    commentOrderPage:any = CommentOrderPage;


    constructor(public navCtrl: NavController, public navParams: NavParams,
                public platform: Platform,
                public toastCtrl: ToastController,
                public http: NetworkService) {


    }


    //用于测试get/post请求
    private url = "http://192.168.100.154:8080/users"

    getTest() {
        console.log("开始doget请求")
        this.http.get(this.url, {}, {})
            .then(data => {
                    console.log(data);
                    this.handlerSucc(data)
                }
            )
            .catch(error => {
                console.log(error.status);
                this.handerError(error)
            })
    }

    handlerSucc(data) {
        this.toast(data);
    }

    handerError(error) {
        this.toast(error.message);
    }


    postTest() {
        console.log("开始dopost请求")
        let param = {
            phone: 'abaphone', password: 'passwordasda'
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


    /**
     * 打开登录/注册页面
     * */
    openLogin(typeinfo) {
        this.navCtrl.push(LoginPage, {
            type: typeinfo
        })
    }


}