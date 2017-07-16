import {Injectable} from "@angular/core";
import {User} from "../../model/user";
import {SharedService} from "../share.service";

import {HttpUrls} from "../httpurls.service";
import 'rxjs/add/operator/toPromise';
import {NetworkService} from "../network.service";

@Injectable()
export class UserService {

    private KEYNOTE: boolean;

    constructor(public shared: SharedService, private http: NetworkService, private urls: HttpUrls,) {
        this.KEYNOTE = shared.KEYNOTE;
    }

    login(phone: string, passowrd: string, isDesigner: boolean): Promise<User> {
        if (this.KEYNOTE) {
            console.log("演示模式, 设置默认用户");
            this.shared.initDefaultUser(isDesigner);
            return Promise.resolve(this.shared.currentUser)
        }
        return this
            .http
            .post(this.urls.loginurl, {
                phone: phone,
                password: passowrd
            })

            .then(data => {
                //登录成功后的逻辑
                this.shared.currentUser = data;
                this.shared.isDesigner = isDesigner;
                return data as User;
            })
            .catch(error => {
                console.log("service error " + error)
                return Promise.reject(error.message | error);
            })
    }


}