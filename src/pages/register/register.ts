import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";


@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    isDesigner: boolean = true;


    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.isDesigner = navParams.get('isDesigner')
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    openLoginPage(){
        this.navCtrl.push(LoginPage);
    }

}
