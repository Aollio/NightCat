import {NgModule} from "@angular/core";
import {PublishOrderItemComponent} from "./published-order-item/published-order-item";

@NgModule({
    declarations:[
        PublishOrderItemComponent
    ],
    exports:[
        PublishOrderItemComponent
    ]
})

export class ComponentModule{}