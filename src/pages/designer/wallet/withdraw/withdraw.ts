import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";

@Component({
    selector: 'page-withdraw',
    templateUrl: 'withdraw.html'
})
export class DesignerWithDrawPage {



    constructor(public navCtrl: NavController) {
    }


    open(page, option) {
        this.navCtrl.push(page, option)
    }
}