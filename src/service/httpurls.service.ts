import {Injectable} from "@angular/core";
import {SharedService} from "./share.service";

@Injectable()
export class HttpUrls {

    server_url: string = "http://localhost:3000";

    //登录URL, 用于获取用户对应的TOKEN
    tokens_url: string = this.server_url + "/tokens";

    users_info: string = this.server_url + "/tokens";

    users_register: string = this.server_url + "/users";

    projects_url: string = this.server_url + '/projects'

    constructor(private shared: SharedService) {
        if (shared.DEBUG) {
            this.server_url = "http://localhost:3000";
        } else {
            //todo 设置生产环境的服务器地址
        }
    }
}