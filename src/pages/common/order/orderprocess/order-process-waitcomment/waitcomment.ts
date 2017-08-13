import {Component} from "@angular/core";
import {SharedService} from "../../../../../service/share.service";
import {NavController, NavParams} from "ionic-angular";
import {ProjectService} from "../../../../../service/ajax/projects.service";
import {Util} from "../../../../../service/util";

@Component({
    selector: "waitcomment",
    templateUrl: 'waitcomment.html'
})
export class OrderProcessWaitcomment {

    ionViewDidEnter() {
        console.log("com");
    }


    private _comment = {
        id: "",
        content: "",
        type: "2",
        score: "5",
    }


    user;

    project;

    constructor(public shared: SharedService,
                private navParams: NavParams,
                private util: Util,
                private projectServ: ProjectService,
                private nav: NavController) {
        this.user = shared.getCurrentUser();
        this.project = this.navParams.get("project")
        this._comment.id = this.project.id
    }

    comment() {
        this.projectServ.comment(this._comment).then(comment => {
            this.util.toast("评论成功！")
            this.nav.pop();
        }).catch(error => {
            console.log(error);
            this.util.toast("评论失败，请稍后再试");
        })
    }

    //todo
    returnHome() {

    }

}