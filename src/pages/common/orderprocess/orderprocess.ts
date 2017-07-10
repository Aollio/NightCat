import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
 * 订单详情
 * */
@Component({
    selector: 'page-orderprocess',
    templateUrl: 'orderprocess.html',
})
export class OrderProcessDetailPage {

    order_id: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }


    open(page, option) {
        this.navCtrl.push(page, {})
    }

}
