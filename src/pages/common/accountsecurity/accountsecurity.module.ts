///<reference path="modifyphone/modifyphone.ts"/>
import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {ResetPasswordPage} from "../resetpassword/resetpassword";
import {ModifyPhonePage} from "./modifyphone/modifyphone";
import {ModifyPasswordPage} from "./modifypassword/modifypassword";
import {AccountSecurityPage} from "./accountsecurity";
@NgModule({
    declarations: [
        AccountSecurityPage,
        ModifyPasswordPage,
        ModifyPhonePage,
    ],
    entryComponents: [
        AccountSecurityPage,
        ModifyPasswordPage,
        ModifyPhonePage,
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