import {Component} from "@angular/core";

declare let initializeFontSize: any;

@Component({
    selector: "page-order-process-modify",
    templateUrl: 'order-process-modify.html'
})
export class OrderProcessModifyPage {
    ionViewDidEnter() {
        initializeFontSize()
    }
}
