import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {ModifyProfilePage} from "../modifyprofile/modifyprofile";
import {SharedService} from "../../../../service/share.service";
import {User} from "../../../../model/user";
import {CaseDetailPage} from "../casedetail/casedetail";

@Component({
    selector: 'page-designer-me-detail',
    templateUrl: 'medetail.html'
})
export class DesignerMeDetailPage {

    user: User;

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
    ]

    constructor(public navCtrl: NavController,
                public shared: SharedService) {
        this.user = shared.currentUser;
    }


    openCaseDetail() {
        this.navCtrl.push(CaseDetailPage)
    }

    modify() {
        this.navCtrl.push(ModifyProfilePage);
    }
}