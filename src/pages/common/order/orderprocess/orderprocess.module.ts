import {NgModule} from "@angular/core";
import {CustomIconsModule} from "ionic2-custom-icons";
import {OrderProcessPreSelectedPage} from "./order-process-pre-selectdes/order-process-pre-selectdes";
import {IonicModule} from "ionic-angular";
import {OrderProcessModifyPage} from "./order-process-modify/order-process-modify";

@NgModule({
    declarations: [
        OrderProcessPreSelectedPage,
        OrderProcessModifyPage
    ],
    entryComponents: [
        OrderProcessPreSelectedPage,
        OrderProcessModifyPage
    ],
    imports: [
        IonicModule,
        CustomIconsModule, // Add this!
    ],
    exports: [
        OrderProcessPreSelectedPage,
        OrderProcessModifyPage
    ]
})
export class OrderProcessModule {
}
