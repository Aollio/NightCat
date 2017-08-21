import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {ProjectDetailPage} from "../../common/order/orderdetail/projectdetail";
import {PublishTaskPage} from "../../common/publishtask/publishtask";
import {SharedService} from "../../../service/share.service";
import {KeynoteService} from "../../../service/keynote.service";
import {LoginPage} from "../../common/login/login";
import {Util} from "../../../service/util";
import {ProjectService} from "../../../service/ajax/projects.service";
import {MessageService} from "../../../service/ajax/message.serveic";

@Component({
    selector: 'page-notifications',
    templateUrl: 'notifications.html'
})


export class NotificationsPage {

    publishtaskpage = PublishTaskPage;

    maincolor: string;

    noticeses = []


    formatTime(create_time) {
        return this.util.formatDate(new Date(create_time));
    }

    constructor(public navCtrl: NavController,
                public util: Util,
                public projectServ: ProjectService,
                private msgServ: MessageService,
                public shared: SharedService,
                public modalCtrl: ModalController,
                public keynote: KeynoteService) {
        this.maincolor = shared.getPrimaryColor();

        this.msgServ.getNotices().then(noticeses => {
            if (this.isLogin()) {
                for (let notices of noticeses) {
                    this.noticeses.push(notices);
                }
                this.sortNotices();
            }
        }).catch(error => console.log(error));

    }

    sortNotices() {
        this.noticeses.sort((a, b) => {
            if (a.create_time >= b.create_time) {
                return -1;
            }
            return 1;
        })
    }


    /**
     * 打开订单详情页面，参数为订单id
     * */
    openOrderDetail(id) {
        this.navCtrl.push(ProjectDetailPage, {
            order: this.keynote.projects[0]
        })
    }

    openPage(page, option) {
        this.navCtrl.push(page, option)
    }

    //todo 内容刷新
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }


    isLogin() {
        let login = JSON.stringify(this.shared.getCurrentUser()) != JSON.stringify({})
        console.log("isLogin", login);
        return login;
    }


    openLoginPage(event) {
        let profileModal = this.modalCtrl.create(LoginPage);
        profileModal.present();
        // event.stopPropagation();
        // this.navCtrl.push(LoginPage);
    }


}


// export class NotificationsPage {
//
//     publishtaskpage = PublishTaskPage;
//
//     maincolor: string;
//
//     constructor(public navCtrl: NavController,
//                 public shared: SharedService,
//                 public keynote:KeynoteService) {
//         this.maincolor = shared.getPrimaryColor();
//     }
//
//
//     /**
//      * 打开订单详情页面，参数为订单id
//      * */
//     openOrderDetail(id) {
//         this.navCtrl.push(ProjectDetailPage, {
//             order: this.keynote.projects[0]
//         })
//     }
//
//     openPage(page, option) {
//         this.navCtrl.push(page, option)
//     }
//
//     //todo 内容刷新
//     doRefresh(refresher) {
//         console.log('Begin async operation', refresher);
//
//         setTimeout(() => {
//             console.log('Async operation has ended');
//             refresher.complete();
//         }, 2000);
//     }
//
// }
