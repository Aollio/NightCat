import {Component} from '@angular/core';

declare let initializeFontSize: any

@Component({
   selector: 'page-designer-project-status',
    templateUrl: 'designer-project-status.html'
})

export class DesignerProjectStatusComponent {

    ionViewDidEnter() { 
        initializeFontSize()
    }
}

