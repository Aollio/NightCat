import {Component} from '@angular/core';

declare let initializeFontSize: any

@Component({
   selector: 'page-orderlist-after-selectdes',
    templateUrl: 'orderlist-after-selectdes.html'
})

export class OrderListAfterSelectDesignerPage {

    ionViewDidEnter() { 
        initializeFontSize()
    }
}

