import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProjectDetailPage} from "../orderdetail/orderdetail";
import {KeynoteService} from "../../../../service/keynote.service";
import {Util} from "../../../../service/util";
import {ProjectsService} from "../../../../service/ajax/projects.service";

declare let initializeFontSize: any

@Component({
    selector: 'order-list',
    templateUrl: 'orderlist.html'
})
export class OrderListComponent {

    projects = []

    constructor(public navCtrl: NavController,
                public keynote: KeynoteService,
                public projectServ:ProjectsService,
                private util: Util) {

        this.projectServ.getProjects().then(projects => {
                for (let project of projects) {
                    this.projects.push(project);
                }
        }).catch(error => console.log(error));

        // for (let proj of this.keynote.projects) {
        //     proj['show_time'] = this.util.formatDate(proj.due_time,true);
        //     this.projects.push(proj)
        // }
    }

    ionViewDidEnter() {
        initializeFontSize()
    }

    openProjectDetail(project) {
        this.navCtrl.push(ProjectDetailPage, {project: project})
    }

    caseArray: Array<{ caseImg, caseDesc, caseMoney, caseFav, caseTime }> = [
        {
            caseImg: '/assets/img/des-1.png',
            caseDesc: '园区导视，布点规划，文化导入，精神堡垒，展厅，室内软装设计等许多内容、不一一展示',
            caseMoney: '500',
            caseFav: '8',
            caseTime: '6天1小时'
        },
        {
            caseImg: '/assets/img/des-1.png',
            caseDesc: '园区导视，布点规划，文化导入，精神堡垒，展厅，室内软装设计等许多内容、不一一展示',
            caseMoney: '500',
            caseFav: '8',
            caseTime: '6天1小时'
        },
        {
            caseImg: '/assets/img/des-1.png',
            caseDesc: '园区导视，布点规划，文化导入，精神堡垒，展厅，室内软装设计等许多内容、不一一展示',
            caseMoney: '500',
            caseFav: '8',
            caseTime: '6天1小时'
        },
    ]
}
