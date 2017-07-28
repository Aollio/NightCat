

import {Component} from "@angular/core";

declare let initializeFontSize: any


@Component({
    templateUrl:'chatmessage.html'
})
export class ChatMessagePage{
    constructor(){}

    ionViewDidEnter() {
        initializeFontSize()
    }
}