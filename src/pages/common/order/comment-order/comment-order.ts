import {Component} from "@angular/core";
import {ToastController} from "ionic-angular";
import {ProjectsService} from "../../../../service/ajax/projects.service";

@Component({
    selector: 'comment-order',
    templateUrl: 'comment-order.html'
})
export class CommentOrderPage {

    level: any = 0;
    grade: any = 0;

    publish_complete: boolean = false;

    constructor(public toastCtrl: ToastController,
                public projServ: ProjectsService) {
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

        this.publish_complete = true;
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