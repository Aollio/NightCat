import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {AbsCommonPage} from "../abs";
import {SharedService} from "../../../service/share.service";
import {Util} from "../../../service/util";

@Component({
    selector: 'page-support',
    templateUrl: 'support.html'
})
export class SupportPage extends AbsCommonPage {
    suggest: any = "";
    contact: any;


    constructor(public navCtrl: NavController,
                private alert: AlertController,
                private util: Util,
                public navParams: NavParams,
                public share: SharedService) {
        super(share);
    }


    commit() {
        if (this.suggest.trim() == "") {
            this.util.toast("请输入意见或者建议再提交")
            return
        }

        this.alert.create({
            subTitle: '确认提交？',
            buttons: [
                {
                    text: '取消',
                },
                {
                    text: '确认',
                    handler: () => {
                        this.util.toast("提交成功");
                        this.navCtrl.pop();
                    }
                }
            ]
        }).present();
    }
}
