import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {OrderDetailPage} from "../../common/order/orderdetail/orderdetail";

@Component({
    selector: 'com-orderlist',
    templateUrl: 'orderlist.html'
})
export class OrderListComponent {
    constructor(public navCtrl: NavController) {

    }

    openOrderDetail() {
        this.navCtrl.push(OrderDetailPage, {role: "designer"})
    }
}
