import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ProjectDetailPage} from "./orderdetail/projectdetail";
import {CommentOrderPage} from "./comment-order/comment-order";
import {CustomIconsModule} from "ionic2-custom-icons";
import {EmployerModule} from "../../employer/employer.module";
import {GrabOrderPage} from "./grab-order/grab-order";
import {OrderProcessModule} from "./orderprocess/orderprocess.module";
import {OrderListAfterSelectDesignerPage} from "./orderlist-after-selectdes/orderlist-after-selectdes";
import {OrderListComponent} from "./orderlist/orderlist";

@NgModule({
    declarations: [
        ProjectDetailPage,
        CommentOrderPage,
        GrabOrderPage,
        OrderListAfterSelectDesignerPage,
       OrderListComponent
    ],
    entryComponents: [
        ProjectDetailPage,
        CommentOrderPage,
        GrabOrderPage,
        OrderListAfterSelectDesignerPage,
        OrderListComponent
    ],
    imports: [
        IonicPageModule.forChild(ProjectDetailPage),
        CustomIconsModule, // Add this!
        OrderProcessModule
    ],
    exports: [
        ProjectDetailPage, CommentOrderPage,
        OrderListAfterSelectDesignerPage,
        OrderListComponent
    ]
})
export class OrderModule {
}
