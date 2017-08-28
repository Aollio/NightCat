import {Injectable} from "@angular/core";
import {SharedService} from "../share.service";
import {HttpUrls} from "../httpurls.service";
import {NetworkService} from "../network.service";
import {KeynoteService} from "../keynote.service";
import {Util} from "../util";
import {ImService} from "../im/service.im";
import {Events} from "ionic-angular";

@Injectable()
export class UsersService {

    // 缓存
    private users_uidmap = {};
    private users_accidmap = {};

    constructor(public keynote: KeynoteService,
                public shared: SharedService,
                public util: Util,
                private http: NetworkService,
                private urls: HttpUrls,
                private imServ: ImService,
                private event: Events) {
        //刷新当前用户信息
        event.subscribe("refresh_user", () => {
            this.getInfo(shared.getCurrentUser().uid).then(user => {
                shared.setCurrentUser(user);
            }).catch(err => {
                console.log(err);
            })
        })
    }

    cacheUser(user) {
        this.users_uidmap[user.uid] = user;
        this.users_accidmap[user.accid] = user;
    }


    //startnew
    // phone , password
    async login(userInfo) {
        console.log("开始登录");

        let data = await this.http.post(this.urls.user_login_post, userInfo);

        if (data.status != 200) {
            throw data
        }

        //set token
        localStorage[SharedService.TOKEN] = data.content.token;
        this.http.setToken(data.content.token);

        let user = await
            this.getInfo(data.content.uid);
        console.log("获取用户信息 OK", user);

        //set imtoken
        this.imServ.setToken(user)

        return user;
    }

    //nickname, password, role, phone, img_url
    async register(userInfo) {
        console.log("开始注册");

        let data = await this.http.post(this.urls.user_register_post, userInfo);
        if (data.status != 200) {
            throw data;
        }
        return data.content;
    }

    async getInfo(uid) {
        console.log("获取用户信息");

        // if (this.users_uidmap[uid] != null) {
        //     return this.users_uidmap[uid];
        // }

        let data = await this.http.getWithToken(this.urls.user_info_get, {uid: uid});

        if (data.status != 200) {
            throw data;
        }
        this.cacheUser(data.content);
        return data.content;
    }

    async getInfoByAccid(accid) {
        console.log("获取用户信息 accid");


        if (this.users_uidmap[accid] != null) {
            return this.users_uidmap[accid];
        }

        let data = await this.http.getWithToken(this.urls.user_info_accid_get, {accid: accid});

        if (data.status != 200) {
            throw data;
        }
        this.cacheUser(data.content)
        return data.content;
    }

    //todo
    async resetPassword() {

    }

    async getHonors(uid) {
        console.log("获取荣誉", uid);
        let data = await this.http.get(this.urls.user_honors_get, {uid: uid});

        if (data.status != 200) {
            throw data;
        }
        return data.content;
    }

    //name, img_url, get_time
    async setHonors(params) {
        let data = await this.http.postWithToken(this.urls.user_honors_get, params);

        if (data.status != 200) {
            throw data;
        }
        return data.content;
    }

    async getExperience(uid) {
        console.log("获取经历");
        let data = await this.http.get(this.urls.user_experience_get, {uid: uid});

        if (data.status != 200) {
            throw data;
        }
        return data.content;
    }

    async setExperience(name, description) {
        let data = await this.http.getWithToken(this.urls.user_experience_get, {
            name: name,
            description: description,
        });

        if (data.status != 200) {
            throw data;
        }
        return data.content;
    }

    //type level name id_number img
    async setAuthentication(params) {
        console.log("上传用户证书认证");
        let data = await this.http.postWithToken(this.urls.user_authentication, params);

        if (data.status != 200) {
            throw data;
        }
        return data.content;
    }


    // nickname,position,official,page,limit
    async getDesigners(params = {}) {
        let data = await this.http.get(this.urls.designer_list, params);

        if (data.status != 200) {
            throw data;
        }

        return data.content;
    }

//response: nickname,img_url
    async getInfoSimple(uid) {
        let data = await this.http.get(this.urls.user_info_simple_get, {uid: uid});

        if (data.status != 200) {
            throw data;
        }
        return data.content;
    }

    async getExperienceComments(id) {
        let data = await this.http.get(this.urls.user_exp_comments_get, {id: id});

        if (data.status != 200) {
            throw data;
        }
        return data.content;
    }

    async getVerifyCode(phone) {
        let data = await this.http.get(this.urls.verify_get, {phone: phone});

        if (data.status != 200) {
            throw data;
        }
        return data.content;
    }


    //>>>>>>>>>>>>>>>雇主关注的设计师列表>>>>>>>>>>>>>>>>>
    public follow_des = [];

    async follow(uid) {
        console.log("关注");
        let data = await this.http.postWithToken(this.urls.user_follow_post, {uid: uid});
        if (data.status != 200) throw data;

        this.follow_des.push({uid: uid});    //添加关注

        return data.content;
    }

    // uid,token
    async unfollow(uid) {
        console.log("取消关注");
        let data = await this.http.postWithToken(this.urls.user_unfollow_post, {uid: uid});
        if (data.status != 200) throw data;

        for (let index in this.follow_des) {   //删除关注
            if (uid == this.follow_des[index].uid) {
                this.follow_des.splice(parseInt(index), 1);
            }
        }

        return data.content;
    }

    /**
     * 刷新操作 从网络获取数据
     * 非刷新操作  返回已有数据 若没有数据，再从网络获取
     * @param {boolean} refresh 是否进行刷新操作
     * @returns {Promise<Array>}
     */
    async get_follow_des(refresh: boolean = true) {
        if (!refresh && this.follow_des.length != 0) {  //返回已有数据
            return this.follow_des;
        }

        console.log("获取关注列表");
        let data = await  this.http.getWithToken(this.urls.user_folowing_get,);
        if (data.status != 200) {
            throw data;
        }
        this.set_follow_des(data.content);

        console.log(data.content);
        return this.follow_des;
    }

    private set_follow_des(contents) {
        this.follow_des.length = 0;
        for (let content of contents) {
            this.follow_des.push(content.to);
        }
    }

    //<<<<<<<<<<<<<<<<<雇主关注的设计师列表<<<<<<<<<<<<<<<<<<<


    //用户修改资料
    async modify_profile(profile) {
        console.log(">>>>修改用户信息")
        let data = await this.http.postWithToken(this.urls.user_profile_post, profile);

        if (data.status != 200) throw data;
        console.log("<<<<修改用户信息")
        return data.content;
    }

}