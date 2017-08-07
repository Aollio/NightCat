import {Injectable} from "@angular/core";
import {SharedService} from "./share.service";

@Injectable()
export class HttpUrls {

    // server_url: string = "http://smalllio.com";
    // server_url: string = "http://192.168.10.131:3000";
    server_url: string = "http://192.168.100.154:3000";

    //start 用户
    _users :string = this.server_url +"/users";

    //get
    /**
     * 获取用户信息
     * params:UID
     * response:
     */
    user_info_get:string= this._users+"/show";
    // /**
    //  * 获取用户封面
    //  * params:UID
    //  * response:
    //  */
    // user_cover_get:string= this._users+"/cover";
    //todo 获取用户案例(已完成项目)
    /**
     *  获取⼯工作经历
     * params:UID
     * response:
     */
    user_experience_get:string = this._users+"/experience";
    /**
     *  获取用户荣誉
     * params:UID
     * response:
     */
    user_honors_get:string = this._users+"/honors";

    //post
    /**
     *  注册
     * params:nickname, password, role, phone, img_url(可选)
     * response:
     */
    user_register_post :string=this._users;
    /**
     * 登录
     * params:phone, password
     * response:tokens
     */
    user_login_post:string = this.server_url+"/tokens";
    //todo 修改⽤用户信息
    //todo 上传案例(无)
    //上传荣耀
    /**
     * 上传荣耀
     * params: name, img_url, get_time
     * response:
     */
    user_honors_post:string = this.user_honors_get;
    /**
     * 上传用户工作经历
     * params: name, description
     * response:
     */
    user_experience_post:string = this.user_experience_get;
    // /**
    //  * 上传用户封面
    //  * params: img_url
    //  * response:
    //  */
    // user_cover_post:string= this.user_cover_get;

    designer_list :string = this._users+"/designers";

    user_authentications:string = this._users+"/authentications";

    //end 用户



    //start 项目
    _projects :string = this.server_url+"/projects";

    //项目详情
    project_info_get:string = this._projects+"/show";
    //项目动态
    project_dynamics_get:string = this._projects+"/dynamics";
    //项目评论
    project_comments_get:string = this._projects+"/comments";

    //获取项目列表
    projects_list_get:string = this._projects+"/timeline";

    //用户项目列表
    projects_of_user_get:string = this._projects+"/user_timeline";




    //end 项目


    projects_url: string = this.server_url + '/projects'

    //广告相关
    ads_designer_home_slides_url: string = this.server_url + '/ads/d/home/slides'

    constructor(private shared: SharedService) {
        if (shared.DEBUG) {
            this.server_url = "http://localhost:3000";
        } else {
            this.server_url = "http://smallcat.aollio.com";
            //todo 设置生产环境的服务器地址
        }
    }
}