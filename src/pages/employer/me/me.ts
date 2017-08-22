import {Component} from "@angular/core";
import {AlertController, ModalController, NavController} from "ionic-angular";
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
import {HelpPage} from "../../common/help/help";
import {CommentsPage} from "./Comments/Comments";

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
                private alert: AlertController,
                private http: NetworkService,
                public modalCtrl: ModalController) {

    }

    supportPage: any = SupportPage;
    aboutPage: any = AboutPage;

    open(page, option) {
        // if (this.isNullObj1(this.user)) return;
        this.navCtrl.push(page, option)
    }

    openEmpFavoriteDesignerPage() {
        // if (this.isNullObj1(this.user)) return;
        this.navCtrl.push(EmpFavoriteDesignerPage, {})
    }

    openLoginPage(event) {
        let profileModal = this.modalCtrl.create(LoginPage);
        profileModal.present();
        event.stopPropagation();
        // this.navCtrl.push(LoginPage);
    }

    openComments() {
        this.navCtrl.push(CommentPage, {})
    }

    openHelpPage() {
        this.navCtrl.push(HelpPage, {})
    }

    openNotifications() {
        this.navCtrl.push(NotificationsPage, {})
    }

    openPayProjects() {
        this.navCtrl.push(PayProjectsListPage, {})
    }

    exitApp() {

        if (!this.shared.isLogin()) {
            // this.navCtrl.push(WelcomePage, {state: 2});
            //
            let profileModal = this.modalCtrl.create(WelcomePage, {state: 2});
            profileModal.present();
            return;
        }

        let alert = this.alert.create({
            subTitle: "是否退出？",
            buttons: [{
                text: "取消",
            }, {
                text: "确定",
                handler: data => {
                    this.shared.clearCurrentUser();
                    this.http.clearToken();


                    let profileModal = this.modalCtrl.create(WelcomePage, {state: 2});
                    profileModal.present();
                }
            }]
        }).present();
    }
}
