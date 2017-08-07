import {Component, ViewChild} from "@angular/core";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
import {NavController} from "ionic-angular";
import {KeynoteService} from "../../../../service/keynote.service";
import {UsersService} from "../../../../service/ajax/users.service";
import {SharedService} from "../../../../service/share.service";
import {Manager} from "../../../../service/manager";

declare let initializeFontSize: any

@Component({
    selector: 'page-designer-list-home',
    templateUrl: 'designer-list.html'
})
export class DesignerListPage {
    // @ViewChild("refresher") refresher;
    miancolor;

    designers: Array<any> = [];

    designerMeDetailPage: DesignerMeDetailPage;

    constructor(private manager: Manager,private navCtrl:NavController) {
        this.miancolor = this.manager.sharedServ.getPrimaryColor();


    }

    ionViewDidEnter() {
        // console.log(this.refresher);
        // this.refresher.doRefresh();
        this.manager.userServ.getDesigners()
            .then(users => {
                for (let user of users) {
                    this.designers.push(user);
                }
            }).catch(error => {
                console.log(error);
            //todo 异常捕获
        });
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
        this.designers.length=0;
        this.manager.userServ.getDesigners()
            .then(users => {
                for (let user of users) {
                    this.designers.push(user);
                }

                console.log(users);

                refresher.complete();
            }).catch(error => {
            //todo 异常捕获
            console.log(error);
            refresher.complete();
        });

    }



}