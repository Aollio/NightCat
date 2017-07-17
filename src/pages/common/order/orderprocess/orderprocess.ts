import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AbsCommonPage} from "../../abs";
import {SharedService} from "../../../../service/share.service";

/*
 * 订单详情
 * */
@Component({
    selector: 'page-orderprocess',
    templateUrl: 'orderprocess.html',
})
export class OrderProcessDetailPage extends AbsCommonPage {

    order_id: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public share: SharedService) {
        super(share);
    }


    open(page, option) {
        this.navCtrl.push(page, {})
    }

}
