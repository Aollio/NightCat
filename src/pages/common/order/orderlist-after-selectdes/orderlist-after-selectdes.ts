// import {Component} from '@angular/core';
import {NavController, NavControllerBase} from "ionic-angular";
import {OrderProcessModifyPage} from "../orderprocess/order-process-modify/order-process-modify";
import {Component, Input} from '@angular/core';
import {CancelProjectPage} from "../cancel-project/cancel-project";
import {OrerProcessCompleted} from "../orderprocess/order-process-complete/complete";
import {OrderProcessPayment} from "../orderprocess/order-process-payment/order-process-payment";
import {SharedService} from "../../../../service/share.service";
import {ProjectDetailPage} from "../orderdetail/projectdetail";
import {DesignerListPage} from "../../../employer/home/designer/designer-list";
import {OrderProcessWaitcomment} from "../orderprocess/order-process-waitcomment/waitcomment";

@Component({
    selector: 'page-orderlist-after-selectdes',
    templateUrl: 'orderlist-after-selectdes.html'
})

export class OrderListAfterSelectDesignerPage {

designerList:DesignerListPage;
    orderlist: Array<any> = [
        {
            status: 0,
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
        {
            status: 4,
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
            status: 5,
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
            status: 6,
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
            status: 7,
            img: 'assets/img/detail-default.png',
            title: '7777777777777中止中止中止中止中止中止',
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

    _type;

    @Input("type")
    set type(type) {

        this._type = type;

        console.log(this._type)

        if (this._type == 1) {
            this.statusMin = 0;
            this.statusMax = 0;
        }
        if (this._type == 2) {
            this.statusMin = 1;
            this.statusMax = 1;
        }
        if (this._type == 3) {
            this.statusMin = 2;
            this.statusMax = 3;
        }
        if (this._type == 4) {
            this.statusMin = 4;
            this.statusMax = 5;
        }
    }

    statusMin: number;
    statusMax: number;
    isDesigner: any;

    constructor(public nav: NavController,
                public shared: SharedService) {
        this.isDesigner = this.shared.currentModuleIsDesigner;
    }

    openProjectProcess(project) {
        if(!this.isDesigner){
            if (project.status == 0) {
                this.nav.push(ProjectDetailPage, {project: project});
            }
            if (project.status == 1) {
                this.nav.push(OrderProcessPayment, {project: project});
            }
            if (project.status == 2) {
                this.nav.push(OrderProcessModifyPage, {project: project});
            }
            if (project.status == 3) {
                this.nav.push(OrderProcessModifyPage, {project: project});
            }
            if (project.status == 4) {
                this.nav.push(OrderProcessWaitcomment, {project: project});
            }
            if (project.status == 5) {
                this.nav.push(OrerProcessCompleted, {project: project});
            }
            if (project.status == 6) {
                this.nav.push(OrerProcessCompleted, {project: project});
            }
        }
        if(this.isDesigner){
            if (project.status == 0) {
                this.nav.push(ProjectDetailPage, {project: project});
            }
            if (project.status >= 1) {
                this.nav.push(OrderProcessModifyPage, {project: project});
            }
        }
    }

    isEmpty() {
        return 0 === this.orderlist.length;
    }


    cancelProject() {
        this.nav.push(CancelProjectPage, {});
    }
    open(page,option){
        this.nav.push(page,option);
    }
}

