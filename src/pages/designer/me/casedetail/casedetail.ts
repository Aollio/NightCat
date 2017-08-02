

import {Component} from "@angular/core";
import {SharedService} from "../../../../service/share.service";

@Component({
    selector:'page-casedetail',
    templateUrl:'casedetail.html'
})
export class CaseDetailPage{

    mainColor;
    constructor(private shared:SharedService){
        this.mainColor = shared.getPrimaryColor();
    }

}