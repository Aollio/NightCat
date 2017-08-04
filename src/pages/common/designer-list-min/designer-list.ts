import {Component, Input} from '@angular/core';
import {DesignerMeDetailPage} from "../../designer/me/medetail/medetail";
import {NavController} from "ionic-angular";

declare let initializeFontSize: any

@Component({
    selector: 'designer-list',
    templateUrl: 'designer-list.html'
})

export class DesignerListMinComponent {

    @Input("users") users;

    ionViewDidEnter() {
        initializeFontSize()
    }

    designerMeDetailPage: DesignerMeDetailPage;

    constructor(public navCtrl: NavController) {

    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }

    openDesignerPage(user) {
        this.navCtrl.push(DesignerMeDetailPage, {
            user: user,
            isDesigner: false
        })
    }

}

