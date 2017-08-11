
import {IonicPage, ModalController, NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {EmpFavoriteDesignerPage} from "../../pages/employer/me/favorite-designer/favorite-designer";
import {Util} from "../../service/util";
import {SharedService} from "../../service/share.service";
import {LoginPage} from "../../pages/common/login/login";
import {NotificationsPage} from "../../pages/designer/nofitications/notifications";
import {AccountSecurityPage} from "../../pages/common/securitycenter/accountsecurity/accountsecurity";
import {PayProjectsListPage} from "../../pages/employer/me/pay-projects-list/pay-projects-list";
import {SupportPage} from "../../pages/common/support/support";
import {AboutPage} from "../../pages/common/about/about";
import {WelcomePage} from "../../pages/welcome/welcome";

@IonicPage()
@Component({
    selector: 'page-me-designer',
    templateUrl: 'me.html'
})
export class ImportantMePage {

    follower: EmpFavoriteDesignerPage;

    user = {};
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
