import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {EmployerHomePage} from "../home/home";
import {EmployerModulePage} from "../employer";
import {DesignerListPage} from "../home/designer/designer-list";

@Component({
    selector: 'page-helpchoose',
    templateUrl: 'helpchoose.html'
})
export class HelpChoosePage {
    employerhome: any = EmployerHomePage;
    type;
    position = 0;
    official = 0;

    state: number = 1;


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
        this.official = authenticate;
    }

    nextOrFinish() {
        this.state++;
        if (this.state > 3) {
            this.state = 3
            this.navCtrl.push(DesignerListPage,{
                type: this.type,
                official:this.official,
                position:this.position
            });
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

    close() {
        this.navCtrl.pop();
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

    setChooseType(index) {
        this.type =index;
    }
}