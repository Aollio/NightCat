import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {WelcomePage} from "../pages/welcome/welcome";
import {LoginPage} from "../pages/login/login";
import {SlidemenuComponment} from "../pages/slidemenu/slidemenu";
import {AccountSecurityPage} from "../pages/accountsecurity/accountsecurity";
import {RegisterPage} from "../pages/register/register";
import {MessagePage} from "../pages/message/message";
import {SupportPage} from "../pages/support/support";


@NgModule({
    declarations: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        WelcomePage,
        LoginPage,
        RegisterPage,
        SlidemenuComponment,
        AccountSecurityPage,
        MessagePage,
        SupportPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp, {
            mode: 'ios'
        })
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        AboutPage,
        ContactPage,
        HomePage,
        TabsPage,
        WelcomePage,
        LoginPage,
        RegisterPage,
        SlidemenuComponment,
        AccountSecurityPage,
        MessagePage,
        SupportPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
