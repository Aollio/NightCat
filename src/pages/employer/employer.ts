import {Component} from '@angular/core';
import {IonicPage, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {EmployerTabsPage} from "./tabs/tabs";
import {SharedService} from "../../service/share.service";

@IonicPage({
    segment: 'e'
})
@Component({
    selector: 'emp-root',
    templateUrl: 'employer.html'
})
export class EmployerModulePage {

    rootPage: any = EmployerTabsPage;
    isFirstLogin = true;

    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
                protected shared:SharedService,
                public nav: NavController) {
        platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();

            this.isFirstLogin = shared.isFirstUse()
        });
        // this.nav.setRoot(EmployerModulePage)
    }

    hideFab() {
        this.shared.setIsNotFirstUse();
        //todo isfirstCome 记录
        this.isFirstLogin = false;
    }
}
