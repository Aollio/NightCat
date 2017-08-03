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
}

