import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {PublishTaskPage} from "../../common/publishtask/publishtask";
import {PublishTaskPageNew} from "../../common/publish-task-new/publish-task";
import {share} from "rxjs/operator/share";
import {SharedService} from "../../../service/share.service";
import {Util} from "../../../service/util";

declare let initializeFontSize: any
declare let jQuery: any

@Component({
    selector: 'publish-task-middleware',
    templateUrl: 'publish-task-middleware.html'
})

export class PublishTaskMiddleWarePage {
    constructor(public nav: NavController,
                private share: SharedService,
                private util:Util) {
        console.log('create')
        this.nav.parent.select(0);
    }

    first_open: boolean = true;
    second_open: boolean = false;


    //todo 发布任务中间页 跳转问题
    ionViewDidEnter() {
        console.log(this.nav.parent.getSelected().index)
        if (this.second_open) {
            this.first_open = false;
            this.nav.parent.select(0);
            this.second_open = false;
            console.log("end jump of second")
        }
        if (this.first_open) {
            this.first_open = false;
            this.nav.parent.select(0);
            this.second_open = true;

            this.openPublishTask();
            console.log("end jump of first")
        }
        if (this.nav.parent.getSelected().index === 2) {
            this.nav.parent.select(0);

            this.openPublishTask();
            console.log("end jump because index == 1")
        }
        this.nav.parent.select(0);
        console.log("end jump")


        setTimeout(() => {
            this.setInput();
        }, 100);
    }



    openPublishTask() {
        if (this.share.isLogin()) {
            this.nav.push(PublishTaskPage, {});
        }else {
            //todo 提示文字 发布任务时未登录提醒
            this.util.toast("请登录");
        }
    }


    setInput() {
        jQuery(".myInput").find("input").focus(function () {
            console.log("focus")
            jQuery(this).parent().addClass("myInput-wrapper-focus");
        }).blur(function () {
            console.log("blur")
            let input = jQuery(this);
            if (input.val() == "") {
                input.parent().removeClass("myInput-wrapper-focus");
            }
        })
        //若点击到title
        jQuery(".myInput").find(".myInput-title").click(function () {
            jQuery(this).siblings().focus();
        })
    }


}