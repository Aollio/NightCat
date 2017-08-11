import {Component} from '@angular/core';
import {Events, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {FirstPage} from "../pages/first/first";
import {Manager} from "../service/manager";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {

    rootPage: any = FirstPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, event: Events, manager: Manager) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });


    }
}
