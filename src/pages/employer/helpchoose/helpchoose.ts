import {Component} from '@angular/core';
import {NavController} from "ionic-angular";

@Component({
    templateUrl:'helpchoose.html',
    selector:'page-helpchoose'
})
export class HelpChoosePage{
constructor(public navCtrl: NavController){}
    state: number = 1;
    nextOrFinish() {
        this.state++;
        if (this.state > 3) {
         //   this.navCtrl.pop();
        }
    }


    typegroup: Array<Array<{ name, imageurl }>> = [
        [
            {
                name: '建筑工程1', imageurl: 'assets/img/first.png'
            },
            {
                name: '建筑工程2', imageurl: 'assets/img/first.png'
            },
            {
                name: '建筑工程3', imageurl: 'assets/img/first.png'
            },
            {
                name: '建筑工程4', imageurl: 'assets/img/first.png'
            },
        ],
        [
            {
                name: '建筑工程12', imageurl: 'assets/img/first.png'
            },
            {
                name: '建筑工程12', imageurl: 'assets/img/first.png'
            },
            {
                name: '建筑工程23', imageurl: 'assets/img/first.png'
            }
        ]
    ]
}