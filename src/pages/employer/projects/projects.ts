import {Component, ViewChild} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {EmpOrderListComponent} from "./emporderlist/emporderlist";
import {SharedService} from "../../../service/share.service";
import {Util} from "../../../service/util";
import {ProjectsService} from "../../../service/ajax/projects.service";

declare let initializeFontSize: any

@Component({
    selector: 'page-employer-projects',
    templateUrl: 'projects.html'
})
export class ProjectsPage {

    processType: any = 0;

    private projects = [];
    private currentProjs = [];

    constructor(private share: SharedService,
                private projectServ: ProjectsService,
                private util: Util) {
    }

    //start 内容刷新
    private date;

    ionViewDidEnter() {
        this.date = new Date();
        this._doRefresh(() => {
        });
        console.log("projects:", this.projects);
    }


    doRefresh(refresher) {
        this._doRefresh(() => (refresher.complete()));
    }

    _doRefresh(completeFunc) {
        if (!this.share.isLogin()) {
            this.util.toast("未登录！");
            completeFunc();
            return;
        }
        this.projectServ.getUserProjects()
            .then(projects => {
                this.projects.length = 0;
                for (let project of projects) {
                    this.projects.push(project);
                }
                completeFunc();
                this.select([this.processType]);
            })
            .catch(error => {
                console.log(error);
                completeFunc();
            });
    }

    //end 内容刷新


    select(types) {
        this.currentProjs.length = 0;
        this.processType = types[0];
        for (let project of this.projects) {
            if (project && types.indexOf(project.status) >= 0) {
                this.currentProjs.push(project);
            }
        }
    }
}
