/**
 * Created by Aollio on 7/7/17.
 */
import {NavController} from "ionic-angular";
import {Component} from "@angular/core";

@Component({
    selector: 'page-authenication',
    templateUrl: 'authentication.html'
})
export class AuthenticationPage {


    state: number = 1;

    constructor(public navCtrl: NavController) {
    }

    nextOrFinish() {
        this.state++;
        if (this.state > 3) {
            this.navCtrl.pop();
        }
    }

}