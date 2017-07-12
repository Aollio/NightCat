import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MessagePage} from "../message/message";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class DesignerHomePage {


    images:Array<{url}> = [
        {url:'/assets/img/home-default.png'},
        {url:'/assets/img/home-default.png'},
        {url:'/assets/img/home-default.png'},
    ]

    types: Array<{ name, value }> = [
        {name: '精选1', value: 'null'},
        {name: '精选2', value: 'null'},
        {name: '精选3', value: 'null'},
        {name: '精选4', value: 'null'},
        {name: '精选5', value: 'null'},
        {name: '精选6', value: 'null'},
        {name: '精选7', value: 'null'},
        {name: '精选8', value: 'null'},
        {name: '精选9', value: 'null'},
        {name: '精选10', value: 'null'},
        {name: '精选11', value: 'null'},
    ]

    currentType: number = 3;

    messagePage: any = MessagePage;


    constructor(public navCtrl: NavController) {
    }

    selectType(index) {
        this.currentType = index;
        console.log(this.types[index])
    }

    open(page,option){
        this.navCtrl.push(page,option)
    }
}
