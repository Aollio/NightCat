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

    ad_images: Array<any> = [];


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


        this.isFirstLogin = shared.isFirstUse();
    }

    selectType(index) {
        this.currentType = index;
        this.getProjects(index);
        console.log("select project type",this.projectServ.type[index]);
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


    isFirstLogin=true;

    hideFab(){
        //todo isfirstCome 记录
        this.shared.setIsNotFirstUse();
        this.isFirstLogin=false;
    }
}
