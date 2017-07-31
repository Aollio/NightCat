import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OrderDetailPage} from "./orderdetail/orderdetail";
import {OrderProcessDetailPage} from "./orderprocess/orderprocess";
import {CommentOrderPage} from "./comment-order/comment-order";
import {CustomIconsModule} from "ionic2-custom-icons";
import {EmployerModule} from "../../employer/employer.module";
import {GrabOrderPage} from "./grab-order/grab-order";

@NgModule({
    declarations: [
        OrderDetailPage,
        OrderProcessDetailPage,
        CommentOrderPage,
        GrabOrderPage
    ],
    entryComponents: [
        OrderDetailPage,
        OrderProcessDetailPage,
        CommentOrderPage,
        GrabOrderPage
    ],
    imports: [
        IonicPageModule.forChild(OrderDetailPage),
        CustomIconsModule, // Add this!
    ],
    exports: [
        OrderDetailPage, CommentOrderPage
    ]
})
export class OrderModule {
}
