import {NgModule} from "@angular/core";
import {DesignerMePage} from "./me";
import {CommonPageModule} from "../../common/commonpage.module";
import {IonicPageModule} from "ionic-angular";
import {DesignerMeDetailPage} from "./medetail/medetail";
import {WalletModule} from "../wallet/wallet.module";
import {ModifyProfilePage} from "./modifyprofile/modifyprofile";
import {AddHonorPage} from "./addhonor/addhonor";
import {AddCasePage} from "./addcase/addcase";
import {CaseDetailPage} from "./casedetail/casedetail";

@NgModule({
    declarations: [
        DesignerMePage,
        DesignerMeDetailPage,
        ModifyProfilePage,
        AddHonorPage,
        AddCasePage,
        CaseDetailPage
    ],
    entryComponents: [
        DesignerMePage,
        DesignerMeDetailPage,
        ModifyProfilePage,
        AddCasePage,
        AddHonorPage,
        CaseDetailPage
    ],
    imports: [
        WalletModule,
        IonicPageModule.forChild(DesignerMePage)
    ],
    exports: [
        CaseDetailPage,
        DesignerMePage, DesignerMeDetailPage]
})
export class DesignerMeModule {
}