import {NgModule} from "@angular/core";
import {SlideMenuComponment} from "./slidemenu/slidemenu";
import {IonicPageModule} from "ionic-angular";
import {AccountSecurityPage} from "./securitycenter/accountsecurity/accountsecurity";
import {OrderDetailPage} from "./order/orderdetail/orderdetail";
import {SupportPage} from "./support/support";
import {RegisterPage} from "./register/register";
import {LoginPage} from "./login/login";
import {AboutPage} from "./about/about";
import {ResetPasswordPage} from "./resetpassword/resetpassword";
import {CommonModulePage} from "./commonpage";
import {OrderProcessDetailPage} from "./order/orderprocess/orderprocess";
import {SecurityCenterModule} from "./securitycenter/securitycenter.module";
import {DesignerMeModule} from "../designer/me/me.module";
import {PublishTaskPage} from "./publishtask/publishtask";

@NgModule({
    imports: [IonicPageModule.forChild(CommonModulePage), SecurityCenterModule,DesignerMeModule],
    declarations: [
        CommonModulePage,
        SlideMenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        AboutPage,
        ResetPasswordPage,
        PublishTaskPage
    ],
    entryComponents: [
        CommonModulePage,
        SlideMenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        AboutPage,
        ResetPasswordPage,
        PublishTaskPage
    ],
    exports: [
        AccountSecurityPage,
        SlideMenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        AboutPage,
        CommonModulePage,
        ResetPasswordPage,
        PublishTaskPage
    ],
    providers: []
})
export class CommonPageModule {
}