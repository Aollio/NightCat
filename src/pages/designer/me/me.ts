import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {AuthenticationPage} from "../authentication/authenication";
import {CommentPage} from "../comment/comment";
import {DesignerMeDetailPage} from "./medetail/medetail";
import {DesignerWalletPage} from "../wallet/wallet";
import {SharedService} from "../../../service/share.service";
import {User} from "../../../model/user";
declare let initializeFontSize: any;

@IonicPage()
@Component({
    selector: 'page-me-designer',
    templateUrl: 'me.html'
})
export class DesignerMePage {

    user: User;
    ionViewDidEnter() {
        initializeFontSize()
    }
    constructor(public navCtrl: NavController,
                public shared: SharedService) {
        this.user = shared.currentUser;
    }


    wallet: any = DesignerWalletPage;
    authenticate: any = AuthenticationPage;
    comment: any = CommentPage;
    designerMeDetailPage: any = DesignerMeDetailPage;

    open(page, option) {
        this.navCtrl.push(page, option)
    }

}
