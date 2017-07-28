import {Component} from "@angular/core";
declare let initializeFontSize: any

@Component({
    selector: 'page-consumedetail',
    templateUrl: 'consumedetail.html'
})
export class ConsumeDetail {
    constructor() {

    }
    ionViewDidEnter() {
        initializeFontSize()
    }
}