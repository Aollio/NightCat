import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {ModifyProfilePage} from "../modifyprofile/modifyprofile";
import {SharedService} from "../../../../service/share.service";
import {CaseDetailPage} from "../casedetail/casedetail";
import {ChatPage} from "../../../im/chat/chat";
import {AlertController} from 'ionic-angular';
import {Util} from "../../../../service/util";
import {UsersService} from "../../../../service/ajax/users.service";
import {ProjectService} from "../../../../service/ajax/projects.service";


@Component({
    selector: 'page-designer-me-detail',
    templateUrl: 'medetail.html'
})
export class DesignerMeDetailPage {
    btnState: any = 3;
    user: any = {};
    maincolor;

    public isDesigner: boolean;

    honors = [];

    experiences = [];

    cases: Array<{ title, desc, fav_count, comment_count, time }> = [
        {
            title: '案例标题', desc: 'It’s often necessary to create social cards within an application.',
            fav_count: 15, comment_count: 2, time: '11 min ago'
        },
        {
            title: '案例标题', desc: 'It’s often necessary to create social cards within an application.',
            fav_count: 15, comment_count: 2, time: '11 min ago'
        },
        {
            title: '案例标题', desc: 'It’s often necessary to create social cards within an application.',
            fav_count: 15, comment_count: 2, time: '11 min ago'
        },
    ];

    constructor(public navCtrl: NavController,
                public shared: SharedService,
                public alertCtrl: AlertController,
                public navParams: NavParams,
                private util: Util,
                private projServ:ProjectService,
                private userServ: UsersService) {

        this.user = navParams.get('designer');
        this.maincolor = this.shared.getPrimaryColor();

        userServ.get_follow_des(false).then(() => {
            this.follow = this.is_follow();
        }).catch(err => console.log(err));


        this.get_honors();
        this.get_experience();
    }

    get_honors() {
        this.userServ.getHonors(this.user.uid).then(honors => {
            for (let honor of honors) {
                this.honors.push(honor)
            }
        }).catch(e => {
            console.log(e);
            this.util.toast("获取荣耀信息错误")
        })
    }

    get_experience() {
        this.userServ.getExperience(this.user.uid).then(exps => {
            for (let exp of exps) {
                this.experiences.push(exp)
            }
        }).catch(e => {
            console.log(e);
            this.util.toast("获取经历信息错误")
        })
    }


    //>>>>>>>>>>>>>>>>>>>>>>关注功能>>>>>>>>>>>>>>>>>>>>>>>
    follow: boolean = false;    //是否关注
    follow_disabled = false;     //可否点击

    is_follow() {
        for (let des of this.userServ.follow_des) {
            if (this.user.uid == des.uid) {
                return true;
            }
        }
        return false;
    }

    favoriteHim() {
        if (!this.shared.isLogin()) {
            this.util.presentLoginPage(this.navCtrl);
            return;
        }


        if (!this.follow) {
            this.follow_disabled = true;
            this.userServ.follow(this.user.uid).then(() => {
                this.follow = true;
                this.follow_disabled = false;
            }).catch(err => {
                console.log(err);
                this.follow_disabled = false;
                this.util.toast("关注失败");
            })
        } else {
            this.alertCtrl.create({
                subTitle: '是否要取消关注此设计师？',
                buttons: [{
                    text: '取消',
                }, {
                    text: "确定",
                    handler: () => {
                        this.follow_disabled = true;
                        this.userServ.unfollow(this.user.uid).then(() => {
                            this.follow = false;
                            this.follow_disabled = false;
                        }).catch(err => {
                            console.log(err);
                            this.follow_disabled = false;
                            this.util.toast("取消关注失败");
                        })
                    }
                }]
            }).present();
        }
    }

    //<<<<<<<<<<<<<<<<<<<<<<<关注功能<<<<<<<<<<<<<<<<<<<<<<<<


    modify() {
        this.navCtrl.push(ModifyProfilePage);
    }

    case() {
        this.btnState = 1;
    }

    honor() {
        this.btnState = 2;
    }

    experice() {
        this.btnState = 3;
    }

    openChat(user) {
        if (this.shared.isLogin()) {
            this.navCtrl.push(ChatPage, {account: user.accid, to: user})
        } else {
            this.util.presentLoginPage(this.navCtrl);
        }
    }

    openExpCommenttDetail(exp) {
        this.navCtrl.push(CaseDetailPage, {exp: exp})
    }

    openCaseDetail() {
        this.navCtrl.push(CaseDetailPage)
    }

    //星级提示
    showHelp() {
        let alert = this.alertCtrl.create({
            title: '星级',
            subTitle: '星级越高, 设计师的综合评价就越高哦',
            buttons: ['OK']
        });
        alert.present();
    }
}