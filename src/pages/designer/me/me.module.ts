import {NgModule} from "@angular/core";
import {DesignerMePage} from "./me";
import {CommonPageModule} from "../../common/commonpage.module";
import {IonicPageModule} from "ionic-angular";
import {DesignerMeDetailPage} from "./medetail/medetail";
import {WalletModule} from "../wallet/wallet.module";

@NgModule({
    declarations: [
        DesignerMePage,
        DesignerMeDetailPage
    ],
    entryComponents: [
        DesignerMePage,
        DesignerMeDetailPage
    ],
    imports: [
        WalletModule,
        IonicPageModule.forChild(DesignerMePage)
    ],
    exports: [DesignerMePage, DesignerMeDetailPage]
})
export class DesignerMeModule {
}