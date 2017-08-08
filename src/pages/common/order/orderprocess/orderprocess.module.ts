import {NgModule} from "@angular/core";
import {CustomIconsModule} from "ionic2-custom-icons";
import {OrderProcessPreSelectedPage} from "./order-process-pre-selectdes/order-process-pre-selectdes";
import {IonicModule} from "ionic-angular";
import {OrderProcessModifyPage} from "./order-process-modify/order-process-modify";
import {OrderProcessWaitcomment} from "./order-process-waitcomment/waitcomment";
import {OrderProcessPayment} from "./order-process-payment/order-process-payment";
import {OrerProcessCompleted} from "./order-process-complete/complete";

@NgModule({
    declarations: [
        OrderProcessPreSelectedPage,
        OrderProcessModifyPage,
        OrerProcessCompleted,
        OrderProcessPayment,
        OrderProcessWaitcomment
    ],
    entryComponents: [
        OrderProcessPreSelectedPage,
        OrderProcessModifyPage,
        OrerProcessCompleted,
        OrderProcessPayment,
        OrderProcessWaitcomment
    ],
    imports: [
        IonicModule,
        CustomIconsModule, // Add this!
    ],
    exports: [
        OrderProcessPreSelectedPage,
        OrderProcessModifyPage,
        OrerProcessCompleted,
        OrderProcessPayment,
        OrderProcessWaitcomment
    ]
})
export class OrderProcessModule {
}
