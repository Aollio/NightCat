import {Component} from "@angular/core";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
import {NavController} from "ionic-angular";
import {KeynoteService} from "../../../../service/keynote.service";
import {UsersService} from "../../../../service/ajax/users.service";
import {SharedService} from "../../../../service/share.service";

declare let initializeFontSize: any

@Component({
    selector: 'page-designer-list-home',
    templateUrl: 'designer-list.html'
})
export class DesignerListPage {
    miancolor;

    users: Array<any> = [];

    designerMeDetailPage: DesignerMeDetailPage;

    constructor(public navCtrl: NavController,
                private usersServ: UsersService,
                public shared:SharedService) {
        this.miancolor=this.shared.getPrimaryColor();
        this.usersServ.getDesigners().then(users => {
            for (let user of users) {
                this.users.push(user)
            }
        });
    }

    ionViewDidEnter() {
        initializeFontSize()
    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }

    openDesignerrPage(user) {
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
            isDesigner: false
        })
    }


    //todo 内容刷新
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }

}