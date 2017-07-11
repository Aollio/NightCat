import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ModifyPasswordPage} from "../modifypassword/modifypassword";
import {ModifyPhonePage} from "../modifyphone/modifyphone";

@Component({
    selector: 'page-accountsecurity',
    templateUrl: 'accountsecurity.html'
})
export class AccountSecurityPage {


    modifypsd = ModifyPasswordPage;

    modifytel = ModifyPhonePage;

    constructor(public navCtrl: NavController) {

    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }


    openHome(){

        // this.navCtrl.pop();
        // this.navCtrl.getPrevious().
    }
}
