import {Component} from '@angular/core';

@Component({
    templateUrl:'helpchoose.html',
    selector:'page-helpchoose'
})
export class HelpChoosePage{
constructor(){}
state=1;
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
            },
            {
                name: '建筑工程12', imageurl: 'assets/img/first.png'
            },
        ],
        [
            {
                name: '建筑工程1', imageurl: 'assets/img/first.png'
            },
            {
                name: '建筑工程12', imageurl: 'assets/img/first.png'
            },
            {
                name: '建筑工程12', imageurl: 'assets/img/first.png'
            },
            {
                name: '建筑工程43', imageurl: 'assets/img/first.png'
            },
        ],
    ]
}