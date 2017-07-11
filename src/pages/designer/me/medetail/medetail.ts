
import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ModifyProfilePage} from "../modifyprofile/modifyprofile";

@Component({
    selector:'page-designer-me-detail',
    templateUrl:'medetail.html'
})
export class DesignerMeDetailPage{
    constructor(public navCtrl :NavController){

    }

    modify(){
        this.navCtrl.push(ModifyProfilePage);
    }
}