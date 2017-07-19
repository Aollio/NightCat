import {NgModule} from "@angular/core";
import {DesignerTabsPage} from "./tabs/tabs";
import {MessagePage} from "./message/message";
import {OrderListComponent} from "./orderlist/orderlist";
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

@NgModule({
    declarations: [
        DesignerModulePage,
        DesignerTabsPage,
        MessagePage,
        OrderListComponent,
        AuthenticationPage,
        CommentPage,
        DesignerHomePage,
        TaskSquarePage,
        ChatMessagePage
    ],
    entryComponents: [
        DesignerModulePage,
        DesignerTabsPage,
        MessagePage,
        OrderListComponent,
        AuthenticationPage,
        CommentPage,
        DesignerHomePage,
        TaskSquarePage,
        ChatMessagePage
    ],
    imports: [
        CommonPageModule,
        DesignerMeModule,
        WalletModule,
        IonicPageModule.forChild(DesignerTabsPage),
        OrderModule,
        CustomIconsModule // Add this!
    ],
    exports: [
        CommentPage,
        DesignerTabsPage,
        DesignerWalletPage,
        TaskSquarePage,
        ChatMessagePage,
        OrderListComponent,
        CaseDetailPage
    ]
})
export class DesignerModule {
}
