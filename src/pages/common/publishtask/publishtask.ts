import {Component} from "@angular/core";
import {SharedService} from "../../../service/share.service";
declare let initializeFontSize:any
@Component({
    selector: "page-pulishtask",
    templateUrl: 'publishtask.html'
})
export class PublishTaskPage {

    maincolor: string;
    designer: boolean;
   relationship:any;


    public event = {
        relationship:'key',
        timeStarts: '2017-01-01',
        timeEnds: '2017-01-01',
        timeStar:'2017-01-01',
        employer_deadline: '2017-01-01'
    }
    ionViewDidEnter(){
        initializeFontSize()
        console.log("com")
    }
    constructor(public shared: SharedService) {
        this.maincolor = shared.getPrimaryColor();
        this.designer = shared.currentModuleIsDesigner;
    }

}