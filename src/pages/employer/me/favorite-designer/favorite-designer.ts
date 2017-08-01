import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
@Component({
    templateUrl:'favorite-designer.html',
    selector:'page-favorite-designer'
})
export  class EmpFavoriteDesignerPage{
    // favorite-designer
    constructor(private navCtrl:NavController){}

    openDesigner(){
        // this.navCtrl.push(DesignerMeDetailPage);
    }
}