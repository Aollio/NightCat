import {Component} from "@angular/core";
import {SharedService} from "../../../../../service/share.service";
import {NavController} from "ionic-angular";
// import {SharedService} from "../../../service/share.service";
declare let initializeFontSize: any;

@Component({
    selector: "complete",
    templateUrl: 'complete.html'
})
export class OrerProcessCompleted{

    user;
    orderId;

    constructor(public shared: SharedService,
    private nav:NavController) {
        this.user = this.shared.getCurrentUser();
    }

    ionViewDidEnter() {
        initializeFontSize();
        console.log("com")
    }

}