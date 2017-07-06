import {NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {CommonPageModule} from "../common/commonpage.module";
import {EmployerTabsPage} from "./tabs/tabs";
import {EmployerModulePage} from "./employer";
@NgModule({
    declarations: [
        EmployerTabsPage,
        EmployerModulePage
    ],
    entryComponents: [
        EmployerTabsPage,
        EmployerModulePage
    ],
    imports: [
        CommonPageModule,
        IonicPageModule.forChild(EmployerTabsPage)
    ],
    exports: [EmployerModulePage]
})
export class EmployerModule {
}
