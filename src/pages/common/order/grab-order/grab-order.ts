import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AbsCommonPage} from "../../abs";
import {SharedService} from "../../../../service/share.service";
declare let initializeFontSize:any;
/*
 * 我要抢单
 * */
@Component({
     selector: 'grab-order',
    templateUrl: 'grab-order.html',

})
export class GrabOrderPage{

    // order_id: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public share: SharedService) {
        // super(share);
    }

    ionViewDidEnter(){
        initializeFontSize();
    }

    open(page, option) {
        this.navCtrl.push(page, {})
    }

}
