import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {AuthenticationPage} from "../authentication/authenication";
import {CommentPage} from "../comment/comment";
import {DesignerMeDetailPage} from "./medetail/medetail";
import {DesignerWalletPage} from "../wallet/wallet";
import {SharedService} from "../../../service/share.service";
import {LoginPage} from "../../common/login/login";
import { ModalController} from 'ionic-angular';
import {Util} from "../../../service/util";
import {FavoriteProjectsPage} from "./favorite-projects/favorite-projects";

@IonicPage()
@Component({
    selector: 'page-me-designer',
    templateUrl: 'me.html'
})
export class DesignerMePage {
    favoriteProjectsPage:any=FavoriteProjectsPage;

    constructor(public navCtrl: NavController,
                public shared: SharedService,
                public modalCtrl: ModalController,
                public util:Util) {
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

    openMeDetail(){
        this.navCtrl.push(DesignerMeDetailPage,{isDesigner:true,designer:this.shared.getCurrentUser()});
    }

    open(page, option) {

        this.navCtrl.push(page, option)
    }

    // isNullObj(obj){
    //    return JSON.stringify(obj)==JSON.stringify({});
    // }

    openLoginPage(){
        this.modalCtrl.create(LoginPage).present();
    }

}
