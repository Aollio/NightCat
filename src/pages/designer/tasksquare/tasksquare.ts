import {Component} from "@angular/core";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
    selector: 'page-tasksquare',
    templateUrl: 'tasksquare.html'
})
export class TaskSquarePage {

    showAd: boolean = true;

    constructor() {
    }

    toggleShowAd() {
        if (this.showAd) {
            this.showAd = false;
        } else {
            this.showAd = true;
        }
    }
}