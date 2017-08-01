import {Component} from "@angular/core";
import {SharedService} from "../../../../../service/share.service";
// import {SharedService} from "../../../service/share.service";
declare let initializeFontSize:any;
@Component({
    selector: "waitcomment",
    templateUrl: 'waitcomment.html'
})
export class Waitcomment{

    ionViewDidEnter(){
        initializeFontSize();
        console.log("com")
    }

    user;
    constructor(public shared: SharedService) {
        this.user = shared.getCurrentUser();
    }
}