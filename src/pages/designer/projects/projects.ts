import {Component, ViewChild} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {SharedService} from "../../../service/share.service";
import {ProjectService} from "../../../service/ajax/projects.service";
import {Util} from "../../../service/util";
import {LoginPage} from "../../common/login/login";
import {ModalController} from "ionic-angular";

declare let initializeFontSize: any

@Component({
    selector: 'page-designer-projects',
    templateUrl: 'projects.html'
})

export class DesignerProjectsPage {

    type: any = 1;

    constructor(private shared: SharedService,
                private modal: ModalController,
                private projectServ: ProjectService,
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


    processType: any = [0];

    private projects = [];
    private currentProjs = [];


    //start 内容刷新
    private date;

    private syncComplete = false;
    ionViewDidEnter() {
        this.date = new Date();

        if(!this.shared.isLogin()){

            this.modal.create(LoginPage).present();
            return;
        }

        let loading = this.util.createLoading("加载中");
        loading.present();


        this._doRefresh(() => {
            this.countComplete();

            loading.dismiss();
            this.syncComplete = true;
        });
        console.log("projects:", this.projects);
    }


    doRefresh(refresher) {
        if (!this.shared.isLogin()) {
            refresher.complete();
            this.util.toast("未登录！");
            return;
        }
        this._doRefresh(() => {
            refresher.complete();

            this.countComplete();
        });
    }

    _doRefresh(completeFunc) {
        if (!this.shared.isLogin()) {
            completeFunc();
            return;
        }
        this.projectServ.getUserProjects()
            .then(projects => {
                this.projects.length = 0;
                for (let project of projects) {
                    this.projects.push(project);
                }
                this.select(this.processType);
                completeFunc();
            })
            .catch(error => {
                console.log(error);
                completeFunc();
            });
    }

    //end 内容刷新


    select(types) {
        this.currentProjs.length = 0;
        this.processType = types;
        for (let project of this.projects) {
            if (project && types.indexOf(project.status) >= 0) {
                this.currentProjs.push(project);
            }
        }
    }



    //完成数
    private completeCount = 0;

    //获得项目完成数
    countComplete(){
        this.completeCount=0;
        for(let project of this.projects){
            if([6,8,9].indexOf(project.status)>=0){
                this.completeCount++;
            }
        }
    }

}


// enum