import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModifyPasswordPage} from "../modifypassword/modifypassword";
import {ModifyPhonePage} from "../modifyphone/modifyphone";
import {SharedService} from "../../../../service/share.service";

@Component({
    selector: 'page-accountsecurity',
    templateUrl: 'accountsecurity.html'
})
export class AccountSecurityPage {


    modifypsd = ModifyPasswordPage;

    modifytel = ModifyPhonePage;

    constructor(public navCtrl: NavController,
                public shared: SharedService) {

    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }


    openHome(){

    }
}
