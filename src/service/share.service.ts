import {Injectable} from "@angular/core";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {User} from "../model/user";

@Injectable()
export class SharedService {

    //是否为演示模式, 各个和网络连接有关的, 如果检测到为true, 则不进行网络传送, 使用测试数据进行演示
    KEYNOTE: boolean = true;

    //是否为开发模式, 开发模式在使用开发服务器.
    DEBUG: boolean = true;

    //是否是设计师, 如果用户是设计师, 则对于一些公共页面, 执行对应的修改, 例如主题颜色的不相同
    isDesigner: boolean = true;

    //当前登录用户
    currentUser: User;

    //用户角色的字符串
    ROLE_DESIGNER: string = 'designer'
    ROLE_EMPLOYER: string = 'employer'

    ROLE_SERVER_DESIGNER: string = '0'
    ROLE_SERVER_EMPLOYER: string = '1'


    TOKEN: string
    currentUserId: string

    constructor() {
        if (this.KEYNOTE) {
            this.initDefaultUser(false)
        }
    }

    //获取导航栏的颜色
    getPrimaryColor() {
        if (this.isDesigner) {
            return 'des-primary';
        } else {
            return 'emp-primary';
        }
    }

    setCurrentUser(user: User) {
        this.currentUser = user;
        if (user.role != 'designer') {
            this.isDesigner = false;
        } else {
            this.isDesigner = true;
        }
    }

    defaultUser: any = {
        nickname: 'Marty 薄荷创意',
        role: '00',
        phone: '1234567890',
        password: '123456',
        realname: '王晓峰',
        summary: '我只是一个普通的设计师',
        position: '原型设计师',
        school: '某哈某佛大学',
        service_length: '7年',
        type: '建筑设计'
    }

    defaultToken: any = {
        id: 'default_id',
        uid: ''
    }

    initDefaultUser(isDesigner: boolean) {
        if (isDesigner) {
            this.currentUser = {
                nickname: 'Marty 薄荷创意',
                role: '00',
                phone: '1234567890',
                password: '123456',
                realname: '王晓峰',
                summary: '我只是一个普通的设计师',
                position: '原型设计师',
                school: '某哈某佛大学',
                service_length: '7年',
                type: '建筑设计'
            }
            this.isDesigner = true;
        } else {
            this.currentUser = {
                nickname: 'Marty 薄荷创意',
                role: '01',
                phone: '1234567890',
                password: '123456',
                realname: '王晓峰',
                summary: '我只是一个雇主',
                position: '原型雇主',
                school: '某哈某佛大学',
                service_length: '7年',
                type: '建筑设计'
            }
            this.isDesigner = false;
        }
    }

}