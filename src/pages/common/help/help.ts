import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Util} from "../../../service/util";
import {Manager} from "../../../service/manager";
import {SharedService} from "../../../service/share.service";

@Component({
    selector: 'help',
    templateUrl: 'help.html'
})

export class HelpPage {

    main_color: any;

    constructor(private util: Util,
                private manager: Manager,
                private nav: NavController,
                private navParam: NavParams,
                private shared:SharedService) {
        this.main_color = this.manager.sharedServ.getPrimaryColor();
    }

    open(page, option, navparam) {
        this.nav.push(page, option, navparam)
    }

    openHelpPage() {
        this.nav.push(HelpPage)
    }

}

