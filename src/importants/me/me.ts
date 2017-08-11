import {Component} from "@angular/core";
import {AlertController, IonicPage, ModalController, NavController, Platform, ToastController} from "ionic-angular";
import {SharedService} from "../../service/share.service";
import {Util} from "../../service/util";
import {WelcomePage} from "../../pages/welcome/welcome";
import {NetworkService} from "../../service/network.service";
import {AboutPage} from "../../pages/common/about/about";
import {AccountSecurityPage} from "../../pages/common/securitycenter/accountsecurity/accountsecurity";
import {SupportPage} from "../../pages/common/support/support";
import {NotificationsPage} from "../../pages/designer/nofitications/notifications";
// @IonicPage()
@Component({
    selector: 'page-me-designer',
    templateUrl: 'me.html'
})
export class MePage {

    messagePage: any = NotificationsPage;
    supportPage: any = SupportPage;
    accountSecurityPage: any = AccountSecurityPage;
    aboutPage: any = AboutPage

    user;
    isDesigner: boolean;

    // maincolor;

    constructor(public navCtrl: NavController,
                public platform: Platform,
                private alertCtrl: AlertController,
                private toastCtrl: ToastController,
                public shared: SharedService,
                private http: NetworkService) {
        this.user = shared.getCurrentUser();
        // this.isDesigner = this.shared.isDesigner();
        // this.maincolor = this.shared.getPrimaryColor();
    }


    open(page, option) {
        this.navCtrl.push(page, option)
    }

    clearCache() {
        let alert = this.alertCtrl.create({
            title: '是否要完全清除缓存',
            message: '清除缓存可以节省系统内存空间，但是可能会造成运行速度减慢',
            buttons: [
                {
                    text: '撤销',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确认',
                    handler: () => {
                        //todo 清除缓存的后台逻辑
                        this.presentToast()
                        console.log('Comfirm clicked');
                    }
                }
            ]
        });
        alert.present();
    }

    presentToast() {
        let toast = this.toastCtrl.create({
            message: '清除缓存成功',
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    }

    exitApp() {
        // this.platform.exitApp();
        this.shared.clearCurrentUser();
        this.http.clearToken();
        this.navCtrl.push(WelcomePage, {state: 2});
    }
}
