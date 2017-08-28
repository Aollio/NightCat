import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DesignerMeDetailPage} from "../../../designer/me/medetail/medetail";
import {UsersService} from "../../../../service/ajax/users.service";
import {SharedService} from "../../../../service/share.service";
@Component({
    templateUrl: 'favorite-designer.html',
    selector: 'page-favorite-designer'
})
export class EmpFavoriteDesignerPage {

    users = [];

    // favorite-designer
    constructor(private navCtrl: NavController, private usersServ: UsersService,private share:SharedService) {
        this.usersServ.following_list().then(users => {
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
    //todo 内容刷新
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
}