import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {MyFlowerPage} from "./myflower/myflower";
@Component({
    selector: 'page-me-employer',
    templateUrl: 'me.html'
})
export class EmployerMePage {
    myflower: MyFlowerPage;
    constructor(public  navCtrl: NavController) {
    }

    open(page, option) {
        this.navCtrl.push(MyFlowerPage, {})
    }

}
