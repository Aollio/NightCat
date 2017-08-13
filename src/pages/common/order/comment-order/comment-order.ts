import {Component} from "@angular/core";
import {NavController, NavParams, ToastController} from "ionic-angular";
import {ProjectService} from "../../../../service/ajax/projects.service";
import {Util} from "../../../../service/util";
import {SharedService} from "../../../../service/share.service";

@Component({
    selector: 'comment-order',
    templateUrl: 'comment-order.html'
})
export class CommentOrderPage {

    level: any = 0;
    grade: any = 0;

    private project;

    private _comment = {
        id: "",
        content: "",
        type: "2",
        score: "5",
    }

    publish_complete: boolean = false;

    constructor(public toastCtrl: ToastController,
                private navParams:NavParams,
                private shared:SharedService,
                private util:Util,
                private nav:NavController,
                public projServ: ProjectService) {
        this.project = this.navParams.get("project")
    }

    publish() {
        if (this.level === 0) {
            this.toast("请选择评价等级")
            return
        }
        if (this.grade === 0) {
            this.toast("请选择星星个数")
            return
        }

        this._comment.id = this.project.id;
        this._comment.type=this.level;
        this._comment.score=this.grade;

        this.projServ.comment(this._comment).then(comment => {
            this.publish_complete = true;
            this.util.toast("评论成功！")
            this.nav.pop();
        }).catch(error => {
            console.log(error);
            this.util.toast("评论失败，请稍后再试");
        })

    }

    select(level) {
        this.level = level;

    }


    star(grade) {
        this.grade = grade;

    }


    toast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 1000,
            position: 'bottom'
        });
        toast.present();
    }

}