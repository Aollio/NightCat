import {Component} from "@angular/core";
import {NavParams} from "ionic-angular";
import {ProjectsService} from "../../../service/ajax/projects.service";

declare let initializeFontSize: any

@Component({
    selector: 'page-choosedesigner',
    templateUrl: 'choosedesigner.html'
})


export class ChooseDesignerPage {


    private projectId;

    private designers = [];

    constructor(private navParams: NavParams,
                private projectServ: ProjectsService) {
        this.projectId = navParams.get("projectId");
        this.getGrabDesigners();
    }

    ionViewDidEnter() {

    }

    getGrabDesigners() {
        //todo getGrabDesigners
        this.projectServ.grabberList(this.projectId)
            .then(designers => {
                for (let designer of designers) {
                    this.designers.push(designer);
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

}