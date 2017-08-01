import {Component} from "@angular/core";
import {SharedService} from "../../../../../service/share.service";
// import {SharedService} from "../../../service/share.service";
declare let initializeFontSize: any;

@Component({
    selector: "complete",
    templateUrl: 'complete.html'
})
export class PublishTaskPage {


    constructor(public shared: SharedService) {
        // this.maincolor = shared.getPrimaryColor();
        // this.designer = shared.isDesigner;
    }

    ionViewDidEnter() {
        initializeFontSize();
        console.log("com")
    }
}