import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-employer-home',
    templateUrl: 'home.html'
})
export class EmployerHomePage {

    typegroup: Array<Array<{ name, imageurl }>> = [
        [
            {
                name: '建筑工程1', imageurl: '/assets/img/first.png'
            },
            {
                name: '建筑工程2', imageurl: '/assets/img/first.png'
            },
            {
                name: '建筑工程3', imageurl: '/assets/img/first.png'
            },
            {
                name: '建筑工程4', imageurl: '/assets/img/first.png'
            },
        ],
        [
            {
                name: '建筑工程12', imageurl: '/assets/img/first.png'
            },
            {
                name: '建筑工程12', imageurl: '/assets/img/first.png'
            },
            {
                name: '建筑工程23', imageurl: '/assets/img/first.png'
            },
            {
                name: '建筑工程12', imageurl: '/assets/img/first.png'
            },
        ],
        [
            {
                name: '建筑工程1', imageurl: '/assets/img/first.png'
            },
            {
                name: '建筑工程12', imageurl: '/assets/img/first.png'
            },
            {
                name: '建筑工程12', imageurl: '/assets/img/first.png'
            },
            {
                name: '建筑工程43', imageurl: '/assets/img/first.png'
            },
        ],
    ]

    constructor(public navCtrl: NavController) {
    }


    open(page, option) {
        this.navCtrl.push(page, option)
    }
}
