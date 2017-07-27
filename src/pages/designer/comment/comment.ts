import {Component} from "@angular/core";

declare let initializeFontSize: any;

@Component({
    selector:'page-comment',
    templateUrl: 'comment.html'
})
export class CommentPage {
    constructor() {
    }

    ionViewDidEnter() {
        initializeFontSize()
    }
}