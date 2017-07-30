import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DesignerMeDetailPage} from "../../designer/me/medetail/medetail";
import {AppointPage} from "./appoint/appoint";
import {DesignerTypesPage} from "./designertypes/designertypes";

declare let initializeFontSize: any

@Component({
    selector: 'page-employer-home',
    templateUrl: 'home.html'
})
export class EmployerHomePage {


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
       this.navCtrl.push(DesignerTypesPage);
    }
    btn_fullstack(){

    }
    btn_types(){

    }
    btn_appoint(){
        this.navCtrl.push( AppointPage);

    }
}
