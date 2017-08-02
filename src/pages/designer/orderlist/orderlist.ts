import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ProjectDetailPage} from "../../common/order/orderdetail/orderdetail";
import {KeynoteService} from "../../../service/keynote.service";

declare let initializeFontSize: any

@Component({
    selector: 'com-orderlist',
    templateUrl: 'orderlist.html'
})
export class OrderListComponent {

    projects = []

    constructor(public navCtrl: NavController,
                public keynote: KeynoteService) {
        for (let proj of this.keynote.projects) {
            this.projects.push(proj)
        }
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
