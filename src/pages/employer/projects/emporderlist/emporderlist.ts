import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {PublishTaskMiddleWarePage} from "../../publish-task-middleware/publish-task-middleware";

@Component({
    selector: 'com-emporderlist',
    templateUrl: 'emporderlist.html'
})
export class EmpOrderListComponent {

    orderlist: Array<{}> = [];

    constructor(public nav:NavController) {
    }


    isEmpty() {
        return this.orderlist.length === 0
    }

    openFindDesigner(){
        this.nav.parent.select(0)
    }

    openPulishTask(){
        this.nav.parent.select(2)
    }
}