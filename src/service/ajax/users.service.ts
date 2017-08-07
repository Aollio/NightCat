import {Injectable} from "@angular/core";
import {SharedService} from "../share.service";
import {HttpUrls} from "../httpurls.service";
import 'rxjs/add/operator/toPromise';
import {NetworkService} from "../network.service";
import {KeynoteService} from "../keynote.service";
import {Util} from "../util";

@Injectable()
export class UsersService {

    //缓存
    // private users = {};

    constructor(public keynote: KeynoteService,
                private http: NetworkService,
                private urls: HttpUrls,
                public shared: SharedService,
                public util: Util) {
    }


    // async getUsersByRole(isDesigner: boolean) {
    //     let result = []
    //     for (let index in this.users) {
    //         if (this.users[index].role == 0 && isDesigner) {
    //             result.push(this.users[index])
    //         } else if (this.users[index].role == 1 && !isDesigner) {
    //             result.push(this.users[index])
    //         }
    //     }
    //     return result;
    // }
    //
    // async getUsersByPhone(phone) {
    //     for (let index in this.users) {
    //         if (this.users[index].phone == phone) {
    //             return this.users[index];
    //         }
    //     }
    // }
    //
    //
    // async loginWithKeynote(user) {
    //     if (user.phone == '4'
    //         || user.phone == '1'
    //         || user.phone == '2'
    //         || user.phone == '3') {
    //         let loginuser = await this.getUsersByPhone(user.phone)
    //         this.shared.currentModuleIsDesigner = loginuser.role == 0;
    //         this.shared.TOKEN = loginuser.uid
    //         this.shared.currentUserId = loginuser.uid
    //         this.util.updateObj(this.shared.getCurrentUser(), loginuser)
    //         return loginuser;
    //     }
    //
    //     throw {status: 500, message: "演示模式登录手机号只支持0,1,2,3. 密码任意"}
    //
    // }
    //
    //
    // async getLoginUser() {
    //     let uid = this.shared.currentUserId
    //     let user = await this.getUser(uid)
    //     return user
    // }
    //
    // async getUser(uid): Promise<any> {
    //     if (this.shared.KEYNOTE) {
    //         console.log('演示模式, 返回默认用户');
    //         for (let index in this.users) {
    //             let temp = this.users[index];
    //             if (temp.uid == uid) {
    //                 return temp;
    //             }
    //         }
    //         return Promise.resolve(this.keynote.user)
    //     }
    //     return await this.http.getWithToken(this.urls.user_login_post, {uid: uid})
    // }
    //
    // async register(user) {
    //
    //     if (this.shared.KEYNOTE) {
    //         console.log('演示模式, 注册成功用户')
    //         user.id = 'default-id'
    //         return user;
    //     }
    //
    //     let data = await this.http.post(this.urls.user_register_post, user);
    //     if (data.status != 200) {
    //         Promise.reject(data);
    //     }
    //
    //     let newuser = data.content
    //     console.log('注册用户成功', newuser)
    //     return newuser;
    // }
    //
    // async getToken(user) {
    //     if (this.shared.KEYNOTE) {
    //         console.log('演示模式, 返回默认TOKEN');
    //         return this.keynote.token
    //     }
    //     let param = {
    //         phone: user.phone,
    //         password: user.password
    //     }
    //     console.log('开始获取TOKEN', param)
    //     let data = await this.http.post(this.urls.user_login_post, param)
    //
    //     if (data.status != 200) {
    //         throw data;
    //     }
    //
    //     let token = data.content
    //
    //     console.log('获取TOKEN成功', token)
    //
    //     return token
    //
    // }
    //
    // /**
    //  * 用户进行登录, 登录成功将设置全局TOKEN.
    //  * 失败返回错误信息
    //  * */
    // async login(user): Promise<any> {
    //     let token
    //     //校对成功后, 会收到TOKEN. 将TOKEN设置为共享变量并存储.
    //     try {
    //         token = await this.getToken(user)
    //     } catch (error) {
    //         console.log('login', error)
    //         return Promise.reject(error)
    //     }
    //     this.shared.TOKEN = token.id
    //     this.shared.currentUserId = token.uid
    //     return 'ok'
    // }

    //new
    _getCacheUserByUid(uid) {
        // for (let index in this.users) {
        //     if (this.users[index].uid == uid) {
        //         return this.users[index];
        //     }
        // }
        return null;
    }

    //start
    //phone, password
    async login(userInfo) {
        console.log("开始登录");

        let data = await this.http.post(this.urls.user_login_post, userInfo);
        if (data.status != 200) {
            Promise.reject(data);
        }

        return data.content;
    }

    //nickname, password, role, phone, img_url
    async register(userInfo) {
        console.log("开始注册");
        let data = await this.http.post(this.urls.user_register_post, userInfo);
        if (data.status != 200) {
            Promise.reject(data);
        }
        return data.content;
    }

    async getInfo(uid) {
        console.log("获取用户信息");
        let user = this._getCacheUserByUid(uid);
        if (user != null) {
            console.log("cache user", user);
            return user;
        }
        let data = await this.http.getWithToken(this.urls.user_info_get, {uid: uid});

        if (data.status != 200) {
            Promise.reject(data);
        }
        return data.content;
    }

    //todo
    async resetPassword() {

    }

    async getHonors(uid) {
        console.log("获取荣誉", uid);
        let data = await this.http.getWithToken(this.urls.user_honors_get, {uid: uid});

        if (data.status != 200) {
            Promise.reject(data);
        }
        return data.content;
    }

    async setHonors(name, img_url, get_time) {
        let data = await this.http.postWithToken(this.urls.user_honors_get, {
            name: name,
            img_url: img_url,
            get_time: get_time,
        });

        if (data.status != 200) {
            Promise.reject(data);
        }
        return data.content;
    }

    async getExperience(uid) {
        console.log("获取经历");
        let data = await this.http.getWithToken(this.urls.user_experience_get, {uid: uid});

        if (data.status != 200) {
            Promise.reject(data);
        }
        return data.content;
    }

    async setExperience(name, description) {
        let data = await this.http.getWithToken(this.urls.user_experience_get, {
            name: name,
            description: description,
        });

        if (data.status != 200) {
            Promise.reject(data);
        }
        return data.content;
    }

    //todo
    async setAuthentications() {

    }

    // nickname,position,official,page,limit
    async getDesigners(params = {}) {
        let data = await this.http.get(this.urls.designer_list, params);

        if (data.status != 200) {
            Promise.reject(data);
        }
        return data.content;
    }

}