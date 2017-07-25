import {Injectable} from "@angular/core";
import {SharedService} from "./share.service";

@Injectable()
export class HttpUrls {

    server_url: string = "http://localhost:3000";

    //登录URL, 用于获取用户对应的TOKEN
    token_url: string = this.server_url + "/tokens";

    user_info_url: string = this.server_url + "/tokens";

    register_url: string = this.server_url + "/users";

    constructor(private shared: SharedService) {
        if (shared.DEBUG) {
            this.server_url = "http://localhost:3000";
        } else {
            //todo 设置生产环境的服务器地址
        }
    }
}