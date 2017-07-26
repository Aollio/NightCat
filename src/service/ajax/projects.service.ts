import {Injectable} from "@angular/core";
import {SharedService} from "../share.service";
import {NetworkService} from "../network.service";
import {HttpUrls} from "../httpurls.service";

@Injectable()
export class ProjectsService {


    private KEYNOTE: boolean;

    constructor(public shared: SharedService, private http: NetworkService, private urls: HttpUrls,) {
        this.KEYNOTE = shared.KEYNOTE;
    }


    async getProjects(param = {}): Promise<any> {
        if (this.KEYNOTE) {
            console.log('演示模式, 返回默认项目列表')
            return this.shared.defaultProjects
        }
        let response = await this.http.get(this.urls.projects_url, param)


        if (response.status != 200) {
            Promise.reject(response)
        }

        return response.content
    }

    // async getUser(token): Promise<any> {
    //     if (this.KEYNOTE) {
    //         console.log('演示模式, 返回默认用户');
    //         return this.shared.defaultUser
    //     }
    //     return await this.http.get(this.urls.tokens_url, {token: token})
    // }


    /**
     * 用户进行登录, 登录成功将设置全局TOKEN.
     * 失败返回错误信息
     * */
    // async login(user): Promise<any> {
    //     let token
    //     校对成功后, 会收到TOKEN. 将TOKEN设置为共享变量并存储.
        // try {
        //     token = await this.getToken(user)
        // } catch (error) {
        //     console.log('login', error)
        //     return Promise.reject(error)
        // }
        //
        // this.shared.TOKEN = token.id
        // this.shared.currentUserId = token.uid
        // return 'ok'
    // }
    //
    // async register(user) {
    //
    //     if (this.KEYNOTE) {
    //         console.log('演示模式, 注册成功用户')
    //         user.id = 'default-id'
    //         return user
    //     }
    //
    //     let data = await this.http.post(this.urls.users_register, user)
    //     if (data.status != 200) {
    //         Promise.reject(data)
    //     }
    //
    //     let newuser = data.content
    //     console.log('注册用户成功', newuser)
    //     return newuser
    // }


}