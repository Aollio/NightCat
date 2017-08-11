import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {EmployerTabsPage} from "../tabs/tabs";
import {Tabs} from "ionic-angular/navigation/nav-interfaces";
import {RecommendDesignerPage} from "../recommenddesigner/recommenddesigner";
import {EmployerHomePage} from "../home/home";
import {EmployerModulePage} from "../employer";

@Component({
    templateUrl: 'helpchoose.html',
    selector: 'page-helpchoose'
})
export class HelpChoosePage {
    employerhome: any = EmployerHomePage;


    state: number = 1;

    position: number = -1;

    authenticate: number = -1;
    chooseType: any;

    constructor(public navCtrl: NavController, private param: NavParams) {
    }


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

    selectPosition(position) {
        this.position = position;
    }

    selectAuthenticate(authenticate) {
        this.authenticate = authenticate;
    }

    nextOrFinish() {
        this.state++;
        if (this.state > 3) {
            this.navCtrl.push(RecommendDesignerPage);
        }
    }

    goback() {
        if (this.state == 1) {
            this.navCtrl.pop();
        }
        if (this.state > 1) {
            this.state--;
        }
    }

    open(page) {
        this.navCtrl.push(page);
    }

    gotoRoot() {
        this.navCtrl.goToRoot({});
    }

    openEmployer() {
        //this.keynote.isDesigner = false;
        this.navCtrl.push(EmployerModulePage, {})
    }

    setChooseType(name) {
        this.chooseType = name;
    }
}