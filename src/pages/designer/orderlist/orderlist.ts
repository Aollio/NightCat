import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {OrderDetailPage} from "../../common/order/orderdetail/orderdetail";
declare let initializeFontSize: any
@Component({
    selector: 'com-orderlist',
    templateUrl: 'orderlist.html'
})
export class OrderListComponent {
    constructor(public navCtrl: NavController) {
    }
    ionViewDidEnter() {
        initializeFontSize()
    }
    openOrderDetail() {
        this.navCtrl.push(OrderDetailPage, {role: "designer"})
    }
    caseArray:Array<{caseImg,caseDesc,caseMoney,caseFav,caseTime}> =[
        {caseImg:'/assets/img/des-1.png',
            caseDesc:'园区导视，布点规划，文化导入，精神堡垒，展厅，室内软装设计等许多内容、不一一展示',
            caseMoney:'500',
            caseFav:'8',
            caseTime:'6天1小时'},
        {caseImg:'/assets/img/des-1.png',
            caseDesc:'园区导视，布点规划，文化导入，精神堡垒，展厅，室内软装设计等许多内容、不一一展示',
            caseMoney:'500',
            caseFav:'8',
            caseTime:'6天1小时'},
        {caseImg:'/assets/img/des-1.png',
            caseDesc:'园区导视，布点规划，文化导入，精神堡垒，展厅，室内软装设计等许多内容、不一一展示',
            caseMoney:'500',
            caseFav:'8',
            caseTime:'6天1小时'},
    ]
}
