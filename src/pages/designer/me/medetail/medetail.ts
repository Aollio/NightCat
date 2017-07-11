import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ModifyProfilePage} from "../modifyprofile/modifyprofile";
import {SharedService} from "../../../../service/share.service";
import {User} from "../../../../model/user";

@Component({
    selector: 'page-designer-me-detail',
    templateUrl: 'medetail.html'
})
export class DesignerMeDetailPage {

    user: User;

    constructor(public navCtrl: NavController,
                public shared: SharedService) {
        this.user = shared.currentUser;
    }


    modify() {
        this.navCtrl.push(ModifyProfilePage);
    }
}