import {NgModule} from "@angular/core";
import {DesignerTabsPage} from "./tabs/tabs";
import {MessagePage} from "./message/message";
import {OrderListComponent} from "./orderlist/orderlist";
import {IonicPageModule} from "ionic-angular";
import {CommonPageModule} from "../common/commonpage.module";
import {DesignerModulePage} from "./designer";
import {DesignerMePage} from "./me/me";
import {DesignerWalletPage} from "./wallet/wallet";
import {PublishTaskPage} from "./publishtask/publishtask";
import {AuthenticationPage} from "./authentication/authenication";
import {CommentPage} from "./comment/comment";
import {WalletModule} from "./wallet/wallet.module";
import {DesignerHomePage} from "./home/home";

@NgModule({
    declarations: [
        DesignerModulePage,
        DesignerTabsPage,
        MessagePage,
        OrderListComponent,
        DesignerMePage,
        PublishTaskPage,
        AuthenticationPage,
        CommentPage,
        DesignerHomePage
    ],
    entryComponents: [
        DesignerModulePage,
        DesignerTabsPage,
        MessagePage,
        OrderListComponent,
        DesignerMePage,
        PublishTaskPage,
        AuthenticationPage,
        CommentPage,
        DesignerHomePage
    ],
    imports: [
        CommonPageModule,
        WalletModule,
        IonicPageModule.forChild(DesignerTabsPage)
    ],
    exports: [DesignerModulePage,
        CommentPage, DesignerTabsPage, PublishTaskPage, DesignerWalletPage]
})
export class DesignerModule {
}
