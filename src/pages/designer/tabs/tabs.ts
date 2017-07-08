import {Component} from '@angular/core';

import {AboutPage} from '../../common/about/about';
import {DesignerHomePage} from '../home/home';
import {NavController, Platform} from "ionic-angular";
import {AccountSecurityPage} from "../../common/accountsecurity/accountsecurity";
import {SupportPage} from "../../common/support/support";
import {MessagePage} from "../message/message";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {DesignerMePage} from "../me/me";
import {ChatMessagePage} from "../chatmessage/chatmessage";

@Component({
    templateUrl: 'tabs.html'
})
export class DesignerTabsPage {

    home = DesignerHomePage;
    tasks = AboutPage;
    me = DesignerMePage;
    message = ChatMessagePage;



    constructor(public navCtrl: NavController, public platform: Platform,
                public statusBar: StatusBar, public splashScreen: SplashScreen) {
    }


    openPage(page, option) {
        this.navCtrl.push(page, option)
    }


}
