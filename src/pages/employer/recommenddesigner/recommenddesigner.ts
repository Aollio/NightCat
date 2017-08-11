import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DesignerMeDetailPage} from "../../designer/me/medetail/medetail";
import {ChooseDesignerPage} from "../choosedesigner/choosedesigner";
import {HelpChoosePage} from "../helpchoose/helpchoose";
import {UsersService} from "../../../service/ajax/users.service";
import {KeynoteService} from "../../../service/keynote.service";


@Component({
    selector: 'page-recommenddesigner',
    templateUrl: 'recommenddesigner.html'
})
export class RecommendDesignerPage {
    designerMeDetailPage: any = DesignerMeDetailPage;
    helpchoosePage: any = HelpChoosePage;

    designers = [];

    constructor(public navctrl: NavController,
                private userServ: UsersService) {
        this.userServ.getDesigners()
            .then(users => {
                for (let user of users) {
                    this.designers.push(user);
                }
            }).catch(error => {
            console.log(error);
        });
    }


    selected_index = -1;
    selected: any = null;

    selectDesigner(designer, index) {
        this.selected_index = index;
        this.selected = designer;
    }

    open(page, {}) {
        this.navctrl.goToRoot({animate: true})
    }

    goToRoot() {
        this.navctrl.goToRoot({animate: true})
    }

    // //todo 内容刷新
    // doRefresh(refresher) {
    //     console.log('Begin async operation', refresher);
    //
    //     setTimeout(() => {
    //         console.log('Async operation has ended');
    //         refresher.complete();
    //     }, 2000);
    // }

}
