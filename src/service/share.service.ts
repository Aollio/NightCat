import {Injectable} from "@angular/core";
import {KeynoteService} from "./keynote.service";
import {Events} from "ionic-angular";
import {Util} from "./util";
import {ImService} from "./im/service.im";
@Injectable()
export class SharedService {
    static FIRST_USE_APP = "firstUseApp";
    static TOKEN = "token";

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

    getFullStackType() {
        return 10;
    }

    constructor(private event: Events,
                private util: Util,
                private imServ:ImService,
                private keynote: KeynoteService) {
        event.subscribe('backdoor', (user) => {
            console.log('receive \'backdoor\' event');
            this.keynote.initDefaultUser(true, this);
        });
    }

    //获取导航栏的颜色
    getPrimaryColor() {
        if (this.isDesModule()) {
            return 'des-primary';
        } else {
            return 'emp-primary';
        }
    }


    position=[
        '未指定',
        '初级工程师',
        '中级工程师',
        '高级工程师',
    ]

    // designTypes = [    //十三项
    //     "未设置",
    //     "策划",
    //     "规划设计",
    //     "建筑设计",
    //     "结构设计",
    //     "给排水",
    //     "电气设计",
    //     "暖通设计",
    //     "景观设计",
    //     "室内设计",
    //     "软装设计",
    //     "项目经理",
    //     "概预算",
    //     "审图"]

//当前登录用户
    private
    currentUser: any = {};

    getCurrentUser() {
        return this.currentUser;
    }

    setCurrentUser(user) {
        this.imServ.setToken(user);
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
        return localStorage[SharedService.FIRST_USE_APP];
    }

    setIsNotFirstUse() {
        localStorage[SharedService.FIRST_USE_APP]=false;
    }
}


