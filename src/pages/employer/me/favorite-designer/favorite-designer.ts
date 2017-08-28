import {Component} from "@angular/core";
import {NavController, AlertController, Events} from "ionic-angular";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
import {UsersService} from "../../../../service/ajax/users.service";
import {SharedService} from "../../../../service/share.service";
import {Util} from "../../../../service/util";

@Component({
    templateUrl: 'favorite-designer.html',
    selector: 'page-favorite-designer'
})
export class EmpFavoriteDesignerPage {

    static get_follow_des = "get_follow_des";

    //设计师列表
    users = [];

    //todo delete
    favorite: boolean = true;

    // favorite-designer
    constructor(private navCtrl: NavController,
                private alert: AlertController,
                private events: Events,
                private util: Util,
                private share: SharedService,
                private userServ: UsersService) {
        this.users = userServ.follow_des;

        this.get_follow_designers(() => {});
    }

    get_follow_designers(completeFunc) {
        if (this.share.isDesModule()) return;    //设计师没有此功能
        this.userServ.get_follow_des().then(users => {
            completeFunc();
        }).catch(err => {
            console.log(err);
            this.util.toast("获取关注设计师列表失败")
        });
    }

    //内容刷新
    doRefresh(refresher) {
        this.get_follow_designers(() => {
            refresher.complete();
        })
    }


    //todo delete
    following(user) {
        if (!this.favorite) {
            this.favorite = true;
            this.userServ.follow(user.uid)
        } else {
            this.favorite = false;
            this.userServ.unfollow(user.uid)
        }
    }

    unfollow(user) {
        this.alert.create({
            subTitle: '确定取消关注吗？',
            buttons: [
                {
                    text: '我再看看',
                },
                {
                    text: '不再关注',
                    handler: () => {
                        this.userServ.unfollow(user.uid).then(() => {
                            let index = this.users.indexOf(user);
                            this.users.splice(index, 1);
                        }).catch(err => {
                            console.log(err);
                            this.util.toast("取消关注失败，请稍后再试");
                        })
                    }
                }
            ]
        }).present();
    }

    openDesigner(user) {
        this.navCtrl.push(DesignerMeDetailPage, {
            designer: user
        });
    }

}