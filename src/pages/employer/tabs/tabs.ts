import {Component, ViewChild} from '@angular/core';

import {AboutPage} from '../../common/about/about';
import {NavController, Platform} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {EmployerHomePage} from "../home/home";
import {HelpChoosePage} from "../helpchoose/helpchoose";
import {EmployerMePage} from "../me/me";
import {ProjectsPage} from "../projects/projects";
import {MiddleWarePage} from "../helpchoose/middleware/middleware";
import {Tabs} from "ionic-angular/navigation/nav-interfaces";
import {PublishTaskPage} from "../../common/publishtask/publishtask";
import {PublishTaskMiddleWarePage} from "../publish-task-middleware/publish-task-middleware";
import {IMPage} from "../../im/im";
import {NotificationsPage} from "../../designer/nofitications/notifications";
declare let initializeFontSize:any
@Component({
    selector: 'page-employer-tabs',
    templateUrl: 'tabs.html'
})
export class EmployerTabsPage {
    ionViewDidEnter(){
        initializeFontSize()
    }
    home: any = EmployerHomePage;
    project: any = ProjectsPage;
    me: any = EmployerMePage;
    im = NotificationsPage;
    helpchoose: any = MiddleWarePage;

    publishtask: any = PublishTaskMiddleWarePage;


    constructor(public navCtrl: NavController, public platform: Platform,
                public statusBar: StatusBar, public splashScreen: SplashScreen) {
        this.navCtrl.swipeBackEnabled = false
    }


}
