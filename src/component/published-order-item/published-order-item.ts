import {Component, Input} from "@angular/core";

import {Order} from "../../model/Order";
import {Util} from "../../service/util";
import {ProjectDetailPage} from "../../pages/common/order/orderdetail/projectdetail";
import {NavController} from "ionic-angular";
import {ProjectsService} from "../../service/ajax/projects.service";

@Component({
    selector: "publish-order-item",
    templateUrl: "published-order-item.html",
    // styleUrls: ["./published-order-item.scss"]
})


export class PublishOrderItemComponent {
    constructor(private util: Util,
                private navCtrl: NavController,
                private projServ: ProjectsService) {

    }

    private _project;

    @Input()
    set project(project) {
        this._project = project;
        console.log('get project imgs');
        this.projServ.getProjectImgs(project.id).then(imgs => {
            this.imgs = imgs;
        }).catch(error => {
            console.log(error);
        });
    }

    private imgs;

    openProjectDetail(project) {
        this.navCtrl.push(ProjectDetailPage, {project: this._project,imgs:this.imgs});
    }
}