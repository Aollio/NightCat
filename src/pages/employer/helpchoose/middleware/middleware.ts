import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {HelpChoosePage} from "../helpchoose";
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
    selector:'helpchoose',
    templateUrl: 'middleware.html'
})
export class MiddleWarePage {
    constructor(public nav: NavController) {
        this.nav.parent.select(0);
    }

    first_open: boolean = true;
    second_open: boolean = false;

    ionViewDidEnter() {
        console.log("abc")
        if (this.second_open) {
            this.first_open = false;
            this.nav.parent.select(0);
            this.second_open = false;
        }

        if (this.first_open) {
            this.first_open = false;
            this.nav.parent.select(0);
            this.second_open = true;
            this.nav.push(HelpChoosePage, {});
            console.log("end jump of first")
        }
        if (this.nav.parent.getSelected().index === 1) {
            this.nav.parent.select(0);
            this.nav.push(HelpChoosePage, {});
            console.log("end jump because index == 1")
        }
        this.nav.parent.select(0);
        console.log("end jump")
    }
}