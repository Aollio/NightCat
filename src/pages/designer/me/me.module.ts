import {NgModule} from "@angular/core";
import {DesignerMePage} from "./me";
import {CommonPageModule} from "../../common/commonpage.module";
import {IonicPageModule} from "ionic-angular";
import {DesignerMeDetailPage} from "./medetail/medetail";
import {WalletModule} from "../wallet/wallet.module";
import {ModifyProfilePage} from "./modifyprofile/modifyprofile";
import {AddHonorPage} from "./addhonor/addhonor";
import {AddCasePage} from "./addcase/addcase";

@NgModule({
    declarations: [
        DesignerMePage,
        DesignerMeDetailPage,
        ModifyProfilePage,
        AddHonorPage,
        AddCasePage
    ],
    entryComponents: [
        DesignerMePage,
        DesignerMeDetailPage,
        ModifyProfilePage,
        AddCasePage,
        AddHonorPage
    ],
    imports: [
        WalletModule,
        IonicPageModule.forChild(DesignerMePage)
    ],
    exports: [DesignerMePage, DesignerMeDetailPage]
})
export class DesignerMeModule {
}