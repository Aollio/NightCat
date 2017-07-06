import {Component} from '@angular/core';

import {AboutPage} from '../../common/about/about';
import {HomePage} from '../home/home';
import {NavController, Platform} from "ionic-angular";
import {AccountSecurityPage} from "../../common/accountsecurity/accountsecurity";
import {SupportPage} from "../../common/support/support";
import {MessagePage} from "../message/message";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    home = HomePage;
    tasks = AboutPage;
    me = AboutPage;
    message = MessagePage;


    messagePage: any = MessagePage;
    supportPage: any = SupportPage;
    accountSecurityPage: any = AccountSecurityPage;
    aboutPage: any = AboutPage


    constructor(public navCtrl: NavController, public platform: Platform,
                public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.initializeApp();
        this.initializeMainPage();
    }

    initializeMainPage() {
    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }


    openPage(page, option) {
        this.navCtrl.push(page, option)
    }


}
