import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AbsCommonPage} from "../abs";
import {SharedService} from "../../../service/share.service";

@Component({
    selector: 'page-support',
    templateUrl: 'support.html'
})
export class SupportPage extends AbsCommonPage {

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public share: SharedService) {
        super(share);
    }


}
