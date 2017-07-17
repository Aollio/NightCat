import {Component} from '@angular/core';
import {el} from "@angular/platform-browser/testing/src/browser_util";

@Component({
    selector: 'page-employer-projects',
    templateUrl: 'projects.html'
})
export class ProjectsPage {

    type: any = 1;

    constructor() {
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
}
