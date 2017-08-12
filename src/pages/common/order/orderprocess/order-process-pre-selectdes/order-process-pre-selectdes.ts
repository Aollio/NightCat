import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {AbsCommonPage} from "../../../abs";
import {SharedService} from "../../../../../service/share.service";
import {ProjectDetailPage} from "../../orderdetail/projectdetail";
import {ProjectsService} from "../../../../../service/ajax/projects.service";
import {Util} from "../../../../../service/util";
import {UsersService} from "../../../../../service/ajax/users.service";
import {DesignerMeDetailPage} from "../../../../designer/me/medetail/medetail";
import {ProjectsPage} from "../../../../employer/projects/projects";

declare let initializeFontSize: any;

/*
 * 订单详情
 * */
@Component({
    selector: 'page-order-process-pre-selectdes',
    templateUrl: 'order-process-pre-selectdes.html',
})
export class OrderProcessPreSelectedPage extends AbsCommonPage {


    isGrab;

    private projectId;
    private grabbers = [];

    constructor(public navCtrl: NavController,
                private projectServ: ProjectsService,
                private util: Util,
                private alert: AlertController,
                private userServ: UsersService,
                public navParams: NavParams,
                public share: SharedService) {
        super(share);
        this.isGrab = navParams.get('isGrab');
        this.projectId = this.navParams.get("projectId");

        this.getGrabDesigners();
    }

    getGrabDesigners() {
        //todo getGrabDesigners
        this.projectServ.grabberList(this.projectId)
            .then(grabbers => {
                for (let grabber of grabbers) {
                    this.userServ.getInfo(grabber.uid)
                        .then(user => {
                            grabber.info = user;
                        }).catch(error => {
                        console.log(error);
                    })

                    this.grabbers.push(grabber);
                }


            })
            .catch(error => {
                console.log(error);
            })
    }

    ionViewDidEnter() {
        initializeFontSize()
        console.log("com")
    }

    open(page, option) {
        this.navCtrl.push(page, {})
    }

    goback() {
        if (this.isGrab) {
            // this.navCtrl.popTo(ProjectDetailPage);
            this.navCtrl.popToRoot({animate: true});
        } else {
            this.navCtrl.pop();

        }
    }

    openDesignerPage(disigner) {
        this.navCtrl.push(DesignerMeDetailPage, {
            designer: disigner,
            isDesigner: false
        })
    }

    selectDesigner($event,designerId) {
        $event.stopPropagation();
        this.alert.create({
            title: "是否确认？",
            buttons: [{
                text: "取消",
                handler: data => {
                    console.log('Cancel clicked');
                }
            }, {
                text: "确定",
                handler: data => {
                    let loading = this.util.createLoading("请稍后");
                    loading.present();
                    this.navCtrl.goToRoot({});

                    //发送请求
                    this.projectServ.selectDesigner(this.projectId, designerId)
                        .then(() => {
                            loading.dismiss();
                            this.util.toast("选择设计师成功");

                        }).catch(error => {
                        console.log(error);
                        loading.dismiss();
                        this.util.toast("选择失败，请稍后重试");
                    })
                }
            }]
        }).present();
    }


}
