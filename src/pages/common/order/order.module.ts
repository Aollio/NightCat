import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OrderDetailPage} from "./orderdetail/orderdetail";
import {OrderProcessDetailPage} from "./orderprocess/orderprocess";
import {CommentOrderPage} from "./comment-order/comment-order";
import {CustomIconsModule} from "ionic2-custom-icons";
import {EmployerModule} from "../../employer/employer.module";

@NgModule({
    declarations: [
        OrderDetailPage,
        OrderProcessDetailPage,
        CommentOrderPage
    ],
    entryComponents: [
        OrderDetailPage,
        OrderProcessDetailPage,
        CommentOrderPage
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
