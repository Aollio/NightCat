import {Component, Input} from '@angular/core';
import {NavController} from "ionic-angular";
import {ProjectDetailPage} from "../../pages/common/order/orderdetail/projectdetail";
import {OrderProcessPayment} from "../../pages/common/order/orderprocess/order-process-payment/order-process-payment";
import {OrderProcessModifyPage} from "../../pages/common/order/orderprocess/order-process-modify/order-process-modify";
import {OrerProcessCompleted} from "../../pages/common/order/orderprocess/order-process-complete/complete";
import {CancelProjectPage} from "../../pages/common/order/cancel-project/cancel-project";
import {ProjectsService} from "../../service/ajax/projects.service";
import {DesignerListPage} from "../../pages/employer/home/designer/designer-list";
import {Util} from "../../service/util";

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
                private util: Util) {

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
            this.nav.push(OrderProcessModifyPage, {project: project});
        }
        if (project.status == 5) {
            this.nav.push(OrerProcessCompleted, {project: project});
        }
        if (project.status == 6) {
            this.nav.push(OrerProcessCompleted, {project: project});
        }
    }

    cancelProject() {
        this.nav.push(CancelProjectPage, {});
    }

    openDesignerListPage() {
        this.nav.push(DesignerListPage, {previousPage: 'chooseDesigner'});
    }

}

