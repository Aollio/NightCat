import {Component} from "@angular/core";
import {State} from "../../../service/im/state.im";
import {NavParams} from "ionic-angular";
import {Util} from "../../../service/util";
import {ImService} from "../../../service/im/service.im";
import {SharedService} from "../../../service/share.service";
import {UsersService} from "../../../service/ajax/users.service";

@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html'
})
export class ChatPage {


    to = {}
    myInfo: any

    sessionId: string

    msglist: Array<any>

    message: string = ''

    maincolor;

    toAccount;

    me;


    ionViewDidEnter() {
        this.scollToBottom();
    }

    constructor(public param: NavParams,
                public util: Util,
                public imServ: ImService,
                public shared: SharedService,
                public userServ: UsersService) {

        this.maincolor = this.shared.getPrimaryColor();
        let account = this.param.get('account')

        this.toAccount = account;
        this.me = shared.getCurrentUser();

        userServ.getInfoByAccid(account).then(user => util.updateObj(this.to, user));

        let sessionId = 'p2p-' + account;

        let state = State.INSTANCE

        let loading = util.createLoading('正在加载消息')

        // set currentSession
        state.setCurrentSessionAndPreareMsgs(sessionId)
            .then((obj) => {
                loading.dismiss()
                console.log(state)
                this.msglist = state.currSessionMsgs
            })
            .catch((err) => {
                console.log('chat set session id failed')
                loading.setContent('加载失败')
                setTimeout(() => loading.dismiss(), 2000)
            })
        console.log('chat:\n', state)

        this.sessionId = sessionId
        this.myInfo = state.myInfo


    }

    scollToBottom() {
        console.log("scoll to buttom")
        let scrolls = document.getElementsByClassName("scroll-content");
        scrolls[scrolls.length - 1].scrollTop = scrolls[scrolls.length - 1].scrollHeight;
    }

    sendMessage() {
        if (this.message == null || this.message == '') {
            console.log('消息为空', this.message)
            return
        }
        this.imServ.sendMessage(this.toAccount, this.message)
            .then((message) => {
                console.log('发送消息成功', message)
                this.message = ""
            })
            .catch((error) => console.log('发送消息失败', error))
    }


// <ion-content>
// <div class="chat">
//     <div class="messages">
//     <div class="messages-content">
//     <div *ngFor="let nofitications of msglist">
//     <div class="nofitications" [class.nofitications-personal]="nofitications.flow === 'out'">
//         {{ nofitications.showText }}
// <div class="timestamp"> {{ nofitications.showTime }}</div>
// </div>
// </div>
// </div>
// </div>
//
// </div>
// <div class="bg"></div>
//     </ion-content>

}