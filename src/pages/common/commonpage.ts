import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {ResetPasswordPage} from "./resetpassword/resetpassword";
import {SharedService} from "../../service/share.service";

@IonicPage({})
@Component({
    templateUrl: 'commonpage.html'
})
export class CommonModulePage {

    rootPage: any = ResetPasswordPage;

    constructor(public shared: SharedService) {
    }
}
