import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {RegisterPage} from "../register/register";

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
    isDesigner: boolean = true


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

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

}
