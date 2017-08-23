import {Component} from "@angular/core";
import {Util} from "../../service/util";
import {Manager} from "../../service/manager";
import {NavController} from "ionic-angular";
import {FileService} from "../../service/ajax/files.service";
import {NetworkService} from "../../service/network.service";
import {HttpUrls} from "../../service/httpurls.service";
import {ImgUploaderService} from "../../service/img-uploader.service";


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
                private imgUploader: ImgUploaderService,
                private urls: HttpUrls) {
        this.main_color = this.manager.sharedServ.getPrimaryColor();


    }

    savelocal() {
        localStorage.testmsg = new Date().toISOString();
    }

    showlocal() {
        this.util.toast(localStorage.testmsg);
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
    ];



    //上传图片
    upLoad_img() {
        let img_uploader = this.imgUploader;
        if (!img_uploader._input || img_uploader._input.files.length == 0) {
            this.util.toast("请选择图片");
            return;
        }

        img_uploader.upload(async (img) => {
            return this.files.upload(img);
        }, () => {
            console.log("img_urls", img_uploader.img_urls);

        }, (err) => {
            this.util.toast("图片上传失败，请稍后再试");
        })
    }

    change(){
        console.log("change 被触发")
        this.imgUploader.show_img();
    }

}