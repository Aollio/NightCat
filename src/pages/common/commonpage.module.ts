import {NgModule} from "@angular/core";
import {SlidemenuComponment} from "./slidemenu/slidemenu";
import {IonicPageModule} from "ionic-angular";
import {AccountSecurityModule} from "./accountsecurity/accountsecurity.module";
import {AccountSecurityPage} from "./accountsecurity/accountsecurity";
import {OrderDetailPage} from "./orderdetail/orderdetail";
import {SupportPage} from "./support/support";
import {RegisterPage} from "./register/register";
import {LoginPage} from "./login/login";
import {AboutPage} from "./about/about";
import {ResetPasswordPage} from "./resetpassword/resetpassword";
import {CommonModulePage} from "./commonpage";
import {PopoverPage} from "./popover/popover"
import {OrderProcessDetailPage} from "./orderprocess/orderprocess";

@NgModule({
    imports: [IonicPageModule.forChild(CommonModulePage), AccountSecurityModule],
    declarations: [
        CommonModulePage,
        SlidemenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        OrderDetailPage,
        AboutPage,
        ResetPasswordPage,
        PopoverPage,
        OrderProcessDetailPage
    ],
    entryComponents: [
        CommonModulePage,
        SlidemenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        OrderDetailPage,
        AboutPage,
        ResetPasswordPage,
        PopoverPage,
        OrderProcessDetailPage
    ],
    exports: [
        AccountSecurityPage,
        SlidemenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        OrderDetailPage,
        AboutPage,
        CommonModulePage,
        PopoverPage
    ],
    providers: []
})
export class CommonPageModule {
}