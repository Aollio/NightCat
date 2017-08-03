// import {Component} from '@angular/core';
import {NavController, NavControllerBase} from "ionic-angular";
import {OrderProcessModifyPage} from "../orderprocess/order-process-modify/order-process-modify";
import {Component, Input} from '@angular/core';
import {ProjectDetailPage} from "../orderdetail/orderdetail";

declare let initializeFontSize: any

@Component({
    selector: 'page-orderlist-after-selectdes',
    templateUrl: 'orderlist-after-selectdes.html'
})

export class OrderListAfterSelectDesignerPage {


    orderlist: Array<any> = [
        {
            status: 1,
            img: 'assets/img/fav-avatar.png',
            title: '自建别墅设计/自建房设计/精品自建住宅\n' +
            '商业地产工程bim建筑设计策划',
            time: '6天1小时',

            "id": "id0",

            "type": "建筑设计",
            "content": "项目内容, 画出一个设计图",
            "budget": 100000000,
            "area_count": 100,
            "depth": 0,
            "period": 129,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "create_by": "1",
            "create_time": 1500882001493,
            "good": true,
            "modify_by": "",
            "modify_time": "",
            "modify_remark": "",
            "due_time": 1500882001493,
            "view_count": 0,
            "fav_count": 0,
            "bidder": "",
            "bid_time": "",
            "audit_by": "",
            "audit_time": "",
            "img_url": '/assets/img/des-1.png'
        },
        {
            status: 1,
            img: 'assets/img/detail-default.png',
            title: '自建别墅设计/自建房设计/精品自建住宅\n' +
            '商业地产工程bim建筑设计策划',
            time: '6天1小时'
            ,
            "id": "id0",

            "type": "建筑设计",
            "content": "项目内容, 画出一个设计图",
            "budget": 100000000,
            "area_count": 100,
            "depth": 0,
            "period": 129,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "create_by": "1",
            "create_time": 1500882001493,
            "good": true,
            "modify_by": "",
            "modify_time": "",
            "modify_remark": "",
            "due_time": 1500882001493,
            "view_count": 0,
            "fav_count": 0,
            "bidder": "",
            "bid_time": "",
            "audit_by": "",
            "audit_time": "",
            "img_url": '/assets/img/des-1.png'
        },
        {
            status: 1,
            img: 'assets/img/fav-avatar.png',
            title: '自建别墅设计/自建房设计/精品自建住宅\n' +
            '商业地产工程bim建筑设计策划',
            time: '6天1小时',

            "id": "id0",

            "type": "建筑设计",
            "content": "项目内容, 画出一个设计图",
            "budget": 100000000,
            "area_count": 100,
            "depth": 0,
            "period": 129,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "create_by": "1",
            "create_time": 1500882001493,
            "good": true,
            "modify_by": "",
            "modify_time": "",
            "modify_remark": "",
            "due_time": 1500882001493,
            "view_count": 0,
            "fav_count": 0,
            "bidder": "",
            "bid_time": "",
            "audit_by": "",
            "audit_time": "",
            "img_url": '/assets/img/des-1.png'
        },
        {
            status: 1,
            img: 'assets/img/fav-avatar.png',
            title: '自建别墅设计/自建房设计/精品自建住宅\n' +
            '商业地产工程bim建筑设计策划',
            time: '6天1小时',

            "id": "id0",

            "type": "建筑设计",
            "content": "项目内容, 画出一个设计图",
            "budget": 100000000,
            "area_count": 100,
            "depth": 0,
            "period": 129,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "create_by": "1",
            "create_time": 1500882001493,
            "good": true,
            "modify_by": "",
            "modify_time": "",
            "modify_remark": "",
            "due_time": 1500882001493,
            "view_count": 0,
            "fav_count": 0,
            "bidder": "",
            "bid_time": "",
            "audit_by": "",
            "audit_time": "",
            "img_url": '/assets/img/des-1.png'
        },
        {
            status: 2,
            img: 'assets/img/detail-default.png',
            title: '自建别墅设计/自建房设计/精品自建住宅\n' +
            '商业地产工程bim建筑设计策划',
            time: '6天1小时',

            "id": "id0",

            "type": "建筑设计",
            "content": "项目内容, 画出一个设计图",
            "budget": 100000000,
            "area_count": 100,
            "depth": 0,
            "period": 129,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "create_by": "1",
            "create_time": 1500882001493,
            "good": true,
            "modify_by": "",
            "modify_time": "",
            "modify_remark": "",
            "due_time": 1500882001493,
            "view_count": 0,
            "fav_count": 0,
            "bidder": "",
            "bid_time": "",
            "audit_by": "",
            "audit_time": "",
            "img_url": '/assets/img/des-1.png'
        },
        {
            status: 3,
            img: 'assets/img/fav-avatar.png',
            title: '自建别墅设计/自建房设计/精品自建住宅\n' +
            '商业地产工程bim建筑设计策划',
            time: '6天1小时',

            "id": "id0",

            "type": "建筑设计",
            "content": "项目内容, 画出一个设计图",
            "budget": 100000000,
            "area_count": 100,
            "depth": 0,
            "period": 129,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "create_by": "1",
            "create_time": 1500882001493,
            "good": true,
            "modify_by": "",
            "modify_time": "",
            "modify_remark": "",
            "due_time": 1500882001493,
            "view_count": 0,
            "fav_count": 0,
            "bidder": "",
            "bid_time": "",
            "audit_by": "",
            "audit_time": "",
            "img_url": '/assets/img/des-1.png'
        },
    ];

    @Input("type") type;


    constructor(public nav: NavController) {
    }

    openProjectProcess(project) {
        if (project.status == 1) {
            this.nav.push(ProjectDetailPage, {project: project});
        } else {
            this.nav.push(OrderProcessModifyPage, {});
        }
    }

    isEmpty() {
        return 0 === this.orderlist.length;
    }

    ionViewDidEnter() {
        initializeFontSize()
    }
}

