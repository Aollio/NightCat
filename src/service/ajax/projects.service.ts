import {Injectable} from "@angular/core";
import {SharedService} from "../share.service";
import {NetworkService} from "../network.service";
import {HttpUrls} from "../httpurls.service";
import {KeynoteService} from "../keynote.service";

@Injectable()
export class ProjectService {

    //项目状态  枚举不能用
    // public Status = _Status;

    //项目类型
    public type = [
        "未设置",
        "策划",
        "规划设计",
        "建筑设计",
        "结构设计",
        "给排水设计",
        "电气设计",
        "暖通设计",
        "景观设计",
        "室内设计",
        "软装设计",
        "项目经理",
        "概预算",
        "审图",
    ];


    // private KEYNOTE: boolean;

    projects: Array<any>;

    constructor(public shared: SharedService,
                public keynote: KeynoteService,
                private http: NetworkService, private urls: HttpUrls,) {
        // this.KEYNOTE = shared.KEYNOTE;
        this.projects = this.keynote.projects;
    }

    // async getProjectsById(id): Promise<any> {
    //     // if (this.KEYNOTE) {
    //     //     console.log('演示模式, 返回默认用户');
    //     //     for (let index in this.projects) {
    //     //         let temp = this.projects[index];
    //     //         if (temp.create_by == id) {
    //     //             return temp;
    //     //         }
    //     //     }
    //     //     return Promise.resolve(this.keynote.projects[0])
    //     // }
    // }


    /*
    grabProj
    * */
    // async grabProj(id) {
    //
    //     //todo grad url
    //     let response = await this.http.postWithToken('url', {})
    //
    //     if (response.status == 600) {
    //         //this is keynote mode. so return not really data
    //     }
    // }


    //new
    // type, limit, since_time, max_time
    async getProjects(param = {}): Promise<any> {

        let response = await this.http.get(this.urls.projects_list_get, param)

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async getUserProjects(): Promise<any> {

        let response = await this.http.getWithToken(this.urls.projects_of_user_get, {})

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async getProjectsInfo(id) {
        let response = await this.http.get(this.urls.project_info_get, {id: id});

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async getProjectsDynamics(id) {
        let response = await this.http.get(this.urls.project_dynamics_get, {id: id});

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async getProjectsComments(id) {
        let response = await this.http.get(this.urls.project_comments_get, {id: id});

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async getProjectImgs(id) {
        let response = await this.http.get(this.urls.project_imgs_get, {id: id});

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async publishProj(project) {
        let response = await this.http.postWithToken(this.urls.project_publish_post, project);

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async grabProject(grabInfo) {
        let response = await this.http.postWithToken(this.urls.project_grab_post, grabInfo);

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    //projectId
    async grabberList(projectId) {
        let response = await this.http.getWithToken(this.urls.project_grabber_list, {id: projectId});

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    //项目id	  设计师 uid
    async selectDesigner(projectId, designerId) {
        let response = await this.http.postWithToken(this.urls.project_select_designer, {
            id: projectId,
            uid: designerId
        });

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }


    //项目id	  取消原因
    async cancle(projectId, cancle_eason) {
        let response = await this.http.postWithToken(this.urls.project_cancel, {
            id: projectId,
            cancel_reason: cancle_eason
        });

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    //项目id
    async designerConfirm(projectId) {
        let response = await this.http.postWithToken(this.urls.designer_confirm, {
            id: projectId,
        });

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    //项目id
    async modify(project) {
        let response = await this.http.postWithToken(this.urls.project_modify, project);

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }


    //项目id  设计师交付
    async commit(projectId) {
        let response = await this.http.postWithToken(this.urls.project_commit,
            {id: projectId});

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    //项目id  content type score
    async comment(comment) {
        let response = await this.http.postWithToken(this.urls.project_comment, comment);

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    //项目id  content type score
    async employerHarvest(id) {
        let response = await this.http.postWithToken(this.urls.employer_harvest, {id: id});

        if (response.status != 200) {
            throw response || response.message;

        }
        return response.content;
    }

    async money(id) {
        let response = await this.http.postWithToken(this.urls.project_money, {id: id})

        if (response.status != 200) {
            throw response || response.message;
        }

        return response.content
    }



}


enum Status {
    /**
     * 发布项目后, 项目处于发布状态. 这时候设计师可以进行抢单.
     * 如果没有设计师抢单, 并且项目到达截止时间后会进入'Cancel'状态
     */
    Publish,
        /**
         * 雇主选择一位设计师后, 等待设计师确认
         */
    ConfirmDesigner_WaitDesignerConfirm,
        /**
         * 设计时确认后(双方确认)
         */
    DesignerConfirm_WaitModify,
        /**
         * 等待设计师修改. 修改后,等待雇主支付. 这时会生成一个对应的支付订单
         */
    DesignerModify_WaitPay,
        /**
         * 支付完成后, 等待设计师设计
         */
    PayComplete_WaitDesign,
        /**
         * 设计完成后, 由雇主进行确认设计完成. 等待评价项目. 这时将款项转给设计师账户
         */
    DesignComplete_WaitComment,
        /**
         * 若在设计过程中, 雇主和设计师之间发生了无法私下协调的问题. 由平台介入协调. 称为会审
         */
    Platform_InterPose,
        /**
         * 订单正常完成. 评价后状态为完成
         */
    Complete,
        /**
         * 订单非正常完成. e.g. 项目超时未抢单; 会审失败; 雇主没有支付; 等等
         */
    Cancel
}