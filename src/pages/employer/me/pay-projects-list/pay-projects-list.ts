import {Component} from '@angular/core';

declare let initializeFontSize: any

@Component({
   selector: 'page-pay-projects-list',
    templateUrl: 'pay-projects-list.html'
})

export class PayProjectsListPage {

    ionViewDidEnter() { 
        initializeFontSize()
    }
}

