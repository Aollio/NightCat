import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DesignerWalletPage} from "../wallet/wallet";
import {AuthenticationPage} from "../authentication/authenication";
import {CommentPage} from "../comment/comment";

@Component({
    selector: 'page-me-designer',
    templateUrl: 'me.html'
})
export class DesignerMePage {

    constructor(public navCtrl: NavController) {

    }

    wallet: any = "designer-wallet";
    authenticate: any = AuthenticationPage;
    comment: any = CommentPage;

    open(page, option) {
        this.navCtrl.push(page, option)
    }

}
