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

    maincolor;

    designer;

    constructor(public navCtrl: NavController,
                public shared: SharedService) {
        this.maincolor = this.shared.getPrimaryColor();
        this.designer = this.shared.isDesModule();

    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }


    openHome() {

    }
}
