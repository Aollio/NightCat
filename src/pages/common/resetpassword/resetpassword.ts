import {Component} from '@angular/core';
import {NavController} from "ionic-angular";
import {SharedService} from "../../../service/share.service";

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
// todo 密码加密
}
