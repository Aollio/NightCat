import {Component} from '@angular/core';

declare let initializeFontSize: any

@Component({
   selector: 'page-desinger-list',
    templateUrl: 'desinger-list.html'
})

export class DesingerListComponent {

    ionViewDidEnter() { 
        initializeFontSize()
    }
}

