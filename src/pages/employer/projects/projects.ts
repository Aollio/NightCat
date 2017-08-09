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

    type: any = 1;

    private projects = [];


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
                this.projects = projects;
                completeFunc();
            })
            .catch(error => {
                console.log(error);
                completeFunc();
            });
    }

    //end 内容刷新

    select(type) {
        if (type === 'wait_design') {
            this.type = 1
        } else if (type === 'wait_outcome') {
            this.type = 2
        } else if (type === 'wait_comment') {
            this.type = 3
        } else if (type === 'all') {
            this.type = 4
        }
    }


}
