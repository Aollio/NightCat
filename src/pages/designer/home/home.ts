import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NotificationsPage} from "../nofitications/notifications";
import {AdsService} from "../../../service/ajax/ads.service";
import {ProjectsService} from "../../../service/ajax/projects.service";
import {SharedService} from "../../../service/share.service";


declare let initializeFontSize: any

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class DesignerHomePage {

    ionViewDidEnter() {
        initializeFontSize()
    }

    ad_images: Array<{ url }> = [];

    // types: Array<{ name, val }> = [
    //     // UNDEFINDED("未设置"),
    //     // Types_1("概预算"),
    //     // Types_2("项目经理"),
    //     // Types_3("给排水设计"),
    //     // Types_4("策划"),
    //     // Types_5("规划设计"),
    //     // Types_6("建筑设计"),
    //     // Types_7("电气设计"),
    //     // Types_8("结构设计"),
    //     // Types_9("审图"),
    //     // Types_10("软装设计"),
    //     // Types_11("室内设计"),
    //     // Types_12("暖通设计"),
    //     // Types_13("景观设计");
    //     {name: '概预算', val: '1'},
    //     {name: '项目经理', val: '2'},
    //     {name: '给排水设计', val: '3'},
    //
    //     {name: '策划', val: '4'},
    //     {name: '规划设计', val: '5'},
    //     {name: '建筑设计', val: '6'},
    //     {name: '电气设计', val: '7'},
    //     {name: '结构设计', val: '8'},
    //     {name: '审图', val: '9'},
    //
    //     {name: '软装设计', val: '10'},
    //     {name: '室内设计', val: '11'},
    //     {name: '暖通设计', val: '12'},
    //     {name: '景观设计', val: '13'}
    // ];

    private projectsMap = {};

    // private currentProjs = [];


    currentType: number = 0;

    messagePage: any = NotificationsPage;


    constructor(public navCtrl: NavController,
                private projectServ: ProjectsService,
                private shared:SharedService,
                public adsServ: AdsService) {
        this.adsServ.getDesHomeSlides().then(slides => {
            for (let x of slides) {
                this.ad_images.push(x)
            }
        }).catch(eroor => {
            console.log('DesignerHomePage load slidesImg error')
        })


        this.getProjects(0);
    }

    selectType(index) {
        this.currentType = index;
        this.getProjects(index);
        console.log("select project type",this.shared.project_type[index]);
    }

    openNotificationsPage() {
        this.navCtrl.push(NotificationsPage);
    }

    open(page, option) {
        this.navCtrl.push(page, option)
    }


    //start 下拉刷新

    //todo 内容刷新
    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        this.getProjects(this.currentType,refresher);
        // refresher.complete();
    }
    //end 下拉刷新


    getProjects(type,refresher={}) {
        this.currentType = type;
        this.projectServ.getProjects({type: type})
            .then(projects => {
                this.projectsMap[type] = projects;

                refresher['complete']&&refresher['complete']();
            }).catch(error => {
            console.log(error);

            refresher['complete']&&refresher['complete']();
        });
    }
}
