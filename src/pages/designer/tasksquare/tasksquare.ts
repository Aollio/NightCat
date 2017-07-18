import {Component} from "@angular/core";
import {PopoverController} from "ionic-angular"
import {PopoverPage} from "../../popver/popver";

@Component({
    selector: 'page-tasksquare',
    templateUrl: 'tasksquare.html'
})
export class TaskSquarePage {

    showAd: boolean = true;

    constructor(public popoverCtrl: PopoverController) {
    }

    select(a) {
        let popover = this.popoverCtrl.create(PopoverPage,{},{
            cssClass:'select-popover'
        });
        popover.present();
        if (a === 'type') {
            this.selectType()
        } else if (a === 'filter') {
        }
        else if (a === 'sort') {

        }
    }

    selectType() {
    }

    toggleShowAd() {
        if (this.showAd) {
            this.showAd = false;
        } else {
            this.showAd = true;
        }
    }
}