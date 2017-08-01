import {NgModule} from "@angular/core";
import {CustomIconsModule} from "ionic2-custom-icons";
import {OrderProcessPreSelectedPage} from "./order-process-pre-selectdes/order-process-pre-selectdes";
import {IonicModule} from "ionic-angular";

@NgModule({
    declarations: [
        OrderProcessPreSelectedPage
    ],
    entryComponents: [
        OrderProcessPreSelectedPage
    ],
    imports: [
        IonicModule,
        CustomIconsModule, // Add this!
    ],
    exports: [
        OrderProcessPreSelectedPage
    ]
})
export class OrderProcessModule {
}
