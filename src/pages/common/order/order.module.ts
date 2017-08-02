import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProjectDetailPage} from "./orderdetail/orderdetail";
import {CommentOrderPage} from "./comment-order/comment-order";
import {CustomIconsModule} from "ionic2-custom-icons";
import {EmployerModule} from "../../employer/employer.module";
import {GrabOrderPage} from "./grab-order/grab-order";
import {OrderProcessModule} from "./orderprocess/orderprocess.module";
import {OrderListAfterSelectDesignerPage} from "./orderlist-after-selectdes/orderlist-after-selectdes";

@NgModule({
    declarations: [
        ProjectDetailPage,
        CommentOrderPage,
        GrabOrderPage,
        OrderListAfterSelectDesignerPage
    ],
    entryComponents: [
        ProjectDetailPage,
        CommentOrderPage,
        GrabOrderPage,
        OrderListAfterSelectDesignerPage
    ],
    imports: [
        IonicPageModule.forChild(ProjectDetailPage),
        CustomIconsModule, // Add this!
        OrderProcessModule
    ],
    exports: [
        ProjectDetailPage, CommentOrderPage,
        OrderListAfterSelectDesignerPage
    ]
})
export class OrderModule {
}
