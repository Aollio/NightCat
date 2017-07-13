import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {OrderDetailPage} from "./orderdetail/orderdetail";
import {OrderProcessDetailPage} from "./orderprocess/orderprocess";

@NgModule({
    declarations: [OrderDetailPage,
        OrderProcessDetailPage],
    entryComponents: [OrderDetailPage,
        OrderProcessDetailPage],
    imports: [
        IonicPageModule.forChild(OrderDetailPage),
    ],
    exports: [
        OrderDetailPage
    ]
})
export class OrderModule {
}
