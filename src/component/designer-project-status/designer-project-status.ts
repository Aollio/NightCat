import {Component, Input} from '@angular/core';
import {ProjectDetailPage} from "../../pages/common/order/orderdetail/projectdetail";
import {OrderProcessModifyPage} from "../../pages/common/order/orderprocess/order-process-modify/order-process-modify";
import {NavController} from "ionic-angular";
import {ProjectService} from "../../service/ajax/projects.service";
import {DesignerListPage} from "../../pages/employer/home/designer/designer-list";
import {CancelProjectPage} from "../../pages/common/order/cancel-project/cancel-project";
import {OrerProcessCompleted} from "../../pages/common/order/orderprocess/order-process-complete/complete";
import {Util} from "../../service/util";
import {PublishTaskPage} from "../../pages/common/publishtask/publishtask";

declare let initializeFontSize: any

@Component({
    selector: 'designer-project-status',
    templateUrl: 'designer-project-status.html'
})

export class DesignerProjectStatusComponent {

    constructor(private nav: NavController,
                private util: Util,
                private projectServ: ProjectService,
                private projServ: ProjectService,) {
    }

    private _project;
    private status;

    private imgs;


    private statusText = [
        "等待雇主确认",
        "待确认",
        "待修改",
        "等待雇主支付",
        "待交付",
        "等待雇主收货",
        "已完成",
        "审图中",
        "已完成",
        "已取消",
    ];

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

    openProjectProcess(project) {
        if (project.status == 8 || project.status == 9 || project.status == 6) {
            this.nav.push(OrerProcessCompleted, {project: project});
        }
        else {
            this.nav.push(OrderProcessModifyPage, {project: project});
        }
    }

    cancelProject() {
        this.nav.push(CancelProjectPage, {projectId: this._project.id});
    }

    designerConfirm() {
        this.projectServ.designerConfirm(this._project.id)
            .then(() => {
                this.util.toast("接单成功");
                this.nav.goToRoot({});
            }).catch(error => {
            console.log(error);
            this.util.toast("确认失败，请稍后再试");
        })
    }

    openPublishTask() {
        this.nav.push(PublishTaskPage, {project: this._project});
    }

    commitProject() {
        this.projectServ.commit(this._project.id)
            .then(() => {
                this.nav.pop();
            }).catch(error => {
            console.log(error);
            this.util.toast("提交失败，请稍后再试");
        })
    }

}

