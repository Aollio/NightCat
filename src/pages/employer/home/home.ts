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
import {UsersService} from "../../../service/ajax/users.service";

declare let initializeFontSize: any

@Component({
    selector: 'page-employer-home',
    templateUrl: 'home.html'
})
export class EmployerHomePage {

    static isfirstCome = true;
    user = {};
    users = [];


    ionViewDidEnter() {
        initializeFontSize()
        this.util.updateObj(this.user, this.shared.getCurrentUser());
    }

    constructor(public navCtrl: NavController,
                private shared: SharedService,
                private usersServ: UsersService,
                private util: Util,
                public modalCtrl: ModalController) {
        this.util.updateObj(this.user, shared.getCurrentUser());

        this.usersServ.getUsersByRole(true).then(users => {
            for (let user of users) {
                this.users.push(user)
                console.log(user);
            }
        }).catch(error => console.log(error));

    }

    openLoginPage(event) {
        let profileModal = this.modalCtrl.create(LoginPage);
        profileModal.present();
        event.stopPropagation();
    }


    open(page, option) {
        this.navCtrl.push(page, option)
    }
}
