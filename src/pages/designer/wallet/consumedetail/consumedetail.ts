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

    //todo 内容刷新
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
}