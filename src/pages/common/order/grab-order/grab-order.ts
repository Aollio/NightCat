import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AbsCommonPage} from "../../abs";
import {SharedService} from "../../../../service/share.service";
import {ProjectDetailPage} from "../orderdetail/projectdetail";
import {OrderProcessPreSelectedPage} from "../orderprocess/order-process-pre-selectdes/order-process-pre-selectdes";
import {ProjectsService} from "../../../../service/ajax/projects.service";
import {Util} from "../../../../service/util";
/*
 * 我要抢单
 * */
@Component({
    selector: 'grab-order',
    templateUrl: 'grab-order.html'
})
export class GrabOrderPage {

    private grab_info = {
        id: null,
        price: null,
        cycle: null,
        description: null
    };

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private util:Util,
                private projectServ: ProjectsService,
                public share: SharedService) {
        this.grab_info.id = navParams.get('id');
    }


    grab_project() {
        this.projectServ.grabProject(this.grab_info)
            .then(grab_info => {
                this.util.toast("已抢单");
                this.openDetailPage();
            }).catch(error => {
            if (error.status == 406 || error.status == 407) {
                this.util.toast(error.message);
            }
        })
    }

    openDetailPage() {
        this.navCtrl.push(OrderProcessPreSelectedPage, {isGrab: true})
    }

}
