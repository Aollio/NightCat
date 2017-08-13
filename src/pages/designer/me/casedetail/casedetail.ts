import {Component} from "@angular/core";
import {SharedService} from "../../../../service/share.service";
import {NavController, NavParams} from "ionic-angular";
import {ProjectService} from "../../../../service/ajax/projects.service";
import {UsersService} from "../../../../service/ajax/users.service";
import {Util} from "../../../../service/util";

@Component({
    selector: 'page-casedetail',
    templateUrl: 'casedetail.html'
})
export class CaseDetailPage {

    exp: any;

    mainColor;

    comments: any = []

    constructor(private shared: SharedService,
                private navParams: NavParams,
                private userServ: UsersService,
                private util: Util) {
        this.mainColor = shared.getPrimaryColor();
        this.exp = navParams.get("exp");
        this.userServ.getExperienceComments(this.exp.id)
            .then(cmts => {
                for (let x of cmts) {
                    this.comments.push(x)
                }
            }).catch(err => {
            console.log(err);
            this.util.toast("加载评论错误")
        })
    }

}