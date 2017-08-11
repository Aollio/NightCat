import {Injectable} from "@angular/core";
import {User} from "../model/user";

import {KeynoteService} from "./keynote.service";
import {Events} from "ionic-angular";
import {Util} from "./util";

@Injectable()
export class SharedService {

    //是否为演示模式, 各个和网络连接有关的, 如果检测到为true, 则不进行网络传送, 使用测试数据进行演示
    KEYNOTE: boolean = false;

    //是否为开发模式, 开发模式在使用开发服务器.
    DEBUG: boolean = false;


    //是否为 设计师模块    对于一些公共页面, 执行对应的修改, 例如主题颜色的不相同
    private isDesignerModel: boolean;

    isDesModule() {
        return this.isDesignerModel;
    }

    setIsDesModule(isDesigner) {
        console.log("isDesigner", isDesigner);
        this.isDesignerModel = isDesigner;
    }

    //end 是否为 设计师模块


    //第一次使用
    private _isFirstUse = true;


    //用户角色的字符串
    ROLE_DESIGNER: string = 'designer';
    ROLE_EMPLOYER: string = 'employer';

    ROLE_SERVER_DESIGNER = 0;
    ROLE_SERVER_EMPLOYER = 1;


    public project_type = [
        "未设置",
        "概预算",
        "项目经理",
        "给排水设计",
        "策划",
        "规划设计",
        "建筑设计",
        "电气设计",
        "结构设计",
        "审图",
        "软装设计",
        "室内设计",
        "暖通设计",
        "景观设计",
    ];

    constructor(private event: Events,
                private util: Util,
                private keynote: KeynoteService) {
        event.subscribe('backdoor', (user) => {
            console.log('receive \'backdoor\' event');
            this.keynote.initDefaultUser(true, this);
        })
    }

    //获取导航栏的颜色
    getPrimaryColor() {
        if (this.isDesModule()) {
            return 'des-primary';
        } else {
            return 'emp-primary';
        }
    }


    //当前登录用户
    private currentUser = {};

    getCurrentUser() {
        return this.currentUser;
    }

    setCurrentUser(user) {
        this.currentUser = user;
        if (user['role'] == 0) {
            this.setIsDesModule(true);
        } else {
            this.setIsDesModule(false);
        }
    }

    clearCurrentUser() {
        this.currentUser = {};
    }

    //end 当前登录用户


    // isDesigner() {
    //     return this.currentModuleIsDesigner;
    // }

    //用户是否登录
    isLogin() {
        let isLogin = !this.util.isEmptyObj(this.currentUser);
        // console.log('isLogin', isLogin);
        return isLogin;
    }

    // 判断用户是否第一次使用
    isFirstUse() {
        return this._isFirstUse;
    }

    setIsNotFirstUse() {
        this._isFirstUse = false;
    }
}


export enum Status {
    /**
     * 发布项目后, 项目处于发布状态. 这时候设计师可以进行抢单.
     * 如果没有设计师抢单, 并且项目到达截止时间后会进入'Cancel'状态
     */
    Publish,
        /**
         * 雇主选择一位设计师后, 等待设计师确认
         */
    ConfirmDesigner_WaitDesignerConfitm,
        /**
         * 设计时确认后(双方确认), 等待雇主支付. 这时会生成一个对应的支付订单
         */
    BothConfirm_WaitEmployerPay,
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