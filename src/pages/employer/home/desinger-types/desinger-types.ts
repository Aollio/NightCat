import {Component} from '@angular/core';

declare let initializeFontSize: any

@Component({
   selector: 'page-desinger-types',
    templateUrl: 'desinger-types.html'
})

export class DesingerTypePage {

    ionViewDidEnter() { 
        initializeFontSize()
    }
}

