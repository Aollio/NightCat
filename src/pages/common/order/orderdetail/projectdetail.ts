import {Component} from '@angular/core';
import {AlertController, IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {SharedService} from "../../../../service/share.service";
import {AbsCommonPage} from "../../abs";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
import {PayPage} from "../../../employer/pay/pay";
import {CommentOrderPage} from "../comment-order/comment-order";
import {ChatPage} from "../../../im/chat/chat";
import {ProjectsService} from "../../../../service/ajax/projects.service";
import {Util} from "../../../../service/util";
import {GrabOrderPage} from "../grab-order/grab-order";
import {OrderProcessPreSelectedPage} from "../orderprocess/order-process-pre-selectdes/order-process-pre-selectdes";
import {UsersService} from "../../../../service/ajax/users.service";
import {LoginPage} from "../../login/login";

declare let initializeFontSize: any
/*
 * 订单详情
 * */

// @IonicPage()
@Component({
    selector: 'page-project-detail',
    templateUrl: 'projectdetail.html',
})
export class ProjectDetailPage extends AbsCommonPage {

    project;
    imgs;
    creator;

    collectstate: any = 0;

    // /**
    //  * 先暂时设为参数为order id，或者为order的对象。
    //  * 构造器判断一下，如果是order id，则显示加载符号，如果是order直接显示
    //  * */
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private modal: ModalController,
                public shared: SharedService,
                private alert: AlertController,
                private projsServ: ProjectsService,
                private userServ: UsersService,
                private util: Util) {
        super(shared);
        this.project = navParams.get('project');
        this.imgs = navParams.get('imgs');

        console.log("project", this.project);
        this.getCreatorSimpleInfo(this.project.create_by);
    }

    //获取雇主头像 昵称
    private getCreatorSimpleInfo(uid) {
        console.log("get user simple info");
        this.userServ.getInfoSimple(uid).then(user => {
            this.creator = user;
            // this.util.updateObj(this.creator,user);
        }).catch(error => {
            console.log(error);
        })
    }


    openOrderrocessPreSelectdesPage(){
        this.navCtrl.push(OrderProcessPreSelectedPage);
    }

    openPayPage(){
        this.navCtrl.push(PayPage);
    }

    openCommentOrderPage(){
        this.navCtrl.push(CommentOrderPage);
    }

    /*
    * favorite one order
    * */
    collect() {
        this.collectstate = (++this.collectstate) % 2;
    }

    // grabOrder() {
    //     this.util.createLoading('正在抢单中')
    //     this.projsServ.grabProj('this is project\'s id')
    //         .then(() => {
    //         })
    //         .catch(error => {
    //         })
    // }

    openChat(operation) {
        this.navCtrl.push(ChatPage, operation);
    }



    openGrabOrderPage() {
        console.log("isLogin()",this.shared.isLogin());
        if (!this.shared.isLogin()) {
            let alert = this.alert.create({
                title: '提醒',
                message: '抢单需要登录，是否登录？',
                buttons: [
                    {
                        text: '取消',
                    },
                    {
                        text: '确定',
                        handler: () => {
                            console.log("确定");
                            this.modal.create(LoginPage).present();
                        }
                    }
                ]
            })
            alert.present();
            return;
        }
        this.navCtrl.push(GrabOrderPage, {id: this.project.id});
    }
}
