import {Component} from "@angular/core";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
import {NavController} from "ionic-angular";

declare let initializeFontSize: any

@Component({
    selector: 'page-designertypes-home',
    templateUrl: 'designertypes.html'
})
export class DesignerTypesPage {
    designerMeDetailPage: DesignerMeDetailPage;

    constructor(public navCtrl: NavController) {

    }

    ionViewDidEnter() {
        initializeFontSize()
    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }

    openDesignerrPage() {
        this.navCtrl.push(DesignerMeDetailPage, {
            user:
                {
                    nickname: '金兔子耳朵金兔子耳朵金兔子耳朵',
                    role: '00',
                    phone: '1234567890',
                    password: '123456',
                    realname: '王晓峰',
                    summary: '我只是一个普通的设计师',
                    position: '原型设计师',
                    school: '某哈某佛大学',
                    service_length: '7年',
                    type: '建筑设计'
                },
                isDesigner:false
        })
    }
}