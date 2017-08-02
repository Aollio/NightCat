import {Component} from '@angular/core';
import {NavController, NavControllerBase} from "ionic-angular";
import {OrderProcessModifyPage} from "../orderprocess/order-process-modify/order-process-modify";

declare let initializeFontSize: any

@Component({
    selector: 'page-orderlist-after-selectdes',
    templateUrl: 'orderlist-after-selectdes.html'
})

export class OrderListAfterSelectDesignerPage {


    orderlist: Array<{ img, title, fav_count, time }> = [
        {
            img: 'assets/img/fav-avatar.png',
            title: '自建别墅设计/自建房设计/精品自建住宅\n' +
            '商业地产工程bim建筑设计策划',
            fav_count: '8',
            time: '6天1小时'
        },
        {
            img: 'assets/img/detail-default.png',
            title: '自建别墅设计/自建房设计/精品自建住宅\n' +
            '商业地产工程bim建筑设计策划',
            fav_count: '8',
            time: '6天1小时'
        },
        {
            img: 'assets/img/fav-avatar.png',
            title: '自建别墅设计/自建房设计/精品自建住宅\n' +
            '商业地产工程bim建筑设计策划',
            fav_count: '8',
            time: '6天1小时'
        },
    ];

    constructor(public nav: NavController) {
    }

    openProjectProcess() {
        this.nav.push(OrderProcessModifyPage, {});
    }

    isEmpty() {
        return 0 === this.orderlist.length;
    }

    ionViewDidEnter() {
        initializeFontSize()
    }
}

