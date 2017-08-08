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

    //todo 是否是设计师, 如果用户是设计师, 则对于一些公共页面, 执行对应的修改, 例如主题颜色的不相同
    currentModuleIsDesigner: boolean;
    //登录用户是否为设计师
    isDesigner = this.currentModuleIsDesigner;

    //第一次使用
    private _isFirstUse = true;

    //当前登录用户
    public currentUser = {};

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
        if (this.currentModuleIsDesigner) {
            return 'des-primary';
        } else {
            return 'emp-primary';
        }
    }

    getCurrentUser() {
        return this.currentUser;
    }

    setCurrentUser(user: User) {
        this.util.updateObj(this.currentUser, user);
        if (user['role'] != 0) {
            this.currentModuleIsDesigner = false;
        } else {
            this.currentModuleIsDesigner = true;
        }
    }


    // isDesigner() {
    //     return this.currentModuleIsDesigner;
    // }

    //用户是否登录
    isLogin() {
        return !this.util.isEmptyObj(this.currentUser);
    }

    // 判断用户是否第一次使用
    isFirstUse() {
        return this._isFirstUse;
    }

    setIsNotFirstUse() {
        this._isFirstUse = false;
    }
}