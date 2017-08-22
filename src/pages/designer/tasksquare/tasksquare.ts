import {Component} from "@angular/core";
import {AlertController, PopoverController} from "ionic-angular"
declare let console;

@Component({
    selector: 'page-tasksquare',
    templateUrl: 'tasksquare.html'
})
export class TaskSquarePage {


    showAd: boolean = true;

    constructor(public alert: AlertController, public popoverCtrl: PopoverController) {
    }

    selectType() {
        let alert = this.alert.create({
            inputs: [
                {label: '建筑设计', type: 'radio', value: '',},
                {label: '结构设计', type: 'radio', value: ''},
                {label: '软装设计', type: 'radio', value: ''},
                {label: '工艺设计', type: 'radio', value: ''},
                {label: '电气设计', type: 'radio', value: ''},
                {label: '暖通', type: 'radio', value: ''},
                {label: '概算', type: 'radio', value: ''},
                {label: '电气设计', type: 'radio', value: ''},
                {label: '规划', type: 'radio', value: ''},
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: data => {
                    }
                }
            ]
        });
        alert.present();
    }

    selectFilter() {
        let alert = this.alert.create({
            inputs: [
                {label: '类型', type: 'radio', value: ''},
                {label: '难易度', type: 'radio', value: ''},
                {label: '热度', type: 'radio', value: ''},
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: data => {
                    }
                }
            ]
        });
        alert.present();
    }

    selectSort() {

        let alert = this.alert.create({
            inputs: [
                {label: '价格从低到高', type: 'radio', value: ''},
                {label: '价格从高到低', type: 'radio', value: ''},
            ],
            buttons: [
                {
                    text: '取消',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: '确定',
                    handler: data => {
                    }
                }
            ]
        });
        alert.present();
    }

    toggleShowAd() {
        if (this.showAd) {
            this.showAd = false;
        } else {
            this.showAd = true;
        }
    }
}