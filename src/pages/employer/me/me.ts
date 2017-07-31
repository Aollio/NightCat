import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {EmpFavoriteDesignerPage} from "./favorite-designer/favorite-designer";
import {SharedService} from "../../../service/share.service";
declare let initializeFontSize: any;

@Component({
    selector: 'page-me-employer',
    templateUrl: 'me.html'
})
export class EmployerMePage {

    follower: EmpFavoriteDesignerPage;

    user = {};


    ionViewDidEnter() {
        initializeFontSize()
    }
    constructor(public  navCtrl: NavController, public share: SharedService) {
        this.user = share.getCurrentUser()
    }

    open(page, option) {
        this.navCtrl.push(EmpFavoriteDesignerPage, {})
    }

}
