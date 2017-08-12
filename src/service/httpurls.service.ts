import {Injectable} from "@angular/core";
import {SharedService} from "./share.service";

@Injectable()
export class HttpUrls {

    // 本地服务器
    // server_url: string = "http://192.168.10.131:3000";
    // server_url: string = "http://192.168.100.154:3000";

    //test 服务器地址
    server_url: string = "http://yemaotest.shanghai-cu.com";

    //start 用户
    _users: string = this.server_url + "/users";


    /**
     * upload image
     * */
    upload: string = this.server_url + "/files";

    /**
     * 获取用户信息
     * params:UID
     * response:
     */
    user_info_get: string = this._users + "/show";
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
    user_experience_get: string = this._users + "/experience";
    /**
     *  获取用户荣誉
     * params:UID
     * response:
     */
    user_honors_get: string = this._users + "/honors";

    //post
    /**
     *  注册
     * params:nickname, password, role, phone, img_url(可选)
     * response:
     */
    user_register_post: string = this._users;
    /**
     * 登录
     * params:phone, password
     * response:tokens
     */
    user_login_post: string = this.server_url + "/tokens";
    //todo 修改⽤用户信息
    //todo 上传案例(无)
    //上传荣耀
    /**
     * 上传荣耀
     * params: name, img_url, get_time
     * response:
     */
    user_honors_post: string = this.user_honors_get;
    /**
     * 上传用户工作经历
     * params: name, description
     * response:
     */
    user_experience_post: string = this.user_experience_get;
    // /**
    //  * 上传用户封面
    //  * params: img_url
    //  * response:
    //  */
    // user_cover_post:string= this.user_cover_get;

    designer_list: string = this._users + "/designers";

    user_authentications: string = this._users + "/authentications";

    //
    user_info_simple_get: string = this._users + "/show_simple";

    //end 用户


    //start 项目
    _projects: string = this.server_url + "/projects";

    //项目详情
    project_info_get: string = this._projects + "/show";
    //项目动态
    project_dynamics_get: string = this._projects + "/dynamics";
    //项目评论
    project_comments_get: string = this._projects + "/comments";

    //获取项目列表
    projects_list_get: string = this._projects + "/timeline";

    //用户项目列表
    projects_of_user_get: string = this._projects + "/user_timeline";

    //获取项目图片
    project_imgs_get: string = this._projects + "/imgs";



    //start process
    //发布项目
    project_publish_post: string = this._projects;

    //抢单
    project_grab_post: string = this._projects + "/grab";

    //项目抢单的设计师列表
    project_grabber_list:string=this._projects+"/grabber_list";

    //雇主选择设计师
    project_select_designer:string=this._projects+"/select";

    // 设计师确认订单
    designer_confirm:string=this._projects+"/designer_confirm";

    //设计师完善订单
    project_modify:string = this._projects+"/modify";

    //设计师交付
    project_commit:string = this._projects+"/commit";

    //雇主评价
    project_comment:string = this._projects+"/comment";

    //雇主收货
    employer_harvest:string = this._projects+"/harvest";

    //取消订单
    project_cancel :string = this._projects+"/cancel";


    //end process


    //end 项目


    projects_url: string = this.server_url + '/projects'

    //广告相关
    ads_designer_home_slides_url: string = this.server_url + '/ads/d/home/slides'

    constructor(private shared: SharedService) {
    }
}

