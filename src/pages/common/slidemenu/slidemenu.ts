import {Component} from '@angular/core';

import {AboutPage} from '../about/about';
import {AlertController, NavController, Platform, ToastController} from "ionic-angular";
import {MessagePage} from "../../designer/message/message";
import {AccountSecurityPage} from "../securitycenter/accountsecurity/accountsecurity";
import {SupportPage} from "../support/support";
import {SharedService} from "../../../service/share.service";
import {User} from "../../../model/user";

@Component({
    selector: 'page-slidemenu',
    templateUrl: 'slidemenu.html'
})
export class SlideMenuComponment {


    messagePage: any = MessagePage;
    supportPage: any = SupportPage;
    accountSecurityPage: any = AccountSecurityPage;
    aboutPage: any = AboutPage

    user: User;
    isDesigner: boolean;
    maincolor;

    constructor(public navCtrl: NavController, public platfrom: Platform,
                private alertCtrl: AlertController,
                private toastCtrl: ToastController,
                public shared: SharedService) {
        this.user = shared.currentUser;
        this.isDesigner = this.shared.isDesigner;
        this.maincolor = this.shared.getNavColor();
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
        this.platfrom.exitApp();
    }
}
