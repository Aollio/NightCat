import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {HomePage} from "../home/home";
import {Storage} from '@ionic/storage';
import {TabsPage} from "../tabs/tabs";
import {LoginPage} from "../login/login";
import {RegisterPage} from "../register/register";
/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class WelcomePage {

    rootPage: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        // this.storage.get('firstOpen').then((result) => {
        //
        //     if (result) {
        //         this.rootPage = TabsPage;
        //     }
        //     else {
        //         this.storage.set('firstOpen', true);
        //         this.rootPage = WelcomePage;
        //     }
        // });
    }



    /**
     * 打开登录/注册页面
     * */
    openLogin(typeinfo) {
        this.navCtrl.push(LoginPage, {
            type: typeinfo
        })
    }

    openHome(){
        this.navCtrl.push(TabsPage,{});
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad WelcomePage');
    }

}
