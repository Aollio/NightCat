import {Component} from '@angular/core';
import {SharedService} from "../../../../service/share.service";
import {NavController} from "ionic-angular";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
import {DesignerListPage} from "../designer/designer-list";

declare let initializeFontSize: any

@Component({
    selector: 'page-desinger-types',
    templateUrl: 'desinger-types.html'
})

export class DesingerTypePage {
    miancolor;
    designerListPage: any = DesignerListPage;

    constructor(public shared: SharedService,
                public navCtrl: NavController) {
        this.miancolor = this.shared.getPrimaryColor();
    }

    ionViewDidEnter() {
        initializeFontSize()
    }

    open(page) {
        this.navCtrl.push(page, {});
    }
}

