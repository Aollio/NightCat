import {Injectable} from "@angular/core";
import {SharedService} from "./share.service";
import {Util} from "./util";

@Injectable()
export class KeynoteService {

    constructor(private util: Util) {
    }

    initDefaultUser(isDesigner: boolean, share) {
        let newUser;
        if (isDesigner) {
            newUser = {
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

            share.currentModuleIsDesigner = true;
        } else {
            newUser  = {
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
            };
            share.currentModuleIsDesigner = false;
        }
        this.util.updateObj(share.getCurrentUser(), newUser);
    }


    ad_designer_home_slides = [
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
        {url: 'assets/img/home-default.png'},
    ]

    user: any = {
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
    };

    token: any = {
        id: 'default_id',
        uid: ''
    };

    projects = [
        {
            "id": "id0",
            "title": "园区导师, 布点规划, 文化导入",
            "type": "建筑设计",
            "content": "项目内容, 画出一个设计图",
            "budget": 100000000,
            "area_count": 0,
            "depth": 0,
            "period": 0,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "status": "00",
            "create_by": "",
            "create_time": 1500882001493,
            "good": true,
            "modify_by": "",
            "modify_time": "",
            "modify_remark": "",
            "due_time": 1500882001493,
            "view_count": 0,
            "fav_count": 0,
            "bidder": "",
            "bid_time": "",
            "audit_by": "",
            "audit_time": ""
        },
        {
            "id": "id1",
            "title": "园区导师, 布点规划, 文化导入",
            "type": "建筑设计",
            "content": "项目内容, 画出一个设计图",
            "budget": 100000000,
            "area_count": 1,
            "depth": 10,
            "period": 21,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "status": "00",
            "create_by": "",
            "create_time": 1500882001493,
            "good": false,
            "modify_by": "",
            "modify_time": "",
            "modify_remark": "",
            "due_time": 1500882001493,
            "view_count": 12,
            "fav_count": 18,
            "bidder": "",
            "bid_time": "",
            "audit_by": "",
            "audit_time": ""
        },
        {
            "id": "id2",
            "title": "园区导师, 布点规划, 文化导入",
            "type": "建筑设计",
            "content": "项目内容, 画出一个设计图",
            "budget": 100000000,
            "area_count": 2,
            "depth": 20,
            "period": 42,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "status": "00",
            "create_by": "",
            "create_time": 1500882001493,
            "good": true,
            "modify_by": "",
            "modify_time": "",
            "modify_remark": "",
            "due_time": 1500882001493,
            "view_count": 24,
            "fav_count": 36,
            "bidder": "",
            "bid_time": "",
            "audit_by": "",
            "audit_time": ""
        }, {
            "id": "id3",
            "title": "园区导师, 布点规划, 文化导入",
            "type": "建筑设计",
            "content": "项目内容, 画出一个设计图",
            "budget": 100000000,
            "area_count": 3,
            "depth": 30,
            "period": 63,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "status": "00",
            "create_by": "",
            "create_time": 1500882001493,
            "good": false,
            "modify_by": "",
            "modify_time": "",
            "modify_remark": "",
            "due_time": 1500882001493,
            "view_count": 36,
            "fav_count": 54,
            "bidder": "",
            "bid_time": "",
            "audit_by": "",
            "audit_time": ""
        }
    ]
}