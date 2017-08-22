import {Component} from '@angular/core';

import {DesignerHomePage} from '../home/home';
import {AlertController, Events, NavController, Platform} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {DesignerMePage} from "../me/me";
import {TaskSquarePage} from "../tasksquare/tasksquare";
import {NotificationsPage} from "../nofitications/notifications";
import {DesignerModulePage} from "../designer";
import {IMPage} from "../../im/im";
import {DesignerProjectsPage} from "../projects/projects";
import {ImportantMePage} from "../../../importants/me/me";
import {SharedService} from "../../../service/share.service";
import {NoticesService} from "../../../service/ajax/notices.serveic";
import {Util} from "../../../service/util";

@Component({
    templateUrl: 'tabs.html'
})
export class DesignerTabsPage {

    home = DesignerHomePage;
    console = DesignerProjectsPage;
    me = DesignerMePage;
   // me=ImportantMePage;
    message = NotificationsPage;
    im = IMPage;


    constructor(public navCtrl: NavController,
                public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private shared:SharedService,
                private alertCtrl:AlertController,
                private noticesServ:NoticesService,
                private events:Events,
                public util: Util) {
    }

    openPage(page, option) {
        this.navCtrl.push(page, option)
    }


}
