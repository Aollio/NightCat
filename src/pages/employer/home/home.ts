import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DesignerMeDetailPage} from "../../designer/me/medetail/medetail";

declare let initializeFontSize: any

@Component({
    selector: 'page-employer-home',
    templateUrl: 'home.html'
})
export class EmployerHomePage {
    pageState: any = 0;

    ionViewDidEnter() {
        initializeFontSize()
    }

    designerMeDetailPage: DesignerMeDetailPage;


    constructor(public navCtrl: NavController) {
    }


    open(page, option) {
        this.navCtrl.push(page, option)
    }

    openMeDetail(option) {
        this.navCtrl.push(DesignerMeDetailPage, option)
    }

    btn_designer(){
        this.pageState=1;
    }
    btn_fullstack(){
        this.pageState=2;
    }
    btn_types(){
        this.pageState=3;
    }
    btn_appoint(){
        this.pageState=4
    }
}
