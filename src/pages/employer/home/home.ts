import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {DesignerMeDetailPage} from "../../designer/me/medetail/medetail";
import {DesingerTypePage} from "./desinger-types/desinger-types";
import {DesignerListPage} from "./designer/designer-list";
import {HelpChoosePage} from "../helpchoose/helpchoose";
import {SharedService} from "../../../service/share.service";
import {Util} from "../../../service/util";
import {NotificationsPage} from "../../designer/nofitications/notifications";
import {LoginPage} from "../../common/login/login";


@Component({
    selector: 'page-employer-home',
    templateUrl: 'home.html'
})
export class EmployerHomePage {

    static isfirstCome = true;


    openNotificationsPage() {
        this.navCtrl.push(NotificationsPage);
    }

    designerMeDetailPage: DesignerMeDetailPage;
    loginPage: LoginPage;

    constructor(public navCtrl: NavController,
                private shared: SharedService,
                private util: Util,
                public alertCtrl: AlertController,) {

        this.isFirstLogin = shared.isFirstUse();
        console.log("sdasdasda")
        console.log(this.util.nav)


    }

    openLoginPage() {
        this.util.presentLoginPage(this.navCtrl)
    }




    open(page, option) {
        this.navCtrl.push(page, option)

    }


    btn_designer() {
        this.navCtrl.push(DesignerListPage);
    }

    btn_fullstack() {
        this.navCtrl.push(DesignerListPage, {type: this.shared.getFullStackType()});
    }

    btn_types() {
        this.navCtrl.push(DesingerTypePage);
    }

    btn_helpChoosePage() {
        this.navCtrl.push(HelpChoosePage);

    }


    isFirstLogin = true;

    hideFab() {
        //todo isfirstCome 记录
        this.shared.setIsNotFirstUse();
        this.isFirstLogin = false;
    }

}
