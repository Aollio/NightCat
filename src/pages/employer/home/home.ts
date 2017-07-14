import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'page-employer-home',
    templateUrl: 'home.html'
})
export class EmployerHomePage {


    images: Array<{ url }> = [
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
    ]

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

    desarray:Array<{avatar,name,time,describe}> = [
        {
            avatar: 'assets/img/des-1.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-2.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-3.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-4.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-1.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-2.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-3.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-4.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        }];

    desmatrix: Array<Array<{ avatar, name, time, describe }>> = [
        [
            {
                avatar: 'assets/img/first.png', name: '张三', time: '100/时',
                describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
            },
            {
                avatar: 'assets/img/first.png', name: '张三', time: '100/时',
                describe: '帮助你是希望你成长、成功以后和我一样帮助他人'
            }
        ],
        [
            {
                avatar: 'assets/img/first.png', name: '张三', time: '100/时',
                describe: '帮助你是希望你成长、成功以后和我一样帮助他人'
            },
            {
                avatar: 'assets/img/first.png', name: '张三', time: '100/时',
                describe: '帮助你是希望你成长、成功以后和我一样帮助他人'
            }
        ],
        [
            {
                avatar: 'assets/img/first.png', name: '张三', time: '100/时',
                describe: '帮助你是希望你成长、成功以后和我一样帮助他人'
            },
            {
                avatar: 'assets/img/first.png', name: '张三', time: '100/时',
                describe: '帮助你是希望你成长、成功以后和我一样帮助他人'
            }
        ]
    ]

    constructor(public navCtrl: NavController) {
    }


    open(page, option) {
        this.navCtrl.push(page, option)
    }
}
