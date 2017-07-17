import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {DesignerMeDetailPage} from "../../designer/me/medetail/medetail";

@Component({
    selector: 'page-employer-home',
    templateUrl: 'home.html'
})
export class EmployerHomePage {

    designerMeDetailPage: DesignerMeDetailPage;

    images: Array<{ url }> = [
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
    ]

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

    openMeDetail() {
        this.navCtrl.push(DesignerMeDetailPage,{})
    }
}
