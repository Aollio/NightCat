import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AbsCommonPage} from "../../../abs";
import {SharedService} from "../../../../../service/share.service";
declare let initializeFontSize:any;
/*
 * 订单详情
 * */
@Component({
    selector: 'page-order-process-pre-selectdes',
    templateUrl: 'order-process-pre-selectdes.html',
})
export class OrderProcessPreSelectedPage extends AbsCommonPage {

    order_id: string;

    constructor(public navCtrl: NavController,
                // public navParams: NavParams,
                public share: SharedService) {
        super(share);
    }

    ionViewDidEnter(){
        initializeFontSize()
        console.log("com")
    }
    open(page, option) {
        this.navCtrl.push(page, {})
    }

}
