import {Component, Input} from "@angular/core";

import {Order} from "../../model/Order";
import {Util} from "../../service/util";
import {ProjectDetailPage} from "../../pages/common/order/orderdetail/projectdetail";
import {NavController} from "ionic-angular";
import {ProjectsService} from "../../service/ajax/projects.service";

@Component({
    selector: "publish-order-item",
    templateUrl: "published-order-item.html",
})


export class PublishOrderItemComponent {
    constructor(private util: Util,
                private navCtrl: NavController,
                private projServ: ProjectsService) {

    }

    @Input()
    private project;


    openProjectDetail(project) {
        this.navCtrl.push(ProjectDetailPage, {project: this.project});
    }
}