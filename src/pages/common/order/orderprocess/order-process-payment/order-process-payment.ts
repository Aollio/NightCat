import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ProjectDetailPage} from "../../orderdetail/projectdetail";
import {SharedService} from "../../../../../service/share.service";

@Component({
    selector:'page-payment',
    templateUrl:'order-process-payment.html'
})
export class OrderProcessPayment{
    projectDetail:ProjectDetailPage
    constructor(private navCtrl:NavController,
                private shared:SharedService){



    }
    open(page, option) {
        this.navCtrl.push(page, option)
    }

}