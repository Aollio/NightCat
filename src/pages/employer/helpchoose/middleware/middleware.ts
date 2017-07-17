import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {HelpChoosePage} from "../helpchoose";

@Component({
    templateUrl: 'middleware.html'
})
export class MiddleWare {
    constructor(public nav: NavController) {
    }

    ionViewDidEnter() {
        // this.nav.getPrevious().
        this.nav.parent.select(0)
        this.nav.push(HelpChoosePage, {
            tab: this.nav.parent
        });

    }
}