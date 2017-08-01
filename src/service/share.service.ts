import {Injectable} from "@angular/core";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {User} from "../model/user";

import {KeynoteService} from "./keynote.service";
import {Events} from "ionic-angular";
import {Util} from "./util";

@Injectable()
export class SharedService {

    //是否为演示模式, 各个和网络连接有关的, 如果检测到为true, 则不进行网络传送, 使用测试数据进行演示
    KEYNOTE: boolean = true;

    //是否为开发模式, 开发模式在使用开发服务器.
    DEBUG: boolean = true;

    //是否是设计师, 如果用户是设计师, 则对于一些公共页面, 执行对应的修改, 例如主题颜色的不相同
    currentModuleIsDesigner: boolean;
    isDesigner = this.currentModuleIsDesigner;

    //当前登录用户
    private currentUser = {};

    //用户角色的字符串
    ROLE_DESIGNER: string = 'designer';
    ROLE_EMPLOYER: string = 'employer';

    ROLE_SERVER_DESIGNER: string = '00';
    ROLE_SERVER_EMPLOYER: string = '01';


    TOKEN: string;
    currentUserId: string;

    constructor(private event: Events,
                private util:Util,
                private keynote: KeynoteService) {
        event.subscribe('backdoor', () => {
            console.log('receive \'backdoor\' event');
            this.keynote.initDefaultUser(true, this);
        })
    }


    getCurrentIsDesigner() {
        return this.currentModuleIsDesigner;
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
        this.util.updateObj(this.currentUser,user);
        if (user.role != 'designer') {
            this.currentModuleIsDesigner = false;
        } else {
            this.currentModuleIsDesigner = true;
        }
    }
}