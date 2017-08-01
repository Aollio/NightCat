import {Component, Input} from "@angular/core";

import {Order} from "../../model/Order";

@Component({
    selector: "publish-order-item",
    templateUrl: "./publishOrderItem.html",
    // styleUrls: ["./publishOrderItem.scss"]
})

export class PublishOrderItemComponent {
    @Input() order
    // :Order;
}