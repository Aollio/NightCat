import {NgModule} from "@angular/core";
import {PublishOrderItemComponent} from "./publishedOrderItem/publishOrderItem.component";

@NgModule({
    declarations:[
        PublishOrderItemComponent
    ],
    exports:[
        PublishOrderItemComponent
    ]
})

export class ComponentModule{}