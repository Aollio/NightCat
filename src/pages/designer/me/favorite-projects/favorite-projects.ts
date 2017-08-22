import {Component} from '@angular/core';

@Component({
    selector: 'page-favorite-projects',
    templateUrl: 'favorite-projects.html'
})

export class FavoriteProjectsPage {

    //todo 内容刷新
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }
}

