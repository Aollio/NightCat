import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {SharedService} from "../../../service/share.service";

declare let initializeFontSize: any;

@Component({
    selector: 'page-comment',
    templateUrl: 'comment.html'
})
export class CommentPage {

    maincolor: string

    constructor(public nav: NavController,
                public shared:SharedService) {
        this.maincolor = shared.getPrimaryColor();
    }

    ionViewDidEnter() {
        initializeFontSize()
    }

    //todo 内容刷新
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
}