import {Component} from '@angular/core';
import {AlertController, ModalController, NavController} from 'ionic-angular';
import {DesignerMeDetailPage} from "../../designer/me/medetail/medetail";
import {AppointPage} from "./appoint/appoint";
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
        this.showAlert();

        this.isFirstLogin = shared.isFirstUse();

    }

    openLoginPage() {
        this.util.presentLoginPage(this.navCtrl)
    }

    showAlert() {
        let confirm = this.alertCtrl.create({
            title: '最新消息',
            message: '您发布的项目已有人接单',
            buttons: [
                {
                    text: '立即查看',
                    handler: () => {
                        console.log('Disagree clicked');
                        this.navCtrl.parent.select(1);
                    }
                },
                {
                    text: '我知道了',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
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
