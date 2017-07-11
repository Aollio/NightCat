import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {ResetPasswordPage} from "../resetpassword/resetpassword";
import {User} from "../../../model/user";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    isDesigner: boolean = true;


    user: User = new User();
    //the view that jump
    resetPasswordPage: ResetPasswordPage;


    constructor(public navCtrl: NavController, public navParams: NavParams) {

        if (navParams.get('role') === 'employer') {
            this.isDesigner = false
        }
    }

    login() {
        console.log(this.user)
        // if (this.user)
    }


    openRegisterPage() {
        this.navCtrl.push(RegisterPage, {
            isDesigner: this.isDesigner
        })
    }

    openReset() {
        console.log('click')
        this.navCtrl.push(ResetPasswordPage, {})
    }

    open(page, option) {
        this.navCtrl.push(page, option);
    }


}
