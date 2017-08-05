import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {PublishTaskPage} from "../../../publishtask/publishtask";

declare let initializeFontSize: any;

@Component({
    selector: "page-order-process-modify",
    templateUrl: 'order-process-modify.html'
})
export class OrderProcessModifyPage {

    project;

    constructor(private nav: NavController, private navParams: NavParams) {
        this.project = navParams.get("project")
    }


    openPushProject() {
        this.nav.push(PublishTaskPage, {})
    }

    ionViewDidEnter() {
        initializeFontSize()
    }

    formatTime1(create_time){
        console.log(create_time);
        let date = new Date(create_time);
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        return year + '-' + month + '-' + day;
    }
}
