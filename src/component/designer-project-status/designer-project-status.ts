import {Component, Input} from '@angular/core';
import {ProjectDetailPage} from "../../pages/common/order/orderdetail/projectdetail";
import {OrderProcessModifyPage} from "../../pages/common/order/orderprocess/order-process-modify/order-process-modify";
import {NavController} from "ionic-angular";
import {ProjectsService} from "../../service/ajax/projects.service";
import {DesignerListPage} from "../../pages/employer/home/designer/designer-list";

declare let initializeFontSize: any

@Component({
    selector: 'designer-project-status',
    templateUrl: 'designer-project-status.html'
})

export class DesignerProjectStatusComponent {

    constructor(private nav: NavController,
    private projServ:ProjectsService,
    ) {
    }

    private _project;
    private status;

    private imgs;

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

        if (project.status == 0) {
            this.nav.push(ProjectDetailPage, {project: project});
        }
        if (project.status >= 1) {
            this.nav.push(OrderProcessModifyPage, {project: project});
        }
    }

}

