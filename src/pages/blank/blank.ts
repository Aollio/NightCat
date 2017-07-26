import {Component} from "@angular/core";


declare let initializeFontSize: any

@Component({
    selector: 'page-blank',
    templateUrl: 'blank.html'
})
export class BlankPage {

    constructor() {
    }

    images: Array<{ url }> = [
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
    ]

    ionViewDidEnter() {
        initializeFontSize()
    }
}