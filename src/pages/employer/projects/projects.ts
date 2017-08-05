import {Component, ViewChild} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {EmpOrderListComponent} from "./emporderlist/emporderlist";
declare let initializeFontSize: any

@Component({
    selector: 'page-employer-projects',
    templateUrl: 'projects.html'
})
export class ProjectsPage {

    type: any = 1;
    @ViewChild("orderlist") orderList;

    constructor() {
    }
    ionViewDidEnter() {
        initializeFontSize()
    }

    select(type) {
        if (type === 'wait_design') {
            this.type = 0
        } else if (type === 'wait_outcome') {
            this.type = 1
        } else if (type === 'wait_comment') {
            this.type = 2
        } else if (type === 'all') {
            this.type = 3
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
