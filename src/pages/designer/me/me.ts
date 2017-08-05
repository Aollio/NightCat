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
import {Util} from "../../../service/util";
import {FavoriteProjectsPage} from "./favorite-projects/favorite-projects";
import {SlideMenuComponment} from "./slidemenu/slidemenu";
import {WelcomePage} from "../../welcome/welcome";
import {NotificationsPage} from "../nofitications/notifications";
import {AboutPage} from "../../common/about/about";
import {SupportPage} from "../../common/support/support";
declare let initializeFontSize: any;

@IonicPage()
@Component({
    selector: 'page-me-designer',
    templateUrl: 'me.html'
})
export class DesignerMePage {
    favoriteProjectsPage:any=FavoriteProjectsPage;
    user = {};
    a :any=SlideMenuComponment;
    ionViewDidEnter() {
        initializeFontSize()
    }
    constructor(public navCtrl: NavController,
                public shared: SharedService,
                public modalCtrl: ModalController,
                public util:Util) {
        // util.updateObj(this.user,this.shared.getCurrentUser());
        this.user =  shared.getCurrentUser();
    }


    wallet: any = DesignerWalletPage;
    authenticate: any = AuthenticationPage;
    comment: any = CommentPage;
    designerMeDetailPage: any = DesignerMeDetailPage;
    supportPage: any = SupportPage;
    aboutPage: any = AboutPage;
    opendetail(page, option) {
        // console.log(Object.keys(this.user).length);
        // if(this.isNullObj(this.user)) return;
        this.navCtrl.push(page, option)
    }
    open(page, option) {
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
    exitApp() {
        for(let key in this.shared.getCurrentUser()){
            delete this.shared.getCurrentUser()[key];
        }
        let profileModal = this.modalCtrl.create(WelcomePage);
        profileModal.present();
    }

    openComments() {
        this.navCtrl.push(NotificationsPage, {})
    }

    isLogin() {
        let login = JSON.stringify(this.shared.getCurrentUser()) != JSON.stringify({})
        console.log("isLogin", login);
        return login;
    }
}
