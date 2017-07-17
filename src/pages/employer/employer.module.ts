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
import {ProjectsPage} from "./projects/projects";
import {EmployerMePage} from "./me/me";
import {EmployerMeModule} from "./me/me.module";
import {EmpOrderListComponent} from "./projects/emporderlist/emporderlist";
import {MiddleWare} from "./helpchoose/middleware/middleware";

@NgModule({
    declarations: [
        EmployerTabsPage,
        EmployerModulePage,
        EmployerHomePage,
        HelpChoosePage,
        ProjectsPage,
        EmployerMePage,
        ProjectsPage,
        EmpOrderListComponent,
        MiddleWare

    ],
    entryComponents: [
        EmployerTabsPage,
        EmployerModulePage,
        EmployerHomePage,
        HelpChoosePage,
        ProjectsPage,
        EmployerMePage,
        ProjectsPage,
        EmpOrderListComponent,
        MiddleWare
    ],
    imports: [
        CommonPageModule,
        DesignerModule,
        DesignerMeModule,
        IonicPageModule.forChild(EmployerTabsPage),
        EmployerMeModule
    ],
    exports: [ProjectsPage,
        EmployerModulePage, EmployerHomePage]
})
export class EmployerModule {
}
