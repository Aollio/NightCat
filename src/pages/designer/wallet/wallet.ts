import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {ConsumeDetail} from "./consumedetail/consumedetail";
import {DesignerWithDrawPage} from "./withdraw/withdraw";
declare let initializeFontSize: any

@IonicPage({
    name: 'designer-wallet'
})
@Component({
    selector: 'page-wallet',
    templateUrl: 'wallet.html'
})
export class DesignerWalletPage {


    showBalance: boolean = true;

    consumeDetail: any = ConsumeDetail;
    designerWithDrawPage:any = DesignerWithDrawPage;

    constructor(public navCtrl: NavController) {

    }

    ionViewDidEnter() {
        initializeFontSize()
    }

    toggleShowBalance() {
        this.showBalance = !this.showBalance;
    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }
}