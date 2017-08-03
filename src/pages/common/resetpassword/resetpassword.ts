import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {SharedService} from "../../../service/share.service";

declare let initializeFontSize: any;

@Component({
    selector: 'page-resetpassword',
    templateUrl: 'resetpassword.html'
})
export class ResetPasswordPage {

    maincolor;

    constructor(public navCtrl: NavController,
                public shared: SharedService) {
        this.maincolor = this.shared.getPrimaryColor();

    }

    ionViewDidEnter() {
        initializeFontSize()
        console.log("com")
    }

}
