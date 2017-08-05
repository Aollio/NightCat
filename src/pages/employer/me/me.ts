import {Component} from "@angular/core";
import {ModalController, NavController} from "ionic-angular";
import {EmpFavoriteDesignerPage} from "./favorite-designer/favorite-designer";
import {SharedService} from "../../../service/share.service";
import {LoginPage} from "../../common/login/login";
import {CommentPage} from "../../designer/comment/comment";
import {NotificationsPage} from "../../designer/nofitications/notifications";
import {PayProjectsListPage} from "./pay-projects-list/pay-projects-list";
import {AccountSecurityPage} from "../../common/securitycenter/accountsecurity/accountsecurity";
import {SupportPage} from "../../common/support/support";
import {AboutPage} from "../../common/about/about";
import {WelcomePage} from "../../welcome/welcome";
import {Util} from "../../../service/util";

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

    constructor(public  navCtrl: NavController,
                public util :Util,
                public shared: SharedService,
                public modalCtrl: ModalController) {
        this.user = shared.getCurrentUser()
    }

    open(page, option) {
        // if (this.isNullObj1(this.user)) return;
        this.navCtrl.push(page, option)
    }

    isNullObj(obj) {
        return JSON.stringify(obj) == JSON.stringify({});
    }

    openLoginPage(event) {
        let profileModal = this.modalCtrl.create(LoginPage);
        profileModal.present();
        event.stopPropagation();
        // this.navCtrl.push(LoginPage);
    }

    openComments() {
        this.navCtrl.push(NotificationsPage, {})
    }

    openNotifications() {
        this.navCtrl.push(AccountSecurityPage, {})
    }

    openPayProjects() {
        this.navCtrl.push(PayProjectsListPage, {})
    }

    supportPage: any = SupportPage;
    aboutPage: any = AboutPage;

    exitApp() {
        for(let key in this.shared.getCurrentUser()){
            delete this.shared.getCurrentUser()[key];
        }
        let profileModal = this.modalCtrl.create(WelcomePage);
        profileModal.present();

    }

    isLogin() {
        let login = JSON.stringify(this.shared.getCurrentUser()) != JSON.stringify({})
        console.log("isLogin", login);
        return login;
    }
}
