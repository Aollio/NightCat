import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {AddCasePage} from "../addcase/addcase";
import {AddHonorPage} from "../addhonor/addhonor";
@Component({
    selector: 'page-modifyprofile',
    templateUrl: 'modifyprofile.html'

})
export class ModifyProfilePage{
    description  = "";
    addcase=AddCasePage;
    addhonor=AddHonorPage;
    constructor(public navCtrl: NavController) {

    }
    open(page, option) {
        this.navCtrl.push(page, option)
    }

    desclassarray: Array<{val,name}> =[

        {'name': '概预算', 'val': '0'},
        {'name': '项目经理', 'val': '1'},
            {'name': '审图', 'val': '2'},
            {'name': '策划', 'val': '3'},
            {'name': '规划设计', 'val': '4'},
            {'name': '建筑设计', 'val': '5'},
            {'name': '电气设计', 'val': '6'},
            {'name': '结构设计', 'val': '7'},
            {'name': '软装设计', 'val': '8'},
            {'name': '给排水设计', 'val': '9'},
            {'name': '室内设计', 'val': '10'},
            {'name': '暖通设计', 'val': '11'},
            {'name': '景观设计', 'val': '12'}
    ];

    savemess(){

    }
}