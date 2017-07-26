import {Component} from "@angular/core";
import {ImService} from "../../service/im/service.im";
import {State} from "../../service/im/state.im";
import {Util} from "../../service/util";
import {ChatPage} from "./chat/chat";
import {NavController} from "ionic-angular";

@Component({
    selector: 'page-im',
    templateUrl: 'im.html'
})
export class IMPage {

    sessions: any

    sessionNameMap: any = {}


    constructor(public imServ: ImService,
                public nav: NavController,
                public util: Util) {

        let loading = this.util.createLoading("加载消息列表中...")


        if (imServ.state.isLoading) {
            loading.present()
            console.log("正在加载")
            //如果还没有初始化NIM模块, 则开始初始化
            this.imServ.initializeNim()
            this.imServ.registerSyncDone(() => {
                loading.dismiss();
                this.initFriendlyName()
            })

        } else {
            this.initFriendlyName()
            console.log(this.sessions)
            console.log(this.sessionNameMap)
        }
        this.sessions = this.imServ.state.sessionlist
    }


    chat(sessionId) {
        console.log('进入聊天界面:SessionID', sessionId)
        this.nav.push(ChatPage, {
            sessionId: sessionId
        })
    }


    initFriendlyName() {
        for (let sess of this.sessions) {
            this.sessionNameMap[sess.id] = sess.to
            State.INSTANCE.getUserByAccount(sess.to)
                .then(user => this.sessionNameMap[sess.id] = user.nick)
        }
    }


}