import {Injectable} from "@angular/core";
import {Util} from "./util";

@Injectable()
export class KeynoteService {

    constructor(private util: Util) {
    }

    users = [
        {
            uid: "1",
            nickname: '7788设计',
            role: 0,
            phone: '1',
            password: '123456',
            realname: '蓝晓峰',
            summary: ' 负责设计，采购，材料表制作，摆场等软装配套服务。主要作品有中山建华样板房，贵阳山水黔城样板房，韶关森林官邸样板房等。2006年以前在室内设计公司工作，担任材料配饰及绘图工作。',
            position: '原型设计师',
            school: '哈佛大学',
            service_length: '7年',
            type: '建筑设计',
            img_url: 'assets/img/if_cat_emoji_face_smily-49-01_2361838.png'
        },
        {
            uid: "2",
            nickname: 'Marty 薄荷创意',
            role: 1,
            phone: '2',
            password: '123456',
            realname: '王晓峰',
            summary: '我只是一个普通的雇主',
            position: '超级雇主',
            school: '某哈某佛大学',
            service_length: '7年',
            type: '建筑设计',
            img_url: 'assets/img/if_cat_emoji_face_smily-38-01_2361877.png'

        },
        {
            uid: "3",
            nickname: 'Marty 薄荷创意',
            role: 0,
            phone: '3',
            password: '123456',
            realname: '王晓峰',
            summary: '我只是一个普通的设计师',
            position: '原型设计师',
            school: '某哈某佛大学',
            service_length: '7年',
            type: '建筑设计',
            img_url: 'assets/img/if_cat_emoji_face_smily-29-01_2361869.png'

        },
        {
            uid: "4",
            nickname: 'Marty 薄荷创意',
            role: 1,
            phone: '4',
            password: '123456',
            realname: '王晓峰',
            summary: '我只是一个普通的雇主',
            position: '超级雇主',
            school: '某哈某佛大学',
            service_length: '7年',
            type: '建筑设计',
            img_url: 'assets/img/if_cat_emoji_face_smily-35-01_2361874.png'

        },
    ]

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
            newUser = {
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

    default_employer = {}

    default_designer = {}

    projects = [
        {
            "id": "id0",
            "title": "园区导师, 布点规划, 文化导入",
            "type": "建筑设计",
            "content": "项目内容, 画出一个设计图",
            "budget": 100000000,
            "area_count": 100,
            "depth": 0,
            "period": 129,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "status": "00",
            "create_by": "1",
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
            "audit_time": "",
            "img_url": '/assets/img/des-1.png'
        },
        {
            "id": "id1",
            "title": "园区导师, 布点规划, 文化导入",
            "type": "建筑设计",
            "content": "结构设计要求如下：1.按照所提供的三维模型设计达到指定功能要求。\n" +
            "            2.复杂完整的模型图。3.根据手绘完成设计图",
            "budget": 100000000,
            "area_count": 100,
            "depth": 10,
            "period": 21,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "status": "00",
            "create_by": "1",
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
            "audit_time": "",
            "img_url": '/assets/img/des-1.png'

        },
        {
            "id": "id2",
            "title": "园区导师, 布点规划, 文化导入",
            "type": "建筑设计",
            "content": "结构设计要求如下：1.按照所提供的三维模型设计达到指定功能要求。\n" +
            "            2.复杂完整的模型图。3.根据手绘完成设计图",
            "budget": 100000000,
            "area_count": 100,
            "depth": 20,
            "period": 42,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "status": "00",
            "create_by": "4",
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
            "audit_time": "",
            "img_url": '/assets/img/des-1.png'

        }, {
            "id": "id3",
            "title": "园区导师, 布点规划, 文化导入",
            "type": "建筑设计",
            "content": "结构设计要求如下：1.按照所提供的三维模型设计达到指定功能要求。\n" +
            "            2.复杂完整的模型图。3.根据手绘完成设计图",
            "budget": 100000000,
            "area_count": 100,
            "depth": 30,
            "period": 63,
            "start_time": 1500882001493,
            "end_time": 1500882001493,
            "status": "00",
            "create_by": "4",
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
            "audit_time": "",
            "img_url": '/assets/img/des-1.png'

        }
    ]
}