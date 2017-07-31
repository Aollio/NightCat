import {Component} from "@angular/core";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
import {NavController} from "ionic-angular";

declare let initializeFontSize: any

@Component({
    selector: 'page-designertypes-home',
    templateUrl: 'designertypes.html'
})
export class DesignerTypesPage {
    designerMeDetailPage: DesignerMeDetailPage;

    constructor(public navCtrl: NavController) {

    }

    ionViewDidEnter() {
        initializeFontSize()
    }

    open(page, option) {
        this.navCtrl.push(page, option)

    }
}