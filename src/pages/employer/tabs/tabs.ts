import {Component} from '@angular/core';

import {AboutPage} from '../../common/about/about';
import {NavController, Platform} from "ionic-angular";
import {SplashScreen} from "@ionic-native/splash-screen";
import {StatusBar} from "@ionic-native/status-bar";
import {EmployerHomePage} from "../home/home";

@Component({
    selector: 'page-employer-tabs',
    templateUrl: 'tabs.html'
})
export class EmployerTabsPage {

    home: any = EmployerHomePage;
    helpchoose: any = AboutPage;
    publishorder: any = AboutPage;
    project: any = AboutPage;
    me: any = AboutPage;


    constructor(public navCtrl: NavController, public platform: Platform,
                public statusBar: StatusBar, public splashScreen: SplashScreen) {
    }


}
