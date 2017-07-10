import {Component} from "@angular/core";
import {PopoverController} from "ionic-angular"
import {PopoverPage} from "../../common/popover/popover";

@Component({
    selector: 'page-tasksquare',
    templateUrl: 'tasksquare.html'
})
export class TaskSquarePage {

    showAd: boolean = true;

    constructor(public popoverCtrl: PopoverController) {
    }

    select(a) {
        if (a === 'type') {
            this.selectType()
        } else if (a === 'filter') {
        }
        else if (a === 'sort') {

        }
    }

    selectType() {
        let popover = this.popoverCtrl.create(PopoverPage, {
            title: 'Type',
            items: [{name: 'One'}, {name: 'Two'}]
        });
        popover.present();
    }

    toggleShowAd() {
        if (this.showAd) {
            this.showAd = false;
        } else {
            this.showAd = true;
        }
    }
}