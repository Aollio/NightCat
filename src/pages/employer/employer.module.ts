import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {CommonPageModule} from "../common/commonpage.module";
import {EmployerTabsPage} from "./tabs/tabs";
import {EmployerModulePage} from "./employer";
import {EmployerHomePage} from "./home/home";
import {DesignerModulePage} from "../designer/designer";
import {DesignerModule} from "../designer/designer.module";
import {DesignerMeModule} from "../designer/me/me.module";
import {HelpChoosePage} from "./helpchoose/helpchoose";

@NgModule({
    declarations: [
        EmployerTabsPage,
        EmployerModulePage,
        EmployerHomePage,
        HelpChoosePage
    ],
    entryComponents: [
        EmployerTabsPage,
        EmployerModulePage,
        EmployerHomePage,
        HelpChoosePage
    ],
    imports: [
        CommonPageModule,
        DesignerModule,
        DesignerMeModule,
        IonicPageModule.forChild(EmployerTabsPage)
    ],
    exports: [EmployerModulePage, EmployerHomePage]
})
export class EmployerModule {
}
