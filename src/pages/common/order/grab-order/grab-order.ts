import {Component} from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';
import {SharedService} from "../../../../service/share.service";
import {ProjectService} from "../../../../service/ajax/projects.service";
import {Util} from "../../../../service/util";
/*
 * 我要抢单
 * */
@Component({
    selector: 'grab-order',
    templateUrl: 'grab-order.html'
})
export class GrabOrderPage {

    private grab_info = {
        id: null,
        price: null,
        cycle: null,
        description: null
    };

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private util:Util,
                private projectServ: ProjectService,
                public share: SharedService,
                private alertCtrl:AlertController) {
        this.grab_info.id = navParams.get('id');
    }


    grab_project() {
        if(!this.grab_info.price || this.grab_info.price.trim()==""){
            this.util.toast("请输入报价");
            return
        }
        if(!this.grab_info.cycle || this.grab_info.cycle.trim()==""){
            this.util.toast("请输入任务周期");
            return
        }
        if(!this.grab_info.description || this.grab_info.description.trim()==""){
            this.util.toast("请输入方案说明");
            return
        }


        this.projectServ.grabProject(this.grab_info)
            .then(grab_info => {
                //this.util.toast("已抢单");
                this.util.toast("抢单成功")
                this.navCtrl.goToRoot({})
            }).catch(error => {
                console.log(error);
            if (error.status == 406 || error.status == 407) {
                this.util.toast(error.message);
            }
        })
    }



}
