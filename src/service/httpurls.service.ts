import {Injectable} from "@angular/core";
import {SharedService} from "./share.service";

@Injectable()
export class HttpUrls {

    // server_url: string = "http://localhost:3000";
    server_url: string = "http://smallcat.aollio.com";

    //登录URL, 用于获取用户对应的TOKEN
    tokens_url: string = this.server_url + "/tokens";
    users_info: string = this.server_url + "/tokens";
    users_register: string = this.server_url + "/users";
    users_get: string = this.server_url + "/users";

    projects :string = this.server_url+"/projects";
    notis :string = this.server_url+"/notis";





    projects_url: string = this.server_url + '/projects'

    //广告相关
    ads_designer_home_slides_url: string = this.server_url + '/ads/d/home/slides'

    constructor(private shared: SharedService) {
        if (shared.DEBUG) {
        //    this.server_url = "http://localhost:3000";
        } else {
            //todo 设置生产环境的服务器地址
        }
    }
}