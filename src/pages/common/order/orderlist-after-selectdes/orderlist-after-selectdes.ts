import {NavController} from "ionic-angular";
import {OrderProcessModifyPage} from "../orderprocess/order-process-modify/order-process-modify";
import {Component, Input} from '@angular/core';
import {ProjectsService} from "../../../../service/ajax/projects.service";
import {Util} from "../../../../service/util";
import {SharedService} from "../../../../service/share.service";
import {OrderProcessComplete} from "../orderprocess/order-process-complete/complete";
import {OrderProcessWaitcomment} from "../orderprocess/order-process-waitcomment/waitcomment";
import {OrderProcessPayment} from "../orderprocess/order-process-payment/order-process-payment";
import {ProjectDetailPage} from "../orderdetail/orderdetail";

declare let initializeFontSize: any

@Component({
    selector: 'page-orderlist-after-selectdes',
    templateUrl: 'orderlist-after-selectdes.html'
})

export class OrderListAfterSelectDesignerPage {



    public orderlist = [];

    @Input("type") type;


    constructor(public nav: NavController,
                public shared: SharedService, public projectServ: ProjectsService,
                public util: Util) {

        this.orderlist.splice(0, this.orderlist.length);

        this.orderlist.length = 0;
        this.projectServ.getProjects().then(projects => {
            if (this.isLogin()) {
                let user = this.shared.getCurrentUser();
                if (!this.shared.isDesigner) {
                    for (let project of projects) {
                        if (user["uid"] == project.create_by) {
                            this.orderlist.push(project);
                        }
                    }
                }else {
                    for (let project of projects) {
                        if (user["uid"] == project.bidder) {
                            this.orderlist.push(project);
                        }
                    }
                }
            }
        }).catch(error => console.log(error));

        if (!this.isLogin()) {
            this.orderlist.splice(0, this.orderlist.length);
        }
    }

    openProjectProcess(project) {

        switch(project.status){
            case 0:
                this.nav.push(ProjectDetailPage, {project: project});
                break;
            case 1:
                this.nav.push(OrderProcessModifyPage, {project: project});
                break;
            case 2:
                this.nav.push(OrderProcessModifyPage, {project: project});
                break;
            case 4:
                this.nav.push(OrderProcessComplete, {project: project});
                break;
        }
        // if (project.status == 1) {
        //     this.nav.push(ProjectDetailPage, {project: project});
        // } else {
        //     this.nav.push(OrderProcessModifyPage, {});
        // }
    }

    isEmpty() {
        return 0 === this.orderlist.length;
    }

    isLogin() {
        let login = JSON.stringify(this.shared.getCurrentUser()) != JSON.stringify({})
        console.log("isLogin", login);
        return login;
    }

    ionViewDidEnter() {
        initializeFontSize()
    }


    getStatus(status){
        switch (status){
            case 0:return "发布项目，等待抢单";
            case 1:return "等待支付";
            case 2:return "等待支付";
            case 3:return "等待设计";
            case 4:return "完成";
        }

        // /**
        //  * 发布项目后, 项目处于发布状态. 这时候设计师可以进行抢单.
        //  * 如果没有设计师抢单, 并且项目到达截止时间后会进入'Cancel'状态
        //  */
        // Publish,
        //     /**
        //      * 雇主选择一位设计师后, 等待设计师确认
        //      */
        //     ConfirmDesigner_WaitDesignerConfitm,
        //     /**
        //      * 设计时确认后(双方确认), 等待雇主支付. 这时会生成一个对应的支付订单
        //      */
        //     BothConfirm_WaitEmployerPay,
        //     /**
        //      * 支付完成后, 等待设计师设计
        //      */
        //     PayComplete_WaitDesign,
        //     /**
        //      * 设计完成后, 由雇主进行确认设计完成. 等待评价项目. 这时将款项转给设计师账户
        //      */
        //     DesignComplete_WaitComment,
        //     /**
        //      * 若在设计过程中, 雇主和设计师之间发生了无法私下协调的问题. 由平台介入协调. 称为会审
        //      */
        //     Platform_InterPose,
        //     /**
        //      * 订单正常完成. 评价后状态为完成
        //      */
        //     Complete,
        //     /**
        //      * 订单非正常完成. e.g. 项目超时未抢单; 会审失败; 雇主没有支付; 等等
        //      */
        //     Break;





    }

}

