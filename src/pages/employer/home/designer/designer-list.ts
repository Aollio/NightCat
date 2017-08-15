import {Component, ViewChild} from "@angular/core";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
import {NavController, NavParams} from "ionic-angular";
import {UsersService} from "../../../../service/ajax/users.service";
import {SharedService} from "../../../../service/share.service";
import {Util} from "../../../../service/util";

@Component({
    selector: 'page-designer-list-home',
    templateUrl: 'designer-list.html'
})
export class DesignerListPage {

    // @ViewChild("refresher") refresher;

    miancolor;
    previousPage = "";//前一页
    designers: Array<any> = [];

    designerMeDetailPage: DesignerMeDetailPage;

    type = 0;

    constructor(private navCtrl: NavController,
                private shared: SharedService,
                private userServ: UsersService,
                private navParams: NavParams,
                private util: Util) {
        this.miancolor = this.shared.getPrimaryColor();
        this.previousPage = this.navParams.get("previousPage")
        let typeindex = this.navParams.get("type")
        if (typeindex != null) {
            this.type = typeindex;
        }

    }

    isloading = false;
    syncComplete = false;

    ionViewDidEnter() {

        let loading = this.util.createLoading("加载中")
        this.isloading = true;

        loading.present()

        this._doRefresh(() => {
            if (this.isloading) {
                loading.dismiss()
                this.isloading = false;
                this.syncComplete = true;
            }
        })
    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }


    //todo 内容刷新
    doRefresh(refresher) {
        this.designers.length = 0;
        this.syncComplete = false;
        this._doRefresh(() => {
            refresher.complete();
            this.syncComplete = true;
        })
    }

    _doRefresh(completeFunc) {

        let params = {
            type: this.type
        }

        this.userServ.getDesigners(params)
            .then(users => {
                for (let user of users) {
                    this.designers.push(user);
                }
                completeFunc()
            }).catch(error => {
            console.log(error);
            //todo 异常捕获
            completeFunc()
        });
    }


}