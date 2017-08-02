import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProjectDetailPage} from "../../common/order/orderdetail/orderdetail";
import {PublishTaskPage} from "../../common/publishtask/publishtask";
import {SharedService} from "../../../service/share.service";

@Component({
    selector: 'page-notifications',
    templateUrl: 'notifications.html'
})
export class NotificationsPage {

    publishtaskpage = PublishTaskPage;

    maincolor: string;

    constructor(public navCtrl: NavController,
                public shared: SharedService) {
        this.maincolor = shared.getPrimaryColor();
    }


    /**
     * 打开订单详情页面，参数为订单id
     * */
    openOrderDetail(order_id) {
        this.navCtrl.push(ProjectDetailPage, {
            order_id: order_id
        })
    }

    openPage(page, option) {
        this.navCtrl.push(page, option)
    }

}
