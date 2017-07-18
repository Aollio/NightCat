import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {EmpFavoriteDesignerPage} from "./favorite-designer/favorite-designer";
@Component({
    selector: 'page-me-employer',
    templateUrl: 'me.html'
})
export class EmployerMePage {
    myflower: EmpFavoriteDesignerPage;
    constructor(public  navCtrl: NavController) {
    }

    open(page, option) {
        this.navCtrl.push(EmpFavoriteDesignerPage, {})
    }

}
