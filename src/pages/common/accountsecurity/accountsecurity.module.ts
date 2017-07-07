///<reference path="modifyphone/modifyphone.ts"/>
import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {ResetPasswordPage} from "./resetpassword/resetpassword";
import {ModifyPhonePage} from "./modifyphone/modifyphone";
import {ModifyPasswordPage} from "./modifypassword/modifypassword";
import {AccountSecurityPage} from "./accountsecurity";
@NgModule({
    declarations: [
        AccountSecurityPage,
        ModifyPasswordPage,
        ModifyPhonePage,
        ResetPasswordPage
    ],
    entryComponents: [
        AccountSecurityPage,
        ModifyPasswordPage,
        ModifyPhonePage,
        ResetPasswordPage
    ],
    exports: [
        AccountSecurityPage
    ],
    imports: [
        IonicModule
    ]
})
export class AccountSecurityModule {
}