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
                this.msglist = state.currSessionMsgs;
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


    sendMessage() {
        if (this.message == null || this.message == '') {
            console.log('消息为空', this.message)
            return
        }
        this.imServ.sendMessage(this.toAccount, this.message)
            .then((message) => {
                console.log('发送消息成功', message)
                this.message = ""

                this.scroll2bottom();
            })
            .catch((error) => console.log('发送消息失败', error))
    }


    scroll;

    ionViewDidLoad() {
        this.scroll = document.querySelector("page-chat .messages");

        setTimeout(()=>{
            this.scroll.scrollTop = this.scroll.scrollHeight;
        },100)
    }

    scroll2bottom() {
        this.scroll_To(this.scroll, this.scroll.scrollHeight - this.scroll.clientHeight);
    }

    //滚动条函数封装
    scroll_To(element, tar_y) { //tar_y 即滑动条顶端 距离页面最上面的距离
        let step = 40; //步长系数 即剩余的距离除以40 每1ms 移动一段距离

        let timer = setTimeout(() => {
            let current_y = element.scrollTop;
            if (tar_y > current_y) { //即向下滚动
                let dist = Math.ceil((tar_y - current_y) / step)
                let next_y = current_y + dist
                if (next_y < tar_y) {
                    element.scrollTop = next_y;
                    this.scroll_To(element, tar_y)
                } else {
                    element.scrollTop = tar_y;
                }
            } else { // 即向上滚动
                let dist = Math.floor((tar_y - current_y) / step)
                let next_y = current_y + dist
                if (next_y > tar_y) {
                    element.scrollTop = next_y;
                    this.scroll_To(element, tar_y)
                } else {
                    element.scrollTop = tar_y;
                }
            }
        }, 1)
    }


}