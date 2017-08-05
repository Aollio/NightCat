import {Injectable} from "@angular/core";
import {SharedService} from "../share.service";
import {NetworkService} from "../network.service";
import {HttpUrls} from "../httpurls.service";
import {KeynoteService} from "../keynote.service";

@Injectable()
export class AdsService {


    private KEYNOTE: boolean;

    constructor(public shared: SharedService,
                public keynote: KeynoteService,
                private http: NetworkService, private urls: HttpUrls,) {
        this.KEYNOTE = shared.KEYNOTE;
    }

    async getDesHomeSlides() {
        if (true) {
            console.log('演示模式, 返回内置轮播图')
            return this.keynote.ad_designer_home_slides;
        }
        // let response = await this.http.get(this.urls.ads_designer_home_slides_url)
        //
        // if (response.status != 200) {
        //     Promise.reject(response)
        // }
        //
        // return response.content
    }


    async getProjects(param = {}): Promise<any> {
        if (this.KEYNOTE) {
            console.log('演示模式, 返回默认项目列表')
            return this.keynote.projects
        }
        let response = await this.http.get(this.urls.projects_url, param)


        if (response.status != 200) {
            Promise.reject(response)
        }

        return response.content
    }


}