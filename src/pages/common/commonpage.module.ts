import {NgModule} from "@angular/core";
import {SlideMenuComponment} from "./slidemenu/slidemenu";
import {IonicPageModule} from "ionic-angular";
import {AccountSecurityPage} from "./securitycenter/accountsecurity/accountsecurity";
import {OrderDetailPage} from "./orderdetail/orderdetail";
import {SupportPage} from "./support/support";
import {RegisterPage} from "./register/register";
import {LoginPage} from "./login/login";
import {AboutPage} from "./about/about";
import {ResetPasswordPage} from "./resetpassword/resetpassword";
import {CommonModulePage} from "./commonpage";
import {OrderProcessDetailPage} from "./orderprocess/orderprocess";
import {SecurityCenterModule} from "./securitycenter/securitycenter.module";

@NgModule({
    imports: [IonicPageModule.forChild(CommonModulePage), SecurityCenterModule],
    declarations: [
        CommonModulePage,
        SlideMenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        OrderDetailPage,
        AboutPage,
        ResetPasswordPage,
        OrderProcessDetailPage
    ],
    entryComponents: [
        CommonModulePage,
        SlideMenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        OrderDetailPage,
        AboutPage,
        ResetPasswordPage,
        OrderProcessDetailPage
    ],
    exports: [
        AccountSecurityPage,
        SlideMenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        OrderDetailPage,
        AboutPage,
        CommonModulePage,
    ],
    providers: []
})
export class CommonPageModule {
}