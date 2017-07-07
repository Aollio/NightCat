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

@NgModule({
    declarations: [
        DesignerModulePage,
        DesignerTabsPage,
        MessagePage,
        OrderListComponent,
        DesignerMePage,
        DesignerWalletPage,
        PublishTaskPage
    ],
    entryComponents: [
        DesignerModulePage,
        DesignerTabsPage,
        MessagePage,
        OrderListComponent,
        DesignerMePage,
        DesignerWalletPage,
        PublishTaskPage
    ],
    imports: [
        CommonPageModule,
        IonicPageModule.forChild(DesignerTabsPage)
    ],
    exports: [DesignerModulePage, DesignerTabsPage,PublishTaskPage]
})
export class DesignerModule {
}
