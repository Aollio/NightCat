import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {OrderDetailPage} from "../../common/order/orderdetail/orderdetail";
import {PublishTaskPage} from "../publishtask/publishtask";

@Component({
    selector: 'page-message',
    templateUrl: 'message.html'
})
export class MessagePage {

    publishtaskpage = PublishTaskPage;
    constructor(public navCtrl: NavController) {

    }


    /**
     * 打开订单详情页面，参数为订单id
     * */
    openOrderDetail(order_id) {
        this.navCtrl.push(OrderDetailPage, {
            order_id: order_id
        })
    }
    openPage(page,option){
        this.navCtrl.push(page,option)
    }

}
