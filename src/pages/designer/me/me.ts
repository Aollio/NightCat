import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {AuthenticationPage} from "../authentication/authenication";
import {CommentPage} from "../comment/comment";
import {DesignerMeDetailPage} from "./medetail/medetail";
import {DesignerWalletPage} from "../wallet/wallet";

@IonicPage()
@Component({
    selector: 'page-me-designer',
    templateUrl: 'me.html'
})
export class DesignerMePage {

    constructor(public navCtrl: NavController) {

    }

    wallet: any = DesignerWalletPage;
    authenticate: any = AuthenticationPage;
    comment: any = CommentPage;
    designerMeDetailPage:any = DesignerMeDetailPage;

    open(page, option) {
        this.navCtrl.push(page, option)
    }

}
