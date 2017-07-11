import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {WelcomePage} from "../pages/welcome/welcome";
import {DesignerModule} from "../pages/designer/designer.module";
import {EmployerModule} from "../pages/employer/employer.module";
import {CommonModule} from "@angular/common";
import {BlankPage} from "../pages/blank/blank";
import {NetworkService} from "../service/network.service";
import {SharedService} from "../service/share.service";
import {HttpUrls} from "../service/httpurls.service";
import {FormsModule} from '@angular/forms';
import {UserService} from "../service/ajax/user.service";

@NgModule({
    declarations: [
        MyApp,
        WelcomePage,
        BlankPage
    ],
    entryComponents: [
        WelcomePage,
        BlankPage
    ],
    imports: [
        BrowserModule,
        FormsModule,
        DesignerModule,
        EmployerModule,
        CommonModule,
        IonicModule.forRoot(MyApp, {
            mode: 'ios'
        })
    ],
    exports: [],
    bootstrap: [IonicApp],

    providers: [
        HttpUrls,
        NetworkService,
        SharedService,
        UserService,
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
