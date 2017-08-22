import {Component} from "@angular/core";

@Component({
    selector: 'page-consumedetail',
    templateUrl: 'consumedetail.html'
})
export class ConsumeDetail {
    constructor() {

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