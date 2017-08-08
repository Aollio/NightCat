import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AbsCommonPage} from "../../../abs";
import {SharedService} from "../../../../../service/share.service";
import {ProjectDetailPage} from "../../orderdetail/projectdetail";

declare let initializeFontSize: any;

/*
 * 订单详情
 * */
@Component({
    selector: 'page-order-process-pre-selectdes',
    templateUrl: 'order-process-pre-selectdes.html',
})
export class OrderProcessPreSelectedPage extends AbsCommonPage {

    order_id: string;
    isGrab;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public share: SharedService) {
        super(share);
        this.isGrab = navParams.get('isGrab');
    }

    ionViewDidEnter() {
        initializeFontSize()
        console.log("com")
    }

    open(page, option) {
        this.navCtrl.push(page, {})
    }

    goback() {
        if (this.isGrab) {
            // this.navCtrl.popTo(ProjectDetailPage);
            this.navCtrl.popToRoot({animate: true});
        } else {
            this.navCtrl.pop();

        }
    }

}
