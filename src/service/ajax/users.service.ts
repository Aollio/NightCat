import {Injectable} from "@angular/core";
import {User} from "../../model/user";
import {SharedService} from "../share.service";

import {HttpUrls} from "../httpurls.service";
import 'rxjs/add/operator/toPromise';
import {NetworkService} from "../network.service";
import {ErrorObserver} from "rxjs/Observer";
import {KeynoteService} from "../keynote.service";

@Injectable()
export class UsersService {

    private KEYNOTE: boolean;

    constructor(public keynote: KeynoteService,
                private http: NetworkService,
                private urls: HttpUrls,
                public shared:SharedService) {
        this.KEYNOTE = shared.KEYNOTE;
    }


    async getToken(user): Promise<any> {
        if (this.KEYNOTE) {
            console.log('演示模式, 返回默认TOKEN');
            return Promise.resolve(this.keynote.token)
        }
        let param = {
            phone: user.phone,
            password: user.password
        }
        console.log('开始获取TOKEN', param)
        let data = await this.http.post(this.urls.tokens_url, param)

        if (data.status != 200) {
            Promise.reject(data)
        }

        let token = data.content

        console.log('获取TOKEN成功', token)

        return token

    }

    async getUser(token): Promise<any> {
        if (this.KEYNOTE) {
            console.log('演示模式, 返回默认用户');
            return Promise.resolve(this.keynote.user)
        }
        return await this.http.get(this.urls.tokens_url, {token: token})
    }


    /**
     * 用户进行登录, 登录成功将设置全局TOKEN.
     * 失败返回错误信息
     * */
    async login(user): Promise<any> {
        let token
        //校对成功后, 会收到TOKEN. 将TOKEN设置为共享变量并存储.
        try {
            token = await this.getToken(user)
        } catch (error) {
            console.log('login', error)
            return Promise.reject(error)
        }

        this.shared.TOKEN = token.id
        this.shared.currentUserId = token.uid
        return 'ok'
    }

    async register(user) {

        if (this.KEYNOTE) {
            console.log('演示模式, 注册成功用户')
            user.id = 'default-id'
            return user
        }

        let data = await this.http.post(this.urls.users_register, user)
        if (data.status != 200) {
            Promise.reject(data)
        }

        let newuser = data.content
        console.log('注册用户成功', newuser)
        return newuser
    }


}