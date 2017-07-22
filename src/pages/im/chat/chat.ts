import {Component} from "@angular/core";
import {State} from "../../../service/im/state.im";
import {NavParams} from "ionic-angular";

@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html'
})
export class ChatPage {


    msglist: Array<any> = [
        {
            flow: 'in',
            showTime: 1500607363964,
            type: 'text',
            showText: '测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息测试信息'
        },
        {flow: 'out', showTime: 1500607463964, type: 'text', showText: '测试信息'},
        {flow: 'in', showTime: 1500607563964, type: 'text', showText: '测试信息'},
        {flow: 'out', showTime: 1500607663964, type: 'text', showText: '测试信息'},
    ]

    userInfos: any
    myInfo: any

    sessionId: string

    to: string

    constructor(public param: NavParams) {
        let sessionId = this.param.get('sessionId')



        let state = State.INSTANCE
        state.setCurrentSessionId(sessionId)

        console.log('chat:\n',state)

        this.sessionId = sessionId
        this.userInfos = state.userInfos
        this.myInfo = state.myInfo
        this.to = state.sessionMap[sessionId].to

        this.msglist = state.msgs[sessionId]
        // this.sessionId = '123456'

        // this.userInfos = State.INSTANCE.userInfos
        // this.robotInfos = State.INSTANCE.robotInfos
        // this.myInfo = State.INSTANCE.myInfo

        // this.sessionId = '123456'
        // this.to = 'aollioaollio'
        // this.userInfos = {}
        // this.robotInfos ={}
        // this.myInfo = {}
    }

}