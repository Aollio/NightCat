import {Component, ViewChild} from '@angular/core';

import {AboutPage} from '../../common/about/about';
import {AlertController, Events, NavController, Platform} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {EmployerHomePage} from "../home/home";
import {HelpChoosePage} from "../helpchoose/helpchoose";
import {EmployerMePage} from "../me/me";
import {ProjectsPage} from "../projects/projects";
import {MiddleWarePage} from "../helpchoose/middleware/middleware";
import {PublishTaskMiddleWarePage} from "../publish-task-middleware/publish-task-middleware";
import {IMPage} from "../../im/im";
import {Util} from "../../../service/util";
import {SharedService} from "../../../service/share.service";
import {NoticesService} from "../../../service/ajax/notices.serveic";
import {NotificationsPage} from "../../designer/nofitications/notifications";

@Component({
    selector: 'page-employer-tabs',
    templateUrl: 'tabs.html'
})
export class EmployerTabsPage {

    home: any = EmployerHomePage;
    project: any = ProjectsPage;
    me: any = EmployerMePage;
    im = IMPage;
    helpchoose: any = MiddleWarePage;

    publishtask: any = PublishTaskMiddleWarePage;


    constructor(public navCtrl: NavController,
                public platform: Platform,
                public statusBar: StatusBar,
                public splashScreen: SplashScreen,
                private shared:SharedService,
                private alertCtrl:AlertController,
                private noticesServ:NoticesService,
                private events:Events,
                public util: Util) {
        this.navCtrl.swipeBackEnabled = false;

    }


}
