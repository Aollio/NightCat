import {Component} from "@angular/core";
@Component({
    selector: 'page-addhonor',
    templateUrl: 'addhonor.html'

})
export class AddHonorPage{



    showToast:boolean = true;

    closeToast(){
        this.showToast = false;
    }
}
