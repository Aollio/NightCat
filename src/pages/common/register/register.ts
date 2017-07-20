import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SharedService} from "../../../service/share.service";


@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    state:any=0;
    isDesigner: boolean = true;


    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public shared: SharedService) {
        this.isDesigner = navParams.get('isDesigner')
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    openLoginPage() {
        this.navCtrl.push(LoginPage);
    }
    login(){
        this.state=1;
    }


}
