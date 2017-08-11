import {Component} from "@angular/core";
// import {console} from "../designer/tasksquare/tasksquare";
import {Util} from "../../service/util";
//import {Calendar} from '@ionic-native/calendar';
import {Manager} from "../../service/manager";
import {NavController} from "ionic-angular";
import {ImagePicker} from "@ionic-native/image-picker";
import {FilesService} from "../../service/ajax/files.service";
//import {DatePicker} from '@ionic-native/date-picker';


// declare let initializeFontSize: any
declare let jQuery: any

@Component({
    selector: 'page-blank',
    templateUrl: 'blank.html'
})
export class BlankPage {

    file: any;

    //当前登录角色对应的颜色
    main_color: any;


    imgurls = []

    constructor(private util: Util,
                private manager: Manager,
                private nav: NavController,
                private imagePicker: ImagePicker,
                private files: FilesService
    ) {
        this.main_color = this.manager.sharedServ.getPrimaryColor();
    }


    picker() {
        let options = {
            maximumImagesCount: 15,
            quality: 100,
            outputType: 1
        }
        console.log("开始选择图片")
        this.imagePicker.getPictures(options).then((results) => {
            for (var i = 0; i < results.length; i++) {
                console.log("选择图片后")
                console.log('Image base64: ' + results[i]);
                this.files.upload(results[i]).then(url => {
                    console.log("上传成功, url is :", url)
                    this.imgurls.push(url)
                });
            }
        }, (err) => {
            console.log(err)
        });
    }

    open(page, option, navparam) {
        this.nav.push(page, option, navparam)
    }

    // this.datePicker.show({
    //     date: new Date(),
    //     mode: 'date',
    //     androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    // }).then(
    //     date => console.log('Got date: ', date),
    //     err => console.log('Error occurred while getting date: ', err)
    // );


    // super.shared
    // this.calendar.createCalendar('MyCalendar').then(
    //     (msg) => { console.log(msg); },
    //     (err) => { console.log(err); }
    // );
    // }


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
        this.util.toast(this.file)
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


    setImg() {
        var input = document.getElementById("inputImg");
        console.log("file", input);
        // console.log("file",input.offsetHeight.);
        // console.log("file",input.files);
    }
}