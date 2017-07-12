import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {CommonPageModule} from "../common/commonpage.module";
import {EmployerTabsPage} from "./tabs/tabs";
import {EmployerModulePage} from "./employer";
import {EmployerHomePage} from "./home/home";
import {DesignerModulePage} from "../designer/designer";
import {DesignerModule} from "../designer/designer.module";

@NgModule({
    declarations: [
        EmployerTabsPage,
        EmployerModulePage,
        EmployerHomePage
    ],
    entryComponents: [
        EmployerTabsPage,
        EmployerModulePage,
        EmployerHomePage
    ],
    imports: [
        CommonPageModule,
        DesignerModule,
        IonicPageModule.forChild(EmployerTabsPage)
    ],
    exports: [EmployerModulePage, EmployerHomePage]
})
export class EmployerModule {
}
