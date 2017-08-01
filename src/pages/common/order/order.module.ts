import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OrderDetailPage} from "./orderdetail/orderdetail";
import {CommentOrderPage} from "./comment-order/comment-order";
import {CustomIconsModule} from "ionic2-custom-icons";
import {EmployerModule} from "../../employer/employer.module";
import {GrabOrderPage} from "./grab-order/grab-order";
import {OrderProcessModule} from "./orderprocess/orderprocess.module";

@NgModule({
    declarations: [
        OrderDetailPage,
        CommentOrderPage,
        GrabOrderPage
    ],
    entryComponents: [
        OrderDetailPage,
        CommentOrderPage,
        GrabOrderPage
    ],
    imports: [
        IonicPageModule.forChild(OrderDetailPage),
        CustomIconsModule, // Add this!
        OrderProcessModule
    ],
    exports: [
        OrderDetailPage, CommentOrderPage
    ]
})
export class OrderModule {
}
