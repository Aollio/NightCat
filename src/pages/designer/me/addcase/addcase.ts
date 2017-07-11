import {Component} from "@angular/core";

@Component({
    selector: 'page-addcase',
    templateUrl: 'addcase.html'

})
export class AddCasePage {
    ppl = 70;
    maxl = 200;
    a00 ;
    b:any = 'h';

    one() {
        var txttxt = this.a00.length;
        console.log(this.a00.length);
        this.b = 200 - txttxt;
    }

    cha(){
        console.log(this.a00)
    }


}
