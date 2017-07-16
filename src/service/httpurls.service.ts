import {Injectable} from "@angular/core";
import {SharedService} from "./share.service";

@Injectable()
export class HttpUrls {

    server_url: string = "http://192.168.100.154:8080";

    loginurl: string = this.server_url + "/users/login";
    registerurl: string = this.server_url + "/users";

    constructor(private shared: SharedService) {
        if (shared.DEBUG) {
            this.server_url = "http://192.168.10.48:8080";
        } else {
            //todo 设置生产环境的服务器地址
        }
    }
}