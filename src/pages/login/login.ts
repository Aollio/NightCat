import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {ResetPasswordPage} from "../common/accountsecurity/resetpassword/resetpassword";

/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    //isDesigner
    isDesigner: boolean = true;

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

    open(page, option) {
        this.navCtrl.push(page, option);
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

//todo
    login(param) {
        if (param === "login") {
        }
        if (param === "newuser") {
        }
    }
}
