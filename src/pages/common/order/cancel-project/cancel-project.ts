import {Component} from "@angular/core";
import {Util} from "../../../../service/util";
import {Manager} from "../../../../service/manager";
import {NavController, NavParams} from "ionic-angular";

@Component({
    selector: 'page-cancel-project',
    templateUrl: 'cancel-project.html'
})
export class CancelProjectPage {
    //当前登录角色对应的颜色
    main_color: any;

    constructor(private util: Util,
                private manager: Manager,
                private nav: NavController,
                private navParam: NavParams) {
        this.main_color = this.manager.sharedServ.getPrimaryColor();
    }

}