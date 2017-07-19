import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {EmployerTabsPage} from "../tabs/tabs";
import {Tabs} from "ionic-angular/navigation/nav-interfaces";
import {RecommendDesignerPage} from "../recommenddesigner/recommenddesigner";

@Component({
    templateUrl: 'helpchoose.html',
    selector: 'page-helpchoose'
})
export class HelpChoosePage {


    types: Array<{ name, icon, color }> = [
        {
            name: '建筑设计', icon: 'ios-list-box-outline', color: '#be84ff'
        },
        {
            name: '结构设计', icon: 'ios-list-box-outline', color: '#be84ff'
        },
        {
            name: '软装设计', icon: 'add', color: '#ff9769'
        },
        {
            name: '工艺设计', icon: 'close', color: '#be84ff'
        },

        {
            name: '建筑工程12', icon: 'add', color: '#ff7384'
        },
        {
            name: '建筑工程12', icon: 'ios-calendar-outline', color: '#be84ff'
        },
        {
            name: '建筑工程23', icon: 'ios-briefcase-outline', color: '#89ffc3'
        }, {
            name: '建筑工程23', icon: 'ios-briefcase-outline', color: '#ff6633'
        }
    ]

    state: number = 1;

    position: number = -1;

    authenticate: number = -1;

    constructor(public navCtrl: NavController, private param: NavParams) {
    }


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


}