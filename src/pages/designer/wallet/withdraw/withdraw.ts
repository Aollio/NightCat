import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";

declare let initializeFontSize: any

@Component({
    selector: 'page-withdraw',
    templateUrl: 'withdraw.html'
})
export class DesignerWithDrawPage {


    constructor(public navCtrl: NavController) {
    }

    ionViewDidEnter() {
        initializeFontSize()
    }


    open(page, option) {
        this.navCtrl.push(page, option)
    }
}