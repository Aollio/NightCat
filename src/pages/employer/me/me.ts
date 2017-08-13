import {Component} from "@angular/core";
import {ModalController, NavController} from "ionic-angular";
import {EmpFavoriteDesignerPage} from "./favorite-designer/favorite-designer";
import {SharedService} from "../../../service/share.service";
import {LoginPage} from "../../common/login/login";
import {CommentPage} from "../../designer/comment/comment";
import {NotificationsPage} from "../../designer/nofitications/notifications";
import {PayProjectsListPage} from "./pay-projects-list/pay-projects-list";
import {WelcomePage} from "../../welcome/welcome";
import {NetworkService} from "../../../service/network.service";
import {AboutPage} from "../../common/about/about";
import {SupportPage} from "../../common/support/support";

declare let initializeFontSize: any;

@Component({
    selector: 'page-me-employer',
    templateUrl: 'me.html'
})
export class EmployerMePage {

    follower: EmpFavoriteDesignerPage;

    // ionViewDidEnter() {
    //     initializeFontSize()
    // }

    constructor(public  navCtrl: NavController,
                public shared: SharedService,
                private http:NetworkService,
                public modalCtrl: ModalController) {

    }

    supportPage: any = SupportPage;
    aboutPage: any = AboutPage;

    open(page, option) {
        // if (this.isNullObj1(this.user)) return;
        this.navCtrl.push(page, option)
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
        this.navCtrl.push(NotificationsPage, {})
    }

    openPayProjects() {
        this.navCtrl.push(PayProjectsListPage, {})
    }

    exitApp() {
        this.shared.clearCurrentUser();
        this.http.clearToken();
        let profileModal = this.modalCtrl.create(WelcomePage,{state:2});
        profileModal.present();

    }
}
