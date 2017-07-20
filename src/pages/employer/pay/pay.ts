import {Component} from "@angular/core";

@Component({
    templateUrl: 'pay.html',
    selector: 'page-pay'
})
export class PayPage{


    state: number = 2

    pay: string;

    payment(way) {
        this.pay = way
    }

    comfirm_payment() {
        this.state = 3
    }

    comfirm_paymoney(){
        this.state = 4
    }
}