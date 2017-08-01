import {Component, ViewChild} from "@angular/core";
import set = Reflect.set;
// import {console} from "../designer/tasksquare/tasksquare";
import {Util} from "../../service/util"


declare let initializeFontSize: any
declare let jQuery:any

@Component({
    selector: 'page-blank',
    templateUrl: 'blank.html'
})
export class BlankPage {

    file:any;

    constructor(public util:Util) {
    }

    images: Array<{ url }> = [
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
    ]

    ionViewDidEnter() {
        initializeFontSize()
    }
    show(){
        let pop_bg =  jQuery("<div id='pop_bg'>" +
            "<div class='pop'></div>" +
            "</div>");
        jQuery("body").append(pop_bg);
        pop_bg.fadeIn(500)
            .children().css("top","0");

        pop_bg.click(function () {
            jQuery(this).fadeOut(500)
                .children().css("top","-100%");
            setTimeout(()=>jQuery(this).remove(),500);
        });
    }

    showFile(){
        this.util.toast(this.file,2000)
    }



    caseArray:Array<{caseImg,caseDesc,caseMoney,caseFav,caseTime}> =[
        {caseImg:'/assets/img/des-1.png',
            caseDesc:'园区导视，布点规划，文化导入，精神堡垒，展厅，室内软装设计等许多内容、不一一展示',
            caseMoney:'500',
            caseFav:'8',
            caseTime:'6天1小时'},
        {caseImg:'/assets/img/des-1.png',
            caseDesc:'园区导视，布点规划，文化导入，精神堡垒，展厅，室内软装设计等许多内容、不一一展示',
            caseMoney:'500',
            caseFav:'8',
            caseTime:'6天1小时'},
        {caseImg:'/assets/img/des-1.png',
            caseDesc:'园区导视，布点规划，文化导入，精神堡垒，展厅，室内软装设计等许多内容、不一一展示',
            caseMoney:'500',
            caseFav:'8',
            caseTime:'6天1小时'},
    ]
}