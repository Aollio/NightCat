import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {IonicPageModule} from "ionic-angular";
import {CommonPageModule} from "../common/commonpage.module";
import {EmployerTabsPage} from "./tabs/tabs";
import {EmployerModulePage} from "./employer";
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
import {CustomIconsModule} from "ionic2-custom-icons";
import {SearchDesignerPage} from "./searchdesigner/searchdesigner";
import {RecommendDesignerPage} from "./recommenddesigner/recommenddesigner";
import {EmployerHomeModule} from "./home/home.module";
import {OrderModule} from "../common/order/order.module";
import {EmployerHomePage} from "./home/home";
import {EmployerProjectProcess} from "./projects/employer-project-process/employer-project-process";
import {ComponentModule} from "../../component/component.module";

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
        EmployerProjectProcess,
        EmpOrderListComponent,
        MiddleWarePage,
        PublishTaskMiddleWarePage,
        ChooseDesignerPage,
        SearchDesignerPage,
        RecommendDesignerPage
    ],
    entryComponents: [
        EmployerTabsPage,
        EmployerModulePage,
        EmployerHomePage,
        HelpChoosePage,
        ProjectsPage,
        EmployerProjectProcess,
        EmployerMePage,
        ProjectsPage,
        PayPage,
        ProjectsPage,
        EmpOrderListComponent,
        MiddleWarePage,
        PublishTaskMiddleWarePage,
        ChooseDesignerPage,
        SearchDesignerPage,
        RecommendDesignerPage
    ],
    imports: [
        CommonPageModule,
        DesignerModule,
        DesignerMeModule,
        IonicPageModule.forChild(EmployerTabsPage),
        EmployerMeModule,
        CustomIconsModule ,// Add this!
        EmployerHomeModule,
        OrderModule,
        ComponentModule
    ],
    exports: [
        ProjectsPage,
        EmployerModulePage,
        EmployerHomePage,
        PayPage,
        ChooseDesignerPage,
        EmployerProjectProcess
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class EmployerModule {
}
