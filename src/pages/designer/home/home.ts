import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {MessagePage} from "../message/message";
import {AdsService} from "../../../service/ajax/ads.service";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class DesignerHomePage {


    images: Array<{ url }> = [
        // {url: 'assets/img/home-default.png'},
        // {url: 'assets/img/home-default.png'},
        // {url: 'assets/img/home-default.png'},
    ]

    types: Array<{ name, val }> = [
        {name: '概预算', val: '0'},
        {name: '项目经理', val: '1'},
        {name: '审图', val: '2'},
        {name: '策划', val: '3'},
        {name: '规划设计', val: '4'},
        {name: '建筑设计', val: '5'},
        {name: '电气设计', val: '6'},
        {name: '结构设计', val: '7'},
        {name: '软装设计', val: '8'},
        {name: '给排水设计', val: '9'},
        {name: '室内设计', val: '10'},
        {name: '暖通设计', val: '11'},
        {name: '景观设计', val: '12'}

    ]

    currentType: number = 3;

    messagePage: any = MessagePage;


    constructor(public navCtrl: NavController,
                public adsServ: AdsService) {
        this.adsServ.getDesHomeSlides().then(slides => {
            for (let x of slides) {
                this.images.push(x)
            }
        }).catch(eroor => {
            console.log('DesignerHomePage load slides error')
        })
    }

    selectType(index) {
        this.currentType = index;
        console.log(this.types[index])
    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }
}
