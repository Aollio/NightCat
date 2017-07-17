import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {EmployerTabsPage} from "../tabs/tabs";
import {Tabs} from "ionic-angular/navigation/nav-interfaces";

@Component({
    templateUrl: 'helpchoose.html',
    selector: 'page-helpchoose'
})
export class HelpChoosePage {


    constructor(public navCtrl: NavController, private param: NavParams) {
    }

    state: number = 1;

    nextOrFinish() {
        this.state++;
        if (this.state > 3) {
            this.navCtrl.pop();
        }
    }


    types: Array<{ name, icon }> = [
        {
            name: '建筑工程1', icon: 'ios-list-box-outline'
        },
        {
            name: '建筑工程2', icon: 'ios-list-box-outline'
        },
        {
            name: '建筑工程3', icon: 'add'
        },
        {
            name: '建筑工程4', icon: 'close'
        },
        {
            name: '建筑工程12', icon: 'add'
        },
        {
            name: '建筑工程12', icon: 'ios-calendar-outline'
        },
        {
            name: '建筑工程23', icon: 'ios-briefcase-outline'
        }

    ]


}