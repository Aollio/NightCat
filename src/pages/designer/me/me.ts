import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {AuthenticationPage} from "../authentication/authenication";
import {CommentPage} from "../comment/comment";
import {DesignerMeDetailPage} from "./medetail/medetail";
import {DesignerWalletPage} from "../wallet/wallet";
import {SharedService} from "../../../service/share.service";
import {User} from "../../../model/user";
import {LoginPage} from "../../common/login/login";
import { ModalController, NavParams } from 'ionic-angular';
declare let initializeFontSize: any;

@IonicPage()
@Component({
    selector: 'page-me-designer',
    templateUrl: 'me.html'
})
export class DesignerMePage {

    user = {};

    ionViewDidEnter() {
        initializeFontSize()
    }
    constructor(public navCtrl: NavController,
                public shared: SharedService,
                public modalCtrl: ModalController) {
        this.user = shared.getCurrentUser();
    }


    wallet: any = DesignerWalletPage;
    authenticate: any = AuthenticationPage;
    comment: any = CommentPage;
    designerMeDetailPage: any = DesignerMeDetailPage;

    opendetail(page, option) {
        // console.log(Object.keys(this.user).length);
        // if(this.isNullObj(this.user)) return;
        this.navCtrl.push(page, option)
    }

    isNullObj(obj){
       return JSON.stringify(obj)==JSON.stringify({});
    }
    openLoginPage($event){
        let profileModal = this.modalCtrl.create(LoginPage);
        profileModal.present();

        $event.stopPropagation();
        // this.navCtrl.push(LoginPage);
    }

}
