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
                private alertCtrl:AlertController) {

    }

    private _project;
    private status;

    @Input()
    set project(project) {
        this._project = project;
        this.status = project.status;

        console.log('get project imgs');
        this.projServ.getProjectImgs(project.id).then(imgs => {
            this.imgs = imgs;
        }).catch(error => {
            console.log(error);
        });
    }

    private imgs;


    openProjectProcess(project) {
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
        this.nav.push(CancelProjectPage, {});
    }

    openDesignerListPage() {
        this.nav.push(ChooseDesignerPage, {projectId: this._project.id});
    }

    openPaymentPage(project){
        this.nav.push(OrderProcessPayment, {project: project});
    }

    openWaitcommentPage(project){
        this.nav.push(OrderProcessWaitcomment, {project: project});
    }

    Pay(project){
        this.nav.push(OrderProcessPayment, {project: project});
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

