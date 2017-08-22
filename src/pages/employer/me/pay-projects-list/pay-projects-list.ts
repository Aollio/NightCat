import {Component} from '@angular/core';
import {SharedService} from "../../../../service/share.service";

@Component({
   selector: 'page-pay-projects-list',
    templateUrl: 'pay-projects-list.html'
})

export class PayProjectsListPage {
    miancolor;
    constructor(public shared:SharedService){
        this.miancolor=this.shared.getPrimaryColor();
    }

    // todo 内容刷新
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
}

