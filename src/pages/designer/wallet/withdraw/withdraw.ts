import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Util} from "../../../../service/util";

@Component({
    selector: 'page-withdraw',
    templateUrl: 'withdraw.html'
})
export class DesignerWithDrawPage {


state:boolean=true;
    constructor(public navCtrl: NavController,
                public uti:Util) {
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