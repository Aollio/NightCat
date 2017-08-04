import {Component, ViewChild} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";
declare let initializeFontSize: any

@Component({
    selector: 'page-designer-projects',
    templateUrl: 'projects.html'
})

export class DesignerProjectsPage {

    type: any = 1;

    constructor() {
    }
    ionViewDidEnter() {
        initializeFontSize()
    }

    select(type) {
        if (type === 'wait_design') {
            this.type = 1
        } else if (type === 'wait_outcome') {
            this.type = 2
        } else if (type === 'wait_comment') {
            this.type = 3
        } else if (type === 'all') {
            this.type = 4
        }
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
