import {Component} from "@angular/core";
import {AlertController, NavController} from "ionic-angular";
import {PublishTaskPage} from "../../../publishtask/publishtask";
import {ProjectDetailPage} from "../../orderdetail/projectdetail";
import {SharedService} from "../../../../../service/share.service";

declare let initializeFontSize: any;

@Component({
    selector: "page-order-process-modify",
    templateUrl: 'order-process-modify.html'
})
export class OrderProcessModifyPage {

    projectDetail:ProjectDetailPage
    constructor(private navCtrl:NavController,
                private share:SharedService,
                private alertCtrl:AlertController
    ){

    }
    open(page, option) {
        this.navCtrl.push(page, option)
    }

    openPushProject() {
        this.navCtrl.push(PublishTaskPage, {})
    }

    showCancelAlert() {
        let confirm = this.alertCtrl.create({
            title: '取消抢单',
            message: '您真的要取消抢单吗？',
            buttons: [
                {
                    text: '我再想想',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '坚决取消',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

    showPutInAlert() {
        let confirm = this.alertCtrl.create({
           // title: '取消抢单',
            message: '确认交付作品？',
            buttons: [
                {
                    text: '取消',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '确认',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

    showShentuAlert() {
        let confirm = this.alertCtrl.create({
            // title: '审图',
            message: '确认审图？',
            buttons: [
                {
                    text: '取消',
                    handler: () => {
                        console.log('Disagree clicked');
                    }
                },
                {
                    text: '确认',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

}
