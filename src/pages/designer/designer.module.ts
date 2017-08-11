import {NgModule} from "@angular/core";
import {DesignerTabsPage} from "./tabs/tabs";
import {NotificationsPage} from "./nofitications/notifications";
import {IonicPageModule} from "ionic-angular";
import {CommonPageModule} from "../common/commonpage.module";
import {DesignerModulePage} from "./designer";
import {DesignerWalletPage} from "./wallet/wallet";
import {AuthenticationPage} from "./authentication/authenication";
import {CommentPage} from "./comment/comment";
import {WalletModule} from "./wallet/wallet.module";
import {DesignerHomePage} from "./home/home";
import {TaskSquarePage} from "./tasksquare/tasksquare";
import {ChatMessagePage} from "./chatmessage/chatmessage";
import {DesignerMeModule} from "./me/me.module";
import {CaseDetailPage} from "./me/casedetail/casedetail";
import {OrderModule} from "../common/order/order.module";
import {CustomIconsModule} from "ionic2-custom-icons";
import {DesignerProjectsPage} from "./projects/projects";
import {DesOrderListComponent} from "./projects/designerorderlist/designerorderlist";
import {ComponentModule} from "../../component/component.module";
import {ImportantModule} from "../../importants/important.module";


@NgModule({
    declarations: [
        DesignerModulePage,
        DesignerTabsPage,
        NotificationsPage,
        AuthenticationPage,
        CommentPage,
        DesignerHomePage,
        TaskSquarePage,
        ChatMessagePage,
        DesignerProjectsPage,
        DesOrderListComponent
    ],
    entryComponents: [
        DesignerModulePage,
        DesignerTabsPage,
        NotificationsPage,
        AuthenticationPage,
        CommentPage,
        DesignerHomePage,
        TaskSquarePage,
        ChatMessagePage,
        DesignerProjectsPage,
        DesOrderListComponent
    ],
    imports: [
        ComponentModule,
        CommonPageModule,
        DesignerMeModule,
        WalletModule,
        IonicPageModule.forChild(DesignerTabsPage),
        OrderModule,
        CustomIconsModule, // Add this!
        ImportantModule
    ],
    exports: [
        CommentPage,
        DesignerTabsPage,
        DesignerWalletPage,
        TaskSquarePage,
        ChatMessagePage,
        CaseDetailPage
    ]
})
export class DesignerModule {
}
