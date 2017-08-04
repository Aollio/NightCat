import {Component} from '@angular/core';

declare let initializeFontSize: any

@Component({
   selector: 'page-designer-list-max',
    templateUrl: 'designer-list-max.html'
})

export class DesignerListMaxPage {

    ionViewDidEnter() { 
        initializeFontSize()
    }
}

