import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SharedService} from "../../../../service/share.service";

declare let initializeFontSize: any

@Component({
    selector: 'page-modifypassword',
    templateUrl: 'modifypassword.html'
})
export class ModifyPasswordPage {
    maincolor;

    designer;
    constructor(public navCtrl: NavController,
                public shared: SharedService) {
        this.maincolor = this.shared.getPrimaryColor();
        this.designer = this.shared.currentModuleIsDesigner;
    }

    ionViewDidEnter() {
        initializeFontSize()
        console.log("com")
    }


}
