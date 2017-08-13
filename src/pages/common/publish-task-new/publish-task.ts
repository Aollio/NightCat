import {Component} from "@angular/core";
import {SharedService} from "../../../service/share.service";
import {AlertController, NavController} from "ionic-angular";
import {Util} from "../../../service/util";
import {ProjectService} from "../../../service/ajax/projects.service";


declare let initializeFontSize: any;

@Component({
    selector: "page-publish-task",
    templateUrl: 'publish-task.html'
})
export class PublishTaskPageNew {

    maincolor: string;
    designer: boolean;
    relationship: any;

    private project;

    // public event = {
    //     // type:'',
    //     title: '',
    //     description: "",
    //     preBudget: "",
    //     // grabDeadline:"",
    //     designArea: "",
    //     count: "",
    //     workTime: "",
    //
    //     // relationship: 'key',
    //     timeStarts: '2017-01-01',
    //     timeEnds: '2017-01-01',
    //     timeStar: '2017-01-01',
    //     employer_deadline: '2017-01-01'
    // };

    constructor(public util: Util,
                public shared: SharedService,
                public navCtrl: NavController,
                private projectServ: ProjectService,
                public alertCtrl: AlertController) {
        this.maincolor = shared.getPrimaryColor();
        this.designer = shared.isDesModule();
    }


    //start 订单发布

    publish() {
        let alertConfirm = this.alertCtrl.create({
            title: "是否确认发布",
            buttons: [
                {
                    text: '取消',
                    handler: () => {
                        alertConfirm.present();
                    }
                },
                {
                    text: '确认',
                    handler: () => {
                        alertConfirm.dismiss();
                        // this.publishTask();
                    }
                }
            ]
        });
        alertConfirm.present();
    }

    publishTask() {
        let loading = this.util.createLoading("", {});
        loading.present();

        this.projectServ.publishProj(this.project)
            .then(project => {
                let alert = this.alertCtrl.create({
                    title: "发布成功！",
                    buttons: [
                        {
                            text: 'Ok',
                            handler: () => {
                                loading.dismiss();
                                this.navCtrl.pop();
                            }
                        }
                    ]
                });
                alert.present();
            })
            .catch(error => {
                this.util.toast("发布失败！");
            });
    }

    //end 订单发布


    goBack() {
        if (this.isInputSome()) {
            let alert = this.alertCtrl.create({
                title: '提醒',
                message: "确定要退出吗？ 您的项目将不会保存",
                buttons: [
                    {
                        text: '取消',
                        handler: data => {
                        }
                    },
                    {
                        text: '确定',
                        handler: data => {
                            this.navCtrl.pop();
                        }
                    }
                ]
            });
            alert.present();
        } else {
            this.navCtrl.pop();
        }
    }

    //判断用户是否输入
    isInputSome() {
        if (this.project.title && this.project.title.trim() != "") return true;
        if (this.project.title && this.project.description.trim() != "") return true;
        if (this.project.title && this.project.preBudget.trim() != "") return true;
        if (this.project.title && this.project.designArea.trim() != "") return true;
        if (this.project.title && this.project.count.trim() != "") return true;
        if (this.project.title && this.project.workTime.trim() != "") return true;

        return false;
    }

}