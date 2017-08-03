import {Component} from '@angular/core';

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

