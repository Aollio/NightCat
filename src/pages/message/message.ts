import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {OrderDetailPage} from "../orderdetail/orderdetail";

@Component({
    selector: 'page-message',
    templateUrl: 'message.html'
})
export class MessagePage {

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

}
