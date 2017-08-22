import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {ModifyProfilePage} from "../modifyprofile/modifyprofile";
import {SharedService} from "../../../../service/share.service";
import {CaseDetailPage} from "../casedetail/casedetail";
import {ChatPage} from "../../../im/chat/chat";
import {AlertController} from 'ionic-angular';
import {Util} from "../../../../service/util";
import {UsersService} from "../../../../service/ajax/users.service";


@Component({
    selector: 'page-designer-me-detail',
    templateUrl: 'medetail.html'
})
export class DesignerMeDetailPage {
    btnState: any = 3;
    user: any = {};
    maincolor;
    favorite: boolean = false;
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
                private userServ: UsersService) {
        // this.isDesigner = shared.isDesigner;
        this.user = navParams.get('designer');
        // this.user = navParams.get('designer') || shared.getCurrentUser();
        this.maincolor = this.shared.getPrimaryColor();
        this.userServ.getHonors(this.user.uid).then(honors => {
            for (let honor of honors) {
                this.honors.push(honor)
            }
        }).catch(e => {
            console.log(e);
            this.util.toast("获取荣耀信息错误")
        })
        this.userServ.getExperience(this.user.uid).then(exps => {
            for (let exp of exps) {
                this.experiences.push(exp)
            }
        }).catch(e => {
            console.log(e);
            this.util.toast("获取荣耀信息错误")
        })

    }

    ing = false;

    favoriteHim(user){
        if (this.shared.isLogin()) {

            if (this.ing){
                return
            }
            //todo
            this.favorite=!this.favorite;
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

    //todo
    showHelp() {
        let alert = this.alertCtrl.create({
            title: '星级',
            subTitle: '星级越高, 设计师的综合评价就越高哦',
            buttons: ['OK']
        });
        alert.present();
    }


    //todo 关注设计师
    // attentionMe() {
    //     this.alertCtrl.create({
    //         subTitle: '是否要关注此设计师？',
    //         buttons: [{
    //             text: '取消',
    //         }, {
    //             text: "确定",
    //             handler: () => {
    //                 this.util.toast("成功");
    //             }
    //         }]
    //     }).present();
    // }

}