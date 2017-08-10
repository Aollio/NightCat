import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {PublishTaskPage} from "../../../publishtask/publishtask";
import {ProjectDetailPage} from "../../orderdetail/projectdetail";
import {SharedService} from "../../../../../service/share.service";

declare let initializeFontSize: any;

@Component({
    selector: "page-order-process-modify",
    templateUrl: 'order-process-modify.html'
})
export class OrderProcessModifyPage {


    projectDetail:ProjectDetailPage
    constructor(private navCtrl:NavController,
                private share:SharedService){}
    open(page, option) {
        this.navCtrl.push(page, option)
    }


    openPushProject() {
        this.navCtrl.push(PublishTaskPage, {})
    }


}
