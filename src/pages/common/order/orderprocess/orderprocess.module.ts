import {NgModule} from "@angular/core";
import {CustomIconsModule} from "ionic2-custom-icons";
import {OrderProcessPreSelectedPage} from "./order-process-pre-selectdes/order-process-pre-selectdes";
import {IonicModule} from "ionic-angular";
import {OrderProcessModifyPage} from "./order-process-modify/order-process-modify";
import {OrderProcessComplete} from "./order-process-complete/complete";
import {OrderProcessPayment} from "./order-process-payment/order-process-payment";
import {Waitcomment} from "./order-process-waitcomment/waitcomment";

@NgModule({
    declarations: [
        OrderProcessPreSelectedPage,
        OrderProcessModifyPage,
        OrderProcessComplete,
        OrderProcessPayment,
        Waitcomment
    ],
    entryComponents: [
        OrderProcessPreSelectedPage,
        OrderProcessModifyPage,
        OrderProcessComplete,
        OrderProcessPayment,
        Waitcomment
    ],
    imports: [
        IonicModule,
        CustomIconsModule, // Add this!
    ],
    exports: [
        OrderProcessPreSelectedPage,
        OrderProcessModifyPage,
        OrderProcessComplete,
        OrderProcessPayment,
        Waitcomment
    ]
})
export class OrderProcessModule {
}
