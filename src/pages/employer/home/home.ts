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

declare let initializeFontSize: any

@Component({
    selector: 'page-employer-home',
    templateUrl: 'home.html'
})
export class EmployerHomePage {

    static isfirstCome = true;
    user = {};


    ionViewDidEnter() {
        this.util.updateObj(this.user, this.shared.getCurrentUser());
    }

    openNotificationsPage(){
        this.navCtrl.push(NotificationsPage);
    }
    //
    // show() {
    //     console.log("touch")
    // }

    designerMeDetailPage: DesignerMeDetailPage;
    loginPage:LoginPage;

    constructor(public navCtrl: NavController,
                private shared: SharedService,
                private util: Util,
                public alertCtrl: AlertController,
                public modalCtrl: ModalController) {
        this.showAlert();
        this.util.updateObj(this.user, shared.getCurrentUser());
    }
    openLoginPage(event) {
        let profileModal = this.modalCtrl.create(LoginPage);
        profileModal.present();
        event.stopPropagation();
        // this.navCtrl.push(LoginPage);
    }
    // showAlert() {
    //     // todo  第一次进入提示抢单信息
    //     let alert = this.alertCtrl.create({
    //         title: 'new message!',
    //         subTitle: '您发布的项目已有人接单，请查看',
    //         buttons: ['OK']
    //     });
    //     alert.present();
    // }
    showAlert() {
        let confirm = this.alertCtrl.create({
            title: '最新消息',
            message: '您发布的项目已有人接单',
            buttons: [
                {
                    text: '立即查看',
                    handler: () => {
                        console.log('Disagree clicked');
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

    openMeDetail(option) {
        this.navCtrl.push(DesignerMeDetailPage, option)
    }

    btn_designer() {
        this.navCtrl.push(DesignerListPage);
    }

    btn_fullstack() {
        this.navCtrl.push(DesignerListPage);
    }

    btn_types() {
        this.navCtrl.push(DesingerTypePage);
    }

    btn_helpChoosePage() {
        this.navCtrl.push(HelpChoosePage);

    }

}
