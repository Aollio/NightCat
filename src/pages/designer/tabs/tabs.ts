import {Component} from '@angular/core';

import {DesignerHomePage} from '../home/home';
import {NavController, Platform} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {DesignerMePage} from "../me/me";
import {NotificationsPage} from "../nofitications/notifications";
import {DesignerProjectsPage} from "../projects/projects";

@Component({
    templateUrl: 'tabs.html'
})
export class DesignerTabsPage {

    home = DesignerHomePage;
    console = DesignerProjectsPage;
    me = DesignerMePage;
    message = NotificationsPage;
    im = NotificationsPage;


    constructor(public navCtrl: NavController, public platform: Platform,
    ) {
    }


    openPage(page, option) {
        this.navCtrl.push(page, option)
    }


}
