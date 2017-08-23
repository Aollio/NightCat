import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProjectDetailPage} from "./orderdetail/projectdetail";
import {CommentOrderPage} from "./comment-order/comment-order";
import {CustomIconsModule} from "ionic2-custom-icons";
import {GrabOrderPage} from "./grab-order/grab-order";
import {OrderProcessModule} from "./orderprocess/orderprocess.module";
import {OrderListAfterSelectDesignerPage} from "./orderlist-after-selectdes/orderlist-after-selectdes";
import {OrderListComponent} from "./orderlist/orderlist";
import {CancelProjectPage} from "./cancel-project/cancel-project";

@NgModule({
    declarations: [
        ProjectDetailPage,
        CommentOrderPage,
        GrabOrderPage,
        OrderListAfterSelectDesignerPage,
       OrderListComponent,
        CancelProjectPage
    ],
    entryComponents: [
        ProjectDetailPage,
        CommentOrderPage,
        GrabOrderPage,
        OrderListAfterSelectDesignerPage,
        OrderListComponent,
        CancelProjectPage
    ],
    imports: [
        IonicPageModule.forChild(ProjectDetailPage),
        CustomIconsModule, // Add this!
        OrderProcessModule
    ],
    exports: [
        ProjectDetailPage, CommentOrderPage,
        OrderListAfterSelectDesignerPage,
        OrderListComponent,
        CancelProjectPage
    ]
})
export class OrderModule {
}
