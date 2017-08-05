import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {ModifyProfilePage} from "../modifyprofile/modifyprofile";
import {SharedService} from "../../../../service/share.service";
import {AlertController} from 'ionic-angular';

declare let initializeFontSize: any

@Component({
    selector: 'page-designer-me-detail',
    templateUrl: 'medetail.html'
})
export class DesignerMeDetailPage {
    btnState: any = 1;
    user = {};
    maincolor;
    public isDesigner: boolean;

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
                public navParams: NavParams) {
        this.isDesigner = navParams.get('isDesigner');
        this.user = navParams.get('user') || shared.getCurrentUser();
        this.maincolor=this.shared.getPrimaryColor();

    }


    modify() {
        this.navCtrl.push(ModifyProfilePage);
    }

    case() {
        this.btnState = 1;
    }

}