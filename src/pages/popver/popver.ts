import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";

@Component({
    selector: 'com-popver',
    templateUrl: 'popver.html'
})
export class PopoverPage {
    constructor(public viewCtrl: ViewController) {
    }

    close() {
        this.viewCtrl.dismiss();
    }
}