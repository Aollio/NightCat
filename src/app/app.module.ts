import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';

import {AboutPage} from '../pages/about/about';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/designer/home/home';
import {TabsPage} from '../pages/designer/tabs/tabs';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {WelcomePage} from "../pages/welcome/welcome";
import {LoginPage} from "../pages/login/login";
import {SlidemenuComponment} from "../pages/common/slidemenu/slidemenu";
import {AccountSecurityPage} from "../pages/common/accountsecurity/accountsecurity";
import {RegisterPage} from "../pages/register/register";
import {MessagePage} from "../pages/designer/message/message";
import {SupportPage} from "../pages/support/support";
import {OrderDetailPage} from "../pages/common/orderdetail/orderdetail";
import {ModifyPasswordPage} from "../pages/common/accountsecurity/modifypassword/modifypassword";
import {ModifyPhonePage} from "../pages/common/accountsecurity/modifyphone/modifyphone";
import {OrderListComponent} from "../pages/common/orderlist/orderlist";
import {ResetPasswordPage} from "../pages/common/accountsecurity/resetpassword/resetpassword";


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
        SupportPage,
        OrderDetailPage,
        ModifyPasswordPage,
        ModifyPhonePage,
        OrderListComponent,
        ResetPasswordPage
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
        SupportPage,
        OrderDetailPage,
        ModifyPasswordPage,
        ModifyPhonePage,
        OrderListComponent,
        ResetPasswordPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}
