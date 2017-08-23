import {Component} from '@angular/core';
import {ModalController, NavController} from 'ionic-angular';
import {ProjectDetailPage} from "../../common/order/orderdetail/projectdetail";
import {PublishTaskPage} from "../../common/publishtask/publishtask";
import {SharedService} from "../../../service/share.service";
import {KeynoteService} from "../../../service/keynote.service";
import {Util} from "../../../service/util";
import {ProjectService} from "../../../service/ajax/projects.service";
import {NoticesService} from "../../../service/ajax/notices.serveic";

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
                private noticesServ: NoticesService,
                public shared: SharedService,
                public modalCtrl: ModalController,
                public keynote: KeynoteService) {
        this.maincolor = shared.getPrimaryColor();

        this.getNotices(() => {
        });
    }

    //获取消息列表
    getNotices(completeFunc) {
        if (this.shared.isLogin()) {
            this.noticesServ.getNotices().then(noticeses => {
                for (let notices of noticeses) {
                    this.noticeses.push(notices);
                }
                this.sortNotices();
                completeFunc();
            }).catch(error => console.log(error));
        }
    }

    //对消息列表进行排序
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


    //todo 内容刷新
    doRefresh(refresher) {
        this.getNotices(() => {
            refresher.complete()
        });
    }


    //把消息设为已读
    read(_notice) {
        this.noticesServ.read_notices(_notice.id).then(notice => {
            for (let index in this.noticeses) {
                if (this.noticeses[index] == _notice) {
                    this.noticeses[index] = notice;
                }
            }
        }).catch(err => {
            console.log(err);
        })
    }


}

