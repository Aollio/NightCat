import {NgModule} from "@angular/core";
import {SlidemenuComponment} from "./slidemenu/slidemenu";
import {IonicModule} from "ionic-angular";
import {AccountSecurityModule} from "./accountsecurity/accountsecurity.module";
import {AccountSecurityPage} from "./accountsecurity/accountsecurity";
import {OrderDetailPage} from "./orderdetail/orderdetail";
import {SupportPage} from "./support/support";
import {RegisterPage} from "./register/register";
import {LoginPage} from "./login/login";
import {HomePage} from "../designer/home/home";
import {AboutPage} from "./about/about";
@NgModule({
    imports: [IonicModule, AccountSecurityModule],
    declarations: [
        SlidemenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        OrderDetailPage,
        AboutPage,
        HomePage,
    ],
    entryComponents: [
        SlidemenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        OrderDetailPage,
        AboutPage,
        HomePage
    ],
    exports: [
        AccountSecurityPage,
        SlidemenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        OrderDetailPage,
        AboutPage,
        HomePage
    ],
    providers: []
})
export class CommonPageModule {
}