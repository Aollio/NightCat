import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProjectDetailPage} from "../../common/order/orderdetail/projectdetail";
import {PublishTaskPage} from "../../common/publishtask/publishtask";
import {SharedService} from "../../../service/share.service";
import {KeynoteService} from "../../../service/keynote.service";

@Component({
    selector: 'page-notifications',
    templateUrl: 'notifications.html'
})
export class NotificationsPage {

    publishtaskpage = PublishTaskPage;

    maincolor: string;

    constructor(public navCtrl: NavController,
                public shared: SharedService,
                public keynote:KeynoteService) {
        this.maincolor = shared.getPrimaryColor();
    }


    /**
     * 打开订单详情页面，参数为订单id
     * */
    openOrderDetail(id) {
        this.navCtrl.push(ProjectDetailPage, {
            order: this.keynote.projects[0]
        })
    }

    openPage(page, option) {
        this.navCtrl.push(page, option)
    }

    //todo 内容刷新
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }

}
