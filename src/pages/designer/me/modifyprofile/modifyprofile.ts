

import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AddCasePage} from "../addcase/addcase";
import {AddHonorPage} from "../addhonor/addhonor";
@Component({
    selector: 'page-modifyprofile',
    templateUrl: 'modifyprofile.html'

})
export class ModifyProfilePage{
    addcase=AddCasePage;
    addhonor=AddHonorPage;
    constructor(public navCtrl: NavController) {

    }
    open(page, option) {
        this.navCtrl.push(page, option)
    }
}