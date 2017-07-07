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

@NgModule({
    declarations: [
        DesignerModulePage,
        DesignerTabsPage,
        MessagePage,
        OrderListComponent,
        DesignerMePage,
        DesignerWalletPage,
        PublishTaskPage, AuthenticationPage, CommentPage
    ],
    entryComponents: [
        DesignerModulePage,
        DesignerTabsPage,
        MessagePage,
        OrderListComponent,
        DesignerMePage,
        DesignerWalletPage,
        PublishTaskPage, AuthenticationPage, CommentPage
    ],
    imports: [
        CommonPageModule,
        IonicPageModule.forChild(DesignerTabsPage)
    ],
    exports: [DesignerModulePage, DesignerTabsPage, PublishTaskPage,DesignerWalletPage]
})
export class DesignerModule {
}
