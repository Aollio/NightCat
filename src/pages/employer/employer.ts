import {Component} from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {EmployerTabsPage} from "./tabs/tabs";

@IonicPage({
    segment: 'e'
})
@Component({
    templateUrl: 'employer.html'
})
export class EmployerModulePage {

    rootPage: any = EmployerTabsPage;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
                public nav: NavController) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        // this.nav.setRoot(EmployerModulePage)
    }
}
