import {Component, Input} from '@angular/core';
import {AlertController, NavController} from "ionic-angular";
import {ProjectDetailPage} from "../../pages/common/order/orderdetail/projectdetail";
import {OrderProcessPayment} from "../../pages/common/order/orderprocess/order-process-payment/order-process-payment";
import {OrderProcessModifyPage} from "../../pages/common/order/orderprocess/order-process-modify/order-process-modify";
import {OrerProcessCompleted} from "../../pages/common/order/orderprocess/order-process-complete/complete";
import {CancelProjectPage} from "../../pages/common/order/cancel-project/cancel-project";
import {ProjectsService} from "../../service/ajax/projects.service";
import {DesignerListPage} from "../../pages/employer/home/designer/designer-list";
import {Util} from "../../service/util";
import {OrderProcessWaitcomment} from "../../pages/common/order/orderprocess/order-process-waitcomment/waitcomment";
import {ChooseDesignerPage} from "../../pages/employer/choosedesigner/choosedesigner";
import {OrderProcessPreSelectedPage} from "../../pages/common/order/orderprocess/order-process-pre-selectdes/order-process-pre-selectdes";
import {CommentOrderPage} from "../../pages/common/order/comment-order/comment-order";

declare let initializeFontSize: any

@Component({
    selector: 'employer-project-status',
    templateUrl: 'employer-project-status.html'
})

export class EmployerProjectStatusComponent {


    ionViewDidEnter() {

    }

    constructor(private nav: NavController,
                private projServ: ProjectsService,
                private util: Util,
                private alertCtrl: AlertController) {

    }

    private _project;
    private status;

    private statusText = [
        "已发布",
        "等待设计师确认",
        "等待设计师完善信息",
        "待支付",
        "等待设计师交付",
        "待收货",
        "待评价",
        "审图中",
        "已完成",
        "已取消",
    ];

    @Input()
    set project(project) {
        this._project = project;
        this.status = project.status;
    }


    openProjectProcess(project) {
        if (project.status == 3) {
            this.nav.push(OrderProcessPayment, {project: project});
        }
        else if (project.status == 6) {
            this.nav.push(OrderProcessWaitcomment, {project: project});
        }
        else if (project.status == 8 || project.status == 9) {
            this.nav.push(OrerProcessCompleted, {project: project});
        }
        else {
            this.nav.push(OrderProcessModifyPage, {project: project});
        }
    }

    // openProjectProcess(project) {
    //     if(this.isDesigner){
    //         if (project.status == 0) {
    //             this.nav.push(ProjectDetailPage, {project: project});
    //         }
    //         if (project.status >= 1) {
    //             this.nav.push(OrderProcessModifyPage, {project: project});
    //         }
    //     }
    // }


    cancelProject() {
        this.nav.push(CancelProjectPage, {projectId: this._project.id});
    }

    openDynamicProjectPage() {
        this.nav.push(OrderProcessPreSelectedPage, {projectId: this._project.id});
    }

    openPaymentPage() {
        this.nav.push(OrderProcessPayment, {project: this._project});
    }

    openWaitcommentPage() {
        this.alertCtrl.create({
            subTitle: '是否确认收货？',
            buttons: [
                {
                    text: '取消',
                },
                {
                    text: '确认',
                    handler: () => {
                        this.projServ.employerHarvest(this._project.id).then(() => {
                            this.util.toast("确认成功")
                            this.nav.push(OrderProcessWaitcomment, {project: this._project});
                        }).catch(error => {
                            console.log(error);
                            this.util.toast("确认失败");
                        })
                    }
                }
            ]
        }).present();
    }


    openCommentOrderPage() {
        this.nav.push(CommentOrderPage, {project: this._project});
    }


    showAlert() {
        let confirm = this.alertCtrl.create({
            title: '审图',
            message: '您对设计师的作品不满意，需要我们提供帮助吗？点击确认，我们会尽快联系您。',
            buttons: [
                {
                    text: '确认',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '取消',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }
}

