import {Component, ViewChild} from "@angular/core";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
import {NavController, NavParams} from "ionic-angular";
import {UsersService} from "../../../../service/ajax/users.service";
import {SharedService} from "../../../../service/share.service";
@Component({
    selector: 'page-designer-list-home',
    templateUrl: 'designer-list.html'
})
export class DesignerListPage {
    // @ViewChild("refresher") refresher;
    miancolor;
    previousPage="";//前一页
    designers: Array<any> = [];

    designerMeDetailPage: DesignerMeDetailPage;

    constructor(private navCtrl:NavController,
                private shared:SharedService,
                private userServ:UsersService,
                private navParams:NavParams) {
        this.miancolor = this.shared.getPrimaryColor();
        this.previousPage = this.navParams.get("previousPage")

    }


    ionViewDidEnter() {
        // console.log(this.refresher);
        // this.refresher.doRefresh();
        this.userServ.getDesigners()
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


    //todo 内容刷新
    doRefresh(refresher) {
        this.designers.length=0;
        this.userServ.getDesigners()
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