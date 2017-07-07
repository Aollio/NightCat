import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {WelcomePage} from "../pages/welcome/welcome";
import {DesignerModule} from "../pages/designer/designer.module";
import {EmployerModule} from "../pages/employer/employer.module";


@NgModule({
    declarations: [
        MyApp,
        WelcomePage,
    ],
    entryComponents: [
        WelcomePage,
    ],
    imports: [
        BrowserModule,
        DesignerModule,
        EmployerModule,
        IonicModule.forRoot(MyApp, {
            mode: 'ios'
        })
    ],
    exports: [],
    bootstrap: [IonicApp],

    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
