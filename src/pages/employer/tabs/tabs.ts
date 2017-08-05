import {Component} from '@angular/core';

import {NavController, Platform} from "ionic-angular";
import {EmployerHomePage} from "../home/home";
import {EmployerMePage} from "../me/me";
import {ProjectsPage} from "../projects/projects";
import {PublishTaskMiddleWarePage} from "../publish-task-middleware/publish-task-middleware";
import {NotificationsPage} from "../../designer/nofitications/notifications";
declare let initializeFontSize:any
@Component({
    selector: 'page-employer-tabs',
    templateUrl: 'tabs.html'
})
export class EmployerTabsPage {
    ionViewDidEnter(){
        initializeFontSize()
    }
    home: any = EmployerHomePage;
    project: any = ProjectsPage;
    me: any = EmployerMePage;
    im = NotificationsPage;


    publishtask: any = PublishTaskMiddleWarePage;


    constructor(public navCtrl: NavController, public platform: Platform,
    ) {
        this.navCtrl.swipeBackEnabled = false
    }


}
