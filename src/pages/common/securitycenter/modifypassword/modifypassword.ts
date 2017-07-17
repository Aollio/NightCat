import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SharedService} from "../../../../service/share.service";

@Component({
    selector: 'page-modifypassword',
    templateUrl: 'modifypassword.html'
})
export class ModifyPasswordPage {

    constructor(public navCtrl: NavController,
                public shared: SharedService) {

    }

}
