import {Injectable} from "@angular/core";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {User} from "../model/user";

@Injectable()
export class SharedService {


    DEBUG: boolean = true

    isDesigner: boolean = true;

    currentUser: User;

    constructor() {
        this.initDefaultUser();
    }

    getNavColor() {
        if (this.isDesigner) {
            return 'nav-des-bg';
        } else {
            return 'nav-emp-bg';
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

    initDefaultUser() {
        this.currentUser = {
            nickname: 'Marty 薄荷创意',
            role: 'employer',
            phone: '1234567890',
            password: '123456',
            realname: '王晓峰',
            summary: '我只是一个普通的设计师',
            position: '原型设计师',
            school: '某哈某佛大学',
            service_length: '7年',
            type: '建筑设计'
        }
    }

}