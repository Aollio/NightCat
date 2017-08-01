import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
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

declare let initializeFontSize: any
/*
 * 订单详情
 * */

// @IonicPage()
@Component({
    selector: 'page-orderdetail',
    templateUrl: 'orderdetail.html',
})
export class OrderDetailPage extends AbsCommonPage {

    order_id: string;
    isDesigner: boolean;
    collectstate: any = 0;
    pay: any = PayPage;
    commentorder: any = CommentOrderPage;
    orderrocessPreSelectdesPage: any = OrderProcessPreSelectedPage;

    /**
     * 先暂时设为参数为order id，或者为order的对象。
     * 构造器判断一下，如果是order id，则显示加载符号，如果是order直接显示
     * */
    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public share: SharedService,
                private projsServ:ProjectsService,
                private util:Util) {
        super(share);
        this.order_id = navParams.get('order_id');
        this.isDesigner = share.currentModuleIsDesigner;
    }

    ionViewDidEnter() {
        initializeFontSize()
        console.log("com")
    }

    openUserDetail() {
        this.navCtrl.push(DesignerMeDetailPage, {})

    }



    open(page, option) {
        this.navCtrl.push(page, {})
    }

    /*
    * favorite one order
    * */
    collect() {
        this.collectstate = (++this.collectstate) % 2;
    }

    grabOrder(){
        this.util.createLoading('正在抢单中')
        this.projsServ.grabProj('this is project\'s id')
            .then(() => {})
            .catch(error => {})
    }

    openChat(operation) {
        this.navCtrl.push(ChatPage,operation);
    }

    openGrabOrderPage(orderId){
        this.navCtrl.push(GrabOrderPage,orderId);
    }
}
