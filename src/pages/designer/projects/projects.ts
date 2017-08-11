import {Component, ViewChild} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {SharedService} from "../../../service/share.service";
import {ProjectsService} from "../../../service/ajax/projects.service";
import {Util} from "../../../service/util";
declare let initializeFontSize: any

@Component({
    selector: 'page-designer-projects',
    templateUrl: 'projects.html'
})

export class DesignerProjectsPage {

    type: any = 1;

    constructor(private share: SharedService,
                private projectServ: ProjectsService,
                private util: Util) {
    }


    // select(type) {
    //     if (type === 'wait_design') {
    //         this.type = 1
    //     } else if (type === 'wait_outcome') {
    //         this.type = 2
    //     } else if (type === 'wait_comment') {
    //         this.type = 3
    //     } else if (type === 'all') {
    //         this.type = 4
    //     }
    // }




    // //todo 内容刷新
    // doRefresh(refresher) {
    //     console.log('Begin async operation', refresher);
    //
    //     setTimeout(() => {
    //         console.log('Async operation has ended');
    //         refresher.complete();
    //     }, 2000);
    // }





    processType: any = 0;

    private projects = [];
    private currentProjs = [];



    //start 内容刷新
    private date;

    ionViewDidEnter() {
        this.date = new Date();
        this._doRefresh(() => {
        });
        console.log("projects:", this.projects);
    }


    doRefresh(refresher) {
        if (!this.share.isLogin()) {
            refresher.complete();
            this.util.toast("未登录！");
            return;
        }
        this._doRefresh(() => {
            refresher.complete()
        });
    }

    _doRefresh(completeFunc) {
        if (!this.share.isLogin()) {
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


// enum