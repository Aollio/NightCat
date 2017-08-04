import {Component} from '@angular/core';
import {OrderListComponent} from "../../../common/order/orderlist/orderlist";


declare let initializeFontSize: any

@Component({
    selector: 'page-favorite-projects',
    templateUrl: 'favorite-projects.html'
})

export class FavoriteProjectsPage {

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

