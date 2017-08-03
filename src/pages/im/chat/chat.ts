import {Component} from "@angular/core";
import {State} from "../../../service/im/state.im";
import {NavParams} from "ionic-angular";
import {Util} from "../../../service/util";
import {ImService} from "../../../service/im/service.im";
import {SharedService} from "../../../service/share.service";

@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html'
})
export class ChatPage {


    to: string
    //
    // myInfo: any
    //
    // userInfos: any
    //
    // sessionId: string
    //
    // chatobject: string
    //
    // msglist: Array<any>
    //
    message: string = ''

    maincolor;

    constructor(public imServ: ImService,
                public shared:SharedService) {
        this.maincolor=this.shared.getPrimaryColor();
        this.imServ.initializeNim()
    }

    // constructor(public param: NavParams,
    //             public util: Util,
    //             public imServ: ImService) {
    //   //  let sessionId = this.param.get('sessionId')
    //     let state = State.INSTANCE
    //
    //     let loading = util.createLoading('正在加载消息')
    //
    //     //set currentSession
    //     // state.setCurrentSessionAndPreareMsgs(sessionId)
    //     //     .then((obj) => {
    //     //         loading.dismiss()
    //     //         console.log(state)
    //     //         this.msglist = state.currSessionMsgs
    //     //     })
    //     //     .catch((err) => {
    //     //         console.log('chat set session id failed')
    //     //         loading.setContent('加载失败')
    //     //         setTimeout(() => loading.dismiss(), 2000)
    //     //     })
    //
    // //     console.log('chat:\n', state)
    // //
    // //     this.sessionId = sessionId
    // //     this.userInfos = state.userInfos
    // //     this.myInfo = state.myInfo
    // //     this.to = state.sessionMap[sessionId].to
    // //
    // //     this.chatobject = this.to
    // //     //set title is user's nickname, if error, show user's account
    // //     state.getUserByAccount(this.to)
    // //         .then(user => this.chatobject = user.nick)
    // //         .catch(error => console.log(error))
    // // }
    //
    //
    // // sendMessage() {
    // //     if (this.nofitications == null || this.nofitications == '') {
    // //         console.log('消息为空', this.nofitications)
    // //         return
    // //     }
    // //     this.imServ.sendMessage(this.nofitications)
    // //         .then((nofitications) => console.log('发送消息成功', nofitications))
    // //         .catch((error) => console.log('发送消息失败', error))
    //  }


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