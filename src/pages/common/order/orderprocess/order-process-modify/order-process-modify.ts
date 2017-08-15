import {Component} from "@angular/core";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {PublishTaskPage} from "../../../publishtask/publishtask";
import {ProjectDetailPage} from "../../orderdetail/projectdetail";
import {SharedService} from "../../../../../service/share.service";
import {OrderProcessWaitcomment} from "../order-process-waitcomment/waitcomment";
import {CancelProjectPage} from "../../cancel-project/cancel-project";
import {ProjectService} from "../../../../../service/ajax/projects.service";
import {Util} from "../../../../../service/util";
import {DesignerMeDetailPage} from "../../../../designer/me/medetail/medetail";
import {ChatPage} from "../../../../im/chat/chat";

declare let initializeFontSize: any;

@Component({
    selector: "page-order-process-modify",
    templateUrl: 'order-process-modify.html'
})
export class OrderProcessModifyPage {

    private project;
    private status;

    constructor(private navCtrl: NavController,
                private shared: SharedService,
                private util: Util,
                private nav: NavController,
                private projectServ: ProjectService,
                private navParams: NavParams,
                private alertCtrl: AlertController) {
        this.project = this.navParams.get("project");
        this.status = this.project.status;
    }


    openDetailPage() {
        this.navCtrl.push(ProjectDetailPage, {project: this.project});
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


    openWaitcommentPage() {
        this.alertCtrl.create({
            subTitle: '是否确认收货？',
            buttons: [
                {
                    text: '取消',
                },
                {
                    text: '确认',
                    handler: () => {
                        this.projectServ.employerHarvest(this.project.id).then(() => {
                            this.util.toast("确认成功")
                            this.nav.push(OrderProcessWaitcomment, {project: this.project});
                        }).catch(error => {
                            console.log(error);
                            this.util.toast("确认失败");
                        })
                    }
                }
            ]
        }).present();
    }

    cancelProject() {
        this.nav.push(CancelProjectPage, {projectId: this.project.id});
    }


    showAlert() {
        let confirm = this.alertCtrl.create({
            title: '审图',
            message: '您对设计师的作品不满意，需要我们提供帮助吗？点击确认，我们会尽快联系您。',
            buttons: [
                {
                    text: '确认',
                    handler: () => {
                        console.log('Disagree clicked');
                        this.projectServ.man(this.project.id).then(() => {
                            this.util.toast("会审成功")
                            this.navCtrl.pop();
                        })
                    }
                },
                {
                    text: '取消',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

    designerConfirm() {
        this.projectServ.designerConfirm(this.project.id)
            .then(() => {
                this.nav.pop();
            }).catch(error => {
            console.log(error);
            this.util.toast("确认失败，请稍后再试");
        })
    }

    openPublishTask() {
        this.nav.push(PublishTaskPage, {project: this.project});
    }

    commitProject() {
        this.projectServ.commit(this.project.id)
            .then(() => {
                this.nav.pop();
            }).catch(error => {
            console.log(error);
            this.util.toast("确认失败，请稍后再试");
        })
    }

    openDesignerPage(designer) {
        this.navCtrl.push(DesignerMeDetailPage, {
            designer: designer
        })
    }


    //与之交流
    openChat(user) {
        if (this.shared.isLogin()) {
            this.navCtrl.push(ChatPage, {account: user.accid, to: user})
        } else {
            this.util.presentLoginPage(this.navCtrl);
        }
    }

}
