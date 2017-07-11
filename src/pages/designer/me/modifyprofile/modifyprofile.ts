

import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
@Component({
    selector: 'page-modifyprofile',
    templateUrl: 'modifyprofile.html'

})
export class ModifyProfilePage{
    constructor(public navCtrl: NavController) {

    }
    open(page, option) {
        this.navCtrl.push(page, option)
    }
}