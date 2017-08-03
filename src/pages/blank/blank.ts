import {Component, ViewChild} from "@angular/core";
import set = Reflect.set;
// import {console} from "../designer/tasksquare/tasksquare";
import {Util} from "../../service/util";
import {Calendar} from '@ionic-native/calendar';
import {BasePage} from "../base/base-page";
import {DatePicker} from '@ionic-native/date-picker';


// declare let initializeFontSize: any
declare let jQuery: any

@Component({
    selector: 'page-blank',
    templateUrl: 'blank.html'
})
export class BlankPage {

    file: any;

    constructor(public util: Util,
                private datePicker: DatePicker,) {


        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(
            date => console.log('Got date: ', date),
            err => console.log('Error occurred while getting date: ', err)
        );


        // super.shared
        // this.calendar.createCalendar('MyCalendar').then(
        //     (msg) => { console.log(msg); },
        //     (err) => { console.log(err); }
        // );
    }


    images: Array<{ url }> = [
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
    ]

    show() {
        let pop_bg = jQuery("<div id='pop_bg'>" +
            "<div class='pop'></div>" +
            "</div>");
        jQuery("body").append(pop_bg);
        pop_bg.fadeIn(500)
            .children().css("top", "0");

        pop_bg.click(function () {
            jQuery(this).fadeOut(500)
                .children().css("top", "-100%");
            setTimeout(() => jQuery(this).remove(), 500);
        });
    }

    showFile() {
        this.util.toast(this.file, 2000)
    }


    caseArray: Array<{ caseImg, caseDesc, caseMoney, caseFav, caseTime }> = [
        {
            caseImg: '/assets/img/des-1.png',
            caseDesc: '园区导视，布点规划，文化导入，精神堡垒，展厅，室内软装设计等许多内容、不一一展示',
            caseMoney: '500',
            caseFav: '8',
            caseTime: '6天1小时'
        },
        {
            caseImg: '/assets/img/des-1.png',
            caseDesc: '园区导视，布点规划，文化导入，精神堡垒，展厅，室内软装设计等许多内容、不一一展示',
            caseMoney: '500',
            caseFav: '8',
            caseTime: '6天1小时'
        },
        {
            caseImg: '/assets/img/des-1.png',
            caseDesc: '园区导视，布点规划，文化导入，精神堡垒，展厅，室内软装设计等许多内容、不一一展示',
            caseMoney: '500',
            caseFav: '8',
            caseTime: '6天1小时'
        },
    ]
}