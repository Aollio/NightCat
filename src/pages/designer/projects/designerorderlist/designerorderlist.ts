import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
declare let initializeFontSize: any
@Component({
    selector: 'com-designerorderlist',
    templateUrl: 'designerorderlist.html'
})
export class DesOrderListComponent {

    orderlist: Array<{}> = [

    ];

    constructor(public nav:NavController) {
    }

    ionViewDidEnter() {
        initializeFontSize()
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