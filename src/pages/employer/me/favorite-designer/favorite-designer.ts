import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
import {UsersService} from "../../../../service/ajax/users.service";

@Component({
    templateUrl: 'favorite-designer.html',
    selector: 'page-favorite-designer'
})
export class EmpFavoriteDesignerPage {

    users = [];

    // favorite-designer
    constructor(private navCtrl: NavController, private usersServ: UsersService) {
        this.usersServ.getUsersByRole(true).then(users => {
            for (let user of users) {
                this.users.push(user)
            }
        });
    }

    openDesigner(user) {
        this.navCtrl.push(DesignerMeDetailPage, {
            user: user,
            isDesigner: false
        });
    }
}