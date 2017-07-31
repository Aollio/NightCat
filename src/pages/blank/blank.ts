import {Component, ViewChild} from "@angular/core";
import set = Reflect.set;
// import {console} from "../designer/tasksquare/tasksquare";


declare let initializeFontSize: any
declare let jQuery:any

@Component({
    selector: 'page-blank',
    templateUrl: 'blank.html'
})
export class BlankPage {


    constructor() {
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

}