import {NgModule} from "@angular/core";
import {CustomIconsModule} from "ionic2-custom-icons";
import {OrderProcessPreSelectedPage} from "./order-process-pre-selectdes/order-process-pre-selectdes";
import {IonicModule} from "ionic-angular";
import {OrderProcessModifyPage} from "./order-process-modify/order-process-modify";
import {OrderProcessComplete} from "./order-process-complete/complete";
import {OrderProcessWaitcomment} from "./order-process-waitcomment/waitcomment";
import {OrderProcessComplete} from "./order-process-complete/complete";

@NgModule({
    declarations: [
        OrderProcessPreSelectedPage,
        OrderProcessModifyPage,
        OrderProcessWaitcomment,
        OrderProcessComplete
    ],
    entryComponents: [
        OrderProcessPreSelectedPage,
        OrderProcessModifyPage,
        OrderProcessWaitcomment,
        OrderProcessComplete
    ],
    imports: [
        IonicModule,
        CustomIconsModule, // Add this!
    ],
    exports: [
        OrderProcessPreSelectedPage,
        OrderProcessModifyPage,
        OrderProcessComplete
    ]
})
export class OrderProcessModule {
}
