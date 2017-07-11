import {NgModule} from "@angular/core";
import {DesignerMePage} from "./me";
import {CommonPageModule} from "../../common/commonpage.module";
import {IonicPageModule} from "ionic-angular";
import {DesignerMeDetailPage} from "./medetail/medetail";
import {WalletModule} from "../wallet/wallet.module";
import {ModifyProfilePage} from "./modifyprofile/modifyprofile";

@NgModule({
    declarations: [
        DesignerMePage,
        DesignerMeDetailPage,
        ModifyProfilePage
    ],
    entryComponents: [
        DesignerMePage,
        DesignerMeDetailPage,
        ModifyProfilePage
    ],
    imports: [
        WalletModule,
        IonicPageModule.forChild(DesignerMePage)
    ],
    exports: [DesignerMePage, DesignerMeDetailPage]
})
export class DesignerMeModule {
}