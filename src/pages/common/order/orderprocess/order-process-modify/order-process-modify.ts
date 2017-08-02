import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {PublishTaskPage} from "../../../publishtask/publishtask";

declare let initializeFontSize: any;

@Component({
    selector: "page-order-process-modify",
    templateUrl: 'order-process-modify.html'
})
export class OrderProcessModifyPage {


    constructor(private nav: NavController) {
    }


    openPushProject() {
        this.nav.push(PublishTaskPage, {})
    }

    ionViewDidEnter() {
        initializeFontSize()
    }
}
