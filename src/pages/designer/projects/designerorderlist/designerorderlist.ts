import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
@Component({
    selector: 'com-designerorderlist',
    templateUrl: 'designerorderlist.html'
})
export class DesOrderListComponent {

    orderlist: Array<{}> = [

    ];

    constructor(public nav:NavController) {
    }

    isEmpty() {
        return this.orderlist.length === 0
    }

    openFindOrder(){
        this.nav.parent.select(0)
    }

    // openPulishTask(){
    //     this.nav.parent.select(2)
    // }
}