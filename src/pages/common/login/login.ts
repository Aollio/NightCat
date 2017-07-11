import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {ResetPasswordPage} from "../resetpassword/resetpassword";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    //isDesigner
    isDesigner: boolean = true;

    navbgcolor:string = 'primary';
    navtxcolor:string = 'primary';

    resetPasswordPage: ResetPasswordPage;


    constructor(public navCtrl: NavController, public navParams: NavParams) {

        if (navParams.get('type') === 'employer') {
            this.isDesigner = false
        }
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


//todo
    login(param) {
        if (param === "login") {
        }
        if (param === "newuser") {
        }
    }
}
