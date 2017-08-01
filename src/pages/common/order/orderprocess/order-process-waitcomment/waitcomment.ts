import {Component} from "@angular/core";
import {SharedService} from "../../../../../service/share.service";
// import {SharedService} from "../../../service/share.service";
declare let initializeFontSize:any
@Component({
    selector: "waitcomment",
    templateUrl: 'waitcomment.html'
})
export class PublishTaskPage {

    ionViewDidEnter(){
        initializeFontSize()
        console.log("com")
    }
    constructor(public shared: SharedService) {
    }

}