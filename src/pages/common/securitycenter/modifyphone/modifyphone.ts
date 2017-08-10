import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SharedService} from "../../../../service/share.service";

declare let initializeFontSize: any

@Component({
    selector: 'page-modifyphone',
    templateUrl: 'modifyphone.html'
})
export class ModifyPhonePage {

    constructor(public navCtrl: NavController,
                public shared: SharedService) {

    }

    ionViewDidEnter() {
    }

}
