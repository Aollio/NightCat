import {Component} from '@angular/core';

import {DesignerHomePage} from '../home/home';
import {NavController, Platform} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {DesignerMePage} from "../me/me";
import {TaskSquarePage} from "../tasksquare/tasksquare";
import {MessagePage} from "../message/message";

@Component({
    templateUrl: 'tabs.html'
})
export class DesignerTabsPage {

    home = DesignerHomePage;
    tasks = TaskSquarePage;
    me = DesignerMePage;
    message = MessagePage;



    constructor(public navCtrl: NavController, public platform: Platform,
                public statusBar: StatusBar, public splashScreen: SplashScreen) {
    }


    openPage(page, option) {
        this.navCtrl.push(page, option)
    }


}
