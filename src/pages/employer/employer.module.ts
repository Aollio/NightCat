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
import {PayPage} from "./pay/pay";
import {EmpOrderListComponent} from "./projects/emporderlist/emporderlist";
import {MiddleWarePage} from "./helpchoose/middleware/middleware";
import {PublishTaskMiddleWarePage} from "./publish-task-middleware/publish-task-middleware";
import {ChooseDesignerPage} from "./choosedesigner/choosedesigner";

@NgModule({
    declarations: [
        EmployerTabsPage,
        EmployerModulePage,
        EmployerHomePage,
        HelpChoosePage,
        ProjectsPage,
        EmployerMePage,
        ProjectsPage,
        PayPage,
        ProjectsPage,
        EmpOrderListComponent,
        MiddleWarePage,
        PublishTaskMiddleWarePage,
        ChooseDesignerPage
    ],
    entryComponents: [
        EmployerTabsPage,
        EmployerModulePage,
        EmployerHomePage,
        HelpChoosePage,
        ProjectsPage,
        EmployerMePage,
        ProjectsPage,
        PayPage,
        ProjectsPage,
        EmpOrderListComponent,
        MiddleWarePage,
        PublishTaskMiddleWarePage,
        ChooseDesignerPage
    ],
    imports: [
        CommonPageModule,
        DesignerModule,
        DesignerMeModule,
        IonicPageModule.forChild(EmployerTabsPage),
        EmployerMeModule
    ],
    exports: [ProjectsPage,
        EmployerModulePage,
        EmployerHomePage,
        PayPage,
        ChooseDesignerPage,
    ]
})
export class EmployerModule {
}
