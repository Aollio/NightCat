import {Component, ViewChild} from '@angular/core';

import {AboutPage} from '../../common/about/about';
import {NavController, Platform} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {EmployerHomePage} from "../home/home";
import {HelpChoosePage} from "../helpchoose/helpchoose";
import {EmployerMePage} from "../me/me";
import {ProjectsPage} from "../projects/projects";
import {MiddleWare} from "../helpchoose/middleware/middleware";
import {Tabs} from "ionic-angular/navigation/nav-interfaces";
import {PublishTaskPage} from "../../common/publishtask/publishtask";

@Component({
    selector: 'page-employer-tabs',
    templateUrl: 'tabs.html'
})
export class EmployerTabsPage {

    home: any = EmployerHomePage;
    helpchoose: any = HelpChoosePage;
    publishorder: any = AboutPage;
    project: any = ProjectsPage;
    me: any = EmployerMePage;
    middleware: any = MiddleWare;

    publishtask: any = PublishTaskPage;

    @ViewChild('myTabs') tabRef: Tabs;

    constructor(public navCtrl: NavController, public platform: Platform,
                public statusBar: StatusBar, public splashScreen: SplashScreen) {
    }

    openHelpChoose() {
        console.log('aa')
        this.navCtrl.push(HelpChoosePage, {
            tab: this.tabRef
        })
    }


}
