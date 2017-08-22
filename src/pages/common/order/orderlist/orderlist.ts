import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProjectDetailPage} from "../orderdetail/projectdetail";
import {KeynoteService} from "../../../../service/keynote.service";
import {Util} from "../../../../service/util";

@Component({
    selector: 'order-list',
    templateUrl: 'orderlist.html'
})
export class OrderListComponent {

    projects = []

    constructor(public navCtrl: NavController,
                public keynote: KeynoteService,
                private util: Util) {
        for (let proj of this.keynote.projects) {
            proj['show_time'] = this.util.formatDate(proj.due_time,true);
            this.projects.push(proj)
        }
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
