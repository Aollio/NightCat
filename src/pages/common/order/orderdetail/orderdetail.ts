import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {OrderProcessDetailPage} from "../orderprocess/orderprocess";
import {SharedService} from "../../../../service/share.service";
import {AbsCommonPage} from "../../abs";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";

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

    orderProcessDetail: any = OrderProcessDetailPage;

    /**
     * 先暂时设为参数为order id，或者为order的对象。
     * 构造器判断一下，如果是order id，则显示加载符号，如果是order直接显示
     * */
    constructor(public navCtrl: NavController, public navParams: NavParams, public share: SharedService) {
        super(share);
        this.order_id = navParams.get('order_id');
    }


    openUserDetail(){
        this.navCtrl.push(DesignerMeDetailPage, {})

    }

    open(page, option) {
        this.navCtrl.push(page, {})
    }

}
