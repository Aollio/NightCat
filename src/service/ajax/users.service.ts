import {Injectable} from "@angular/core";
import {User} from "../../model/user";
import {SharedService} from "../share.service";

import {HttpUrls} from "../httpurls.service";
import 'rxjs/add/operator/toPromise';
import {NetworkService} from "../network.service";
import {ErrorObserver} from "rxjs/Observer";
import {KeynoteService} from "../keynote.service";
import {Util} from "../util";

@Injectable()
export class UsersService {

    private KEYNOTE: boolean;

    private users;

    constructor(public keynote: KeynoteService,
                private http: NetworkService,
                private urls: HttpUrls,
                public shared: SharedService,
                public util: Util) {
        this.KEYNOTE = shared.KEYNOTE;
        this.users = this.keynote.users;
    }


    async allUser(){
        console.log("urls",this.urls.users_get);
        let data =await this.http.get(this.urls.users_get,{},{});
        if (data.status != 200) {
            throw data
        }

        let users = data.content
        return users;

    }

    getUserByUid(uid) {
        for (let index in this.users) {
            if (this.users[index].uid == uid) {
                return this.users[index];
            }
        }
    }

    async getUsersByRole(isDesigner: boolean) {
        let users = await this.allUser();
        let result = []
        for (let index in users) {
            if (users[index].role == 0 && isDesigner) {
                result.push(users[index])
            } else if (users[index].role == 1 && !isDesigner) {
                result.push(users[index])
            }
        }
        return result;
    }

    async getUsersByPhone(phone) {
        let users = await this.allUser();
        for (let index in users) {
            if (users[index].phone == phone) {
                return users[index];
            }
        }
    }


    async loginWithKeynote(user) {
        if (user.phone == '4'
            || user.phone == '1'
            || user.phone == '2'
            || user.phone == '3') {
            let loginuser = await this.getUsersByPhone(user.phone)
            this.shared.currentModuleIsDesigner = loginuser.role == 0;
            this.shared.TOKEN = loginuser.uid
            this.shared.currentUserId = loginuser.uid
            this.util.updateObj(this.shared.getCurrentUser(), loginuser)
            return loginuser;
        }
        throw {status: 500, message: "演示模式登录手机号只支持0,1,2,3. 密码任意"}
    }

    async getUsers(user) {
        if (this.KEYNOTE) {
            console.log('演示模式, 返回默认TOKEN');
            return this.keynote.token
        }
        let param = {
            phone: user.phone,
            password: user.password
        }
        console.log('开始获取TOKEN', param)
        let data = await this.http.post(this.urls.tokens_url, param)

        if (data.status != 200) {
            throw data
        }

        let willuser = data.content

        console.log('获取TOKEN成功', willuser)

        return willuser

    }

    // async getUser(uid): Promise<any> {
    //     if (this.KEYNOTE) {
    //         console.log('演示模式, 返回默认用户');
    //         for (let index in this.users) {
    //             let temp = this.users[index];
    //             if (temp.uid == uid) {
    //                 return temp;
    //             }
    //         }
    //         return Promise.resolve(this.keynote.user)
    //     }
    //     return await this.http.getWithToken(this.urls.tokens_url, {uid: uid})
    // }


    /**
     * 用户进行登录, 登录成功将设置全局TOKEN.
     * 失败返回错误信息
     * */
    async login(user): Promise<any> {
        let willnew
        //校对成功后, 会收到TOKEN. 将TOKEN设置为共享变量并存储.
        try {
            willnew = await this.getUsers(user)
        } catch (error) {
            console.log('login', error)
            return Promise.reject(error)
        }

        this.shared.setCurrentUser(this.users);
        this.shared.TOKEN = willnew.id
        this.shared.currentUserId = willnew.uid
        return willnew
    }

    async getLoginUser() {
        let uid = this.shared.currentUserId

        // let user = await this.getUser(uid)
        // return user
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