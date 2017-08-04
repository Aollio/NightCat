import {Component, Input} from "@angular/core";

import {Order} from "../../model/Order";

@Component({
    selector: "publish-order-item",
    templateUrl: "published-order-item.html",
    // styleUrls: ["./published-order-item.scss"]
})

export class PublishOrderItemComponent {
    @Input() order
    // :Order;
}