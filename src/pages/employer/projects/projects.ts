import {Component} from '@angular/core';
import {SharedService} from "../../../service/share.service";
import {Util} from "../../../service/util";
import {ProjectService} from "../../../service/ajax/projects.service";
import {ModalController} from "ionic-angular";
import {LoginPage} from "../../common/login/login";

//注意导入

declare let initializeFontSize: any

@Component({
    selector: 'page-employer-projects',
    templateUrl: 'projects.html'
})
export class ProjectsPage {

    processType: any = [0];

    private projects = [];
    private currentProjs = [];

    //完成数
    private completeCount = 0;

    constructor(private shared: SharedService,
                private modal: ModalController,
                private projectServ: ProjectService,
                private util: Util) {
    }

    //start 内容刷新
    private date;

    private syncComplete = false;
    ionViewDidEnter() {
        this.date = new Date();

        if (!this.shared.isLogin()) {
            this.modal.create(LoginPage).present();
            this.syncComplete = true;
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
        this._doRefresh(() => {
            refresher.complete()

            this.countComplete();
        });
    }

    _doRefresh(completeFunc) {
        if (!this.shared.isLogin()) {
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


    //获得项目完成数
    countComplete(){
        this.completeCount=0;
        console.log(this.projects)
        for(let project of this.projects){
            if([6,8,9].indexOf(project.status)>=0){
                this.completeCount++;
            }
        }
    }
}
