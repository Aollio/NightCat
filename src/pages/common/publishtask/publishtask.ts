import {Component} from "@angular/core";
import {SharedService} from "../../../service/share.service";

@Component({
    selector: "page-pulishtask",
    templateUrl: 'publishtask.html'
})
export class PublishTaskPage {

    maincolor: string;
    designer: boolean;

    public event = {
        timeStarts: '2017-01-01',
        timeEnds: '2017-01-01',
        employer_deadline: '2017-01-01'
    }

    constructor(public shared: SharedService) {
        this.maincolor = shared.getPrimaryColor();
        this.designer = shared.isDesigner;
    }

}