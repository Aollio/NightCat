import {Component} from "@angular/core";
import {State} from "../../../service/im/state.im";
import {NavParams} from "ionic-angular";

@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html'
})
export class ChatPage {


    msglist: Array<any> = [
        {flow: 'in', showTime: 1500607363964, type: 'text', showText: '测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息'},
        {flow: 'out', showTime: 1500607463964, type: 'text', showText: '测试信息'},
        {flow: 'in', showTime: 1500607563964, type: 'text', showText: '测试信息'},
        {flow: 'out', showTime: 1500607663964, type: 'text', showText: '测试信息'},
    ]

    userInfos: any
    robotInfos: any
    myInfo: any
    isRobot = false

    sessionId:string

    to:string

    constructor(public param: NavParams) {
        // let sessionId = this.param.get('sessionId')
        this.sessionId = '123456'

        // this.userInfos = State.INSTANCE.userInfos
        // this.robotInfos = State.INSTANCE.robotInfos
        // this.myInfo = State.INSTANCE.myInfo

        this.sessionId = '123456'
        this.to = 'aollioaollio'
        this.userInfos = {}
        this.robotInfos ={}
        this.myInfo = {}
    }

}