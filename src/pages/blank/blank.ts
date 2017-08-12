import {Component} from "@angular/core";
import {Util} from "../../service/util";
import {Manager} from "../../service/manager";
import {NavController} from "ionic-angular";
import {FileService} from "../../service/ajax/files.service";
import {NetworkService} from "../../service/network.service";
import {HttpUrls} from "../../service/httpurls.service";


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
                private files: FileService,
                private http: NetworkService,
                private urls: HttpUrls) {
        this.main_color = this.manager.sharedServ.getPrimaryColor();


    }



    post() {
        let one = ["one", "two", "three"]
        this.http.post(this.urls.server_url + "/ads", {img_urls: one})
            .then(reslt => console.log(reslt))
            .catch(error => console.log(error))
    }

    open(page, option, navparam) {
        this.nav.push(page, option, navparam)
    }

    images: Array<{ url }> = [
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
    ]

    show() {
        console.log(this.imgurls)
    }
}