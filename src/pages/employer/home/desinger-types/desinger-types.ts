import {Component} from '@angular/core';
import {SharedService} from "../../../../service/share.service";
import {NavController} from "ionic-angular";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
import {DesignerListPage} from "../designer/designer-list";


@Component({
    selector: 'page-desinger-types',
    templateUrl: 'desinger-types.html'
})

export class DesingerTypePage {
    miancolor;
    designerListPage: any = DesignerListPage;
    types: Array<{ img, name }> = [
        {
            img: "assets/img/classification-04.png",
            name: "策划"
        },
        {
            img: "assets/img/classification-05.png",
            name: "规划设计"
        },
        {
            img: "assets/img/classification-06.png",
            name: "建筑设计"
        },
        {
            img: "assets/img/classification-08.png",
            name: "结构设计"
        },
        {
            img: "assets/img/classification-10.png",
            name: "给排水"
        },
        {
            img: "assets/img/classification-07.png",
            name: "电气设计"
        },
        {
            img: "assets/img/classification-12.png",
            name: "暖通设计"
        },
        {
            img: "assets/img/classification-13.png",
            name: "景观设计"
        },
        {
            img: "assets/img/classification-11.png",
            name: "室内设计"
        },
        {
            img: "assets/img/classification-09.png",
            name: "软装设计"
        },
        {
            img: "assets/img/classification-02.png",
            name: "项目经理"
        },
        {
            img: "assets/img/classification-01.png",
            name: "概预算"
        },
        {
            img: "assets/img/classification-03.png",
            name: "审图"
        }
    ];
    constructor(public shared: SharedService,
                public navCtrl: NavController) {
        this.miancolor = this.shared.getPrimaryColor();
    }

    open(page) {
        this.navCtrl.push(page, {});
    }
}

