import {Component} from "@angular/core";
import {ImService} from "../../service/im/service.im";
import {State} from "../../service/im/state.im";
import {Util} from "../../service/util";

@Component({
    selector: 'page-im',
    templateUrl: 'im.html'
})
export class IMPage {

    sessions: any

    constructor(public imServ: ImService,
                public util: Util) {

        if (imServ.state.isLoading) {
            //todo 打开加载框
            console.log("正在加载")
            //如果还没有初始化NIM模块, 则开始初始化
            this.imServ.initializeNim()
            this.imServ.registerSyncDone(() => this.initializeDone() )
            this.util.presentLoading("加载消息列表中...")
        }
        this.sessions = this.imServ.state.sessionlist
        console.log('all msg')
        console.log(State.INSTANCE.msgs)
    }

    initializeDone() {
        this.util.hideLoading()
    }



    chat(sessionId) {
        console.log('进入聊天界面:SessionID', sessionId)
    }


}