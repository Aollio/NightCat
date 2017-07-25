import {Injectable} from "@angular/core";
import {User} from "../../model/user";
import {SharedService} from "../share.service";

import {HttpUrls} from "../httpurls.service";
import 'rxjs/add/operator/toPromise';
import {NetworkService} from "../network.service";
import {ErrorObserver} from "rxjs/Observer";

@Injectable()
export class UserService {

    private KEYNOTE: boolean;

    constructor(public shared: SharedService, private http: NetworkService, private urls: HttpUrls,) {
        this.KEYNOTE = shared.KEYNOTE;
    }


    async getToken(phone: string, passowrd: string, isDesigner: boolean): Promise<any> {
        if (this.KEYNOTE) {
            console.log('演示模式, 返回默认TOKEN');
            return Promise.resolve('default_token')
        }
        console.log('开始获取TOKEN')
        let param = {
            phone: phone,
            password: passowrd
        }

        let token
        try {
            token = await this.http.post(this.urls.token_url, param)
        } catch (error) {
            return Promise.reject(error)
        }

        console.log('获取TOKEN成功', token)

        return token

    }

    async getUser(token): Promise<any> {
        if (this.KEYNOTE) {
            console.log('演示模式, 返回默认用户');
            return Promise.resolve(this.shared.defaultUser)
        }
        return await this.http.get(this.urls.token_url, {token: token})
    }


    async login(phone: string, passowrd: string, isDesigner: boolean): Promise<User> {
        if (this.KEYNOTE) {
            console.log("演示模式, 设置默认用户");
            this.shared.initDefaultUser(isDesigner);
            return Promise.resolve(this.shared.currentUser)
        }
        let token
        //校对成功后, 会收到TOKEN. 将TOKEN设置为共享变量并存储.
        try {
            token = await this.getToken(phone, passowrd, isDesigner)
        } catch (error) {
            console.log('login', error)
            return Promise.reject(error)
        }

        this.shared.TOKEN = token.id
        this.shared.currentUserId = token.uid
        return
    }


}