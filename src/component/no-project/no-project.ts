import {Component} from '@angular/core';
import {SharedService} from "../../service/share.service";
import {NavController} from "ionic-angular";

declare let initializeFontSize: any

@Component({
    selector: 'no-project',
    templateUrl: 'no-project.html'
})

export class NoProjectComponent {

    constructor(private share: SharedService,
                private nav: NavController) {
    }

    openFindOrder() {
        this.nav.parent.select(0);
    }
}

