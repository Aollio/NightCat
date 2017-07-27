import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SharedService} from "../../../../service/share.service";
declare let initializeFontSize: any
@Component({
    selector: 'page-modifypassword',
    templateUrl: 'modifypassword.html'
})
export class ModifyPasswordPage {

    constructor(public navCtrl: NavController,
                public shared: SharedService) {

    }

    ionViewDidEnter() {
        initializeFontSize()
        console.log("com")
    }


}
