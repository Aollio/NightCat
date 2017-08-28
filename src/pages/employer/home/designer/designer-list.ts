import {Component} from "@angular/core";
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

    // 设计师列表
    designers: Array<any> = [];

    designerMeD1etailPage: DesignerMeDetailPage;

    type = 0;
    position = 0;
    official = 0;

    constructor(private navCtrl: NavController,
                private shared: SharedService,
                private userServ: UsersService,
                private navParams: NavParams,
                private util: Util) {



        this.miancolor = this.shared.getPrimaryColor();
        this.previousPage = this.navParams.get("previousPage")
        let typeindex = this.navParams.get("type")
        if (typeindex != null) {
            this.type = typeindex + 1;
        }
        let positionindex = this.navParams.get("position")
        if (positionindex != null) {
            this.position = positionindex
        }
        let officialindex = this.navParams.get("official")
        if (officialindex != null) {
            this.official = officialindex;
        }
    }



    isloading = false;
    syncComplete = false;

    ionViewDidEnter() {
        let loading = this.util.createLoading("加载中")
        loading.present()
        this.isloading = true;

        this._doRefresh(() => {
            if (this.isloading) {
                loading.dismiss();
                console.log("-------after dismiss----- ",loading);
                this.isloading = false;
                this.syncComplete = true;
            }
        })
    }

    // todo 内容刷新
    doRefresh(refresher) {
        this.syncComplete = false;
        this._doRefresh(() => {
            refresher.complete();
            this.syncComplete = true;
        })
    }

    _doRefresh(completeFunc) {
        let params = {
            type: this.type,
            official: this.official,
            position: this.position
        }

        this.userServ.getDesigners(params)
            .then(users => {
                this.designers.length = 0;
                for (let user of users) {
                    this.designers.push(user);
                }
                completeFunc()
            }).catch(error => {
            console.log(error);
            // todo 异常捕获
            completeFunc()
        });

        console.log(this.type + "," + this.position + "," + this.official);
    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }
}