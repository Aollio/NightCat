import {Component, Input} from '@angular/core';
import {DesignerMeDetailPage} from "../../pages/designer/me/medetail/medetail";
import {NavController} from "ionic-angular";


@Component({
    selector: 'designer-list-max',
    templateUrl: 'designer-list-max.html'
})
export class DesignerListMaxComponent {

    @Input("users") public users;

    ionViewDidEnter() {
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