import {Component} from "@angular/core";
import {SharedService} from "../../../../../service/share.service";
import {NavController} from "ionic-angular";

// import {SharedService} from "../../../service/share.service";

@Component({
    selector: "complete",
    templateUrl: 'complete.html'
})
export class OrerProcessCompleted {

    user;
    orderId;

    isdesigner;

    constructor(public shared: SharedService,
                private nav: NavController) {
        this.user = this.shared.getCurrentUser();
        this.isdesigner = this.user.role == 0
    }

    ionViewDidEnter() {
    }

}