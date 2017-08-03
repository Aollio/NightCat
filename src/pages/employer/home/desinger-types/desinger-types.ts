import {Component} from '@angular/core';
import {SharedService} from "../../../../service/share.service";

declare let initializeFontSize: any

@Component({
   selector: 'page-desinger-types',
    templateUrl: 'desinger-types.html'
})

export class DesingerTypePage {
    miancolor;
    constructor( public shared:SharedService){
      this.miancolor=this.shared.getPrimaryColor();
    }
    ionViewDidEnter() { 
        initializeFontSize()
    }
}

