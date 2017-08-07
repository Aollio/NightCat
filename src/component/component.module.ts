import {NgModule} from "@angular/core";
import {PublishOrderItemComponent} from "./published-order-item/published-order-item";
import {DesignerListMaxComponent} from "./designer-list-max/designer-list-max";
import {IonicModule} from "ionic-angular";

@NgModule({
    imports: [
        IonicModule
    ],
    entryComponents: [
        PublishOrderItemComponent, DesignerListMaxComponent
    ],
    declarations: [
        PublishOrderItemComponent, DesignerListMaxComponent
    ],
    exports: [
        PublishOrderItemComponent, DesignerListMaxComponent
    ]
})

export class ComponentModule {
}