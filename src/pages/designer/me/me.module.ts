
import {NgModule} from "@angular/core";
import {DesignerMePage} from "./me";
import {DesignerMeDetailPage} from "./medetail/medetail";
import {ModifyProfilePage} from "./modifyprofile/modifyprofile";
import {AddHonorPage} from "./addhonor/addhonor";
import {AddCasePage} from "./addcase/addcase";
import {CaseDetailPage} from "./casedetail/casedetail";
import {FavoriteProjectsPage} from "./favorite-projects/favorite-projects";
import {CommonPageModule} from "../../common/commonpage.module";
import {WalletModule} from "../wallet/wallet.module";
import {IonicPageModule} from "ionic-angular";
import {DesignerModule} from "../designer.module";
import {OrderModule} from "../../common/order/order.module";
import {SlideMenuComponment} from "./slidemenu/slidemenu";
import {CustomIconsModule} from "ionic2-custom-icons";

@NgModule({
    declarations: [
        DesignerMePage,
        DesignerMeDetailPage,
        ModifyProfilePage,
        AddHonorPage,
        AddCasePage,
        CaseDetailPage,
        FavoriteProjectsPage,
        SlideMenuComponment
    ],
    entryComponents: [
        DesignerMePage,
        DesignerMeDetailPage,
        ModifyProfilePage,
        AddCasePage,
        AddHonorPage,
        CaseDetailPage,
        FavoriteProjectsPage,
        SlideMenuComponment
    ],
    imports: [
        WalletModule,
        IonicPageModule.forChild(DesignerMePage),
        OrderModule,
        CustomIconsModule, // Add this!
    ],
    exports: [
        CaseDetailPage,
        DesignerMePage,
        DesignerMeDetailPage,
        FavoriteProjectsPage
    ]
})
export class DesignerMeModule {
}