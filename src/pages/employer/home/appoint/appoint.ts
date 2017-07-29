import {Component} from "@angular/core";

declare let initializeFontSize: any

@Component({
    selector: 'page-appoint',
    templateUrl: 'appoint.html'
})
export class AppointPage {


    ionViewDidEnter() {
        initializeFontSize()
    }
}