import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {Util} from "../../../../service/util";

declare let initializeFontSize: any

@Component({
    selector: 'page-withdraw',
    templateUrl: 'withdraw.html'
})
export class DesignerWithDrawPage {


state:boolean=true;
    constructor(public navCtrl: NavController,
                public uti:Util) {
    }

    ionViewDidEnter() {
        initializeFontSize()
    }


    open(page, option) {
        this.navCtrl.push(page, option)
    }
    alertTip(){

     if(this.state){
         this.uti.toast('请输入真实姓名');
         this.state=false;
     }

    }
}