import {Component, Input} from '@angular/core';
import {DesignerMeDetailPage} from "../../designer/me/medetail/medetail";
import {NavController} from "ionic-angular";

declare let initializeFontSize: any

@Component({
   selector: 'page-designer-list-max',
    templateUrl: 'designer-list-max.html'
})

export class DesignerListMaxComponent {

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
        })
    }

}