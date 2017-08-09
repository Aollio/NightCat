import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {PublishTaskPage} from "../../../publishtask/publishtask";
import {ProjectDetailPage} from "../../orderdetail/projectdetail";

declare let initializeFontSize: any;

@Component({
    selector: "page-order-process-modify",
    templateUrl: 'order-process-modify.html'
})
export class OrderProcessModifyPage {


    projectDetail:ProjectDetailPage
    constructor(private navCtrl:NavController){}
    open(page, option) {
        this.navCtrl.push(page, option)
    }


    openPushProject() {
        this.navCtrl.push(PublishTaskPage, {})
    }


}
