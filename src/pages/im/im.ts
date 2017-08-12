import {Component} from "@angular/core";
import {ImService} from "../../service/im/service.im";
import {Util} from "../../service/util";
import {ChatPage} from "./chat/chat";
import {ModalController, NavController} from "ionic-angular";
import {SharedService} from "../../service/share.service";
import {LoginPage} from "../common/login/login";
import {State} from "../../service/im/state.im";
import {UsersService} from "../../service/ajax/users.service";

@Component({
    selector: 'page-im',
    templateUrl: 'im.html'
})
export class IMPage {

    sessions: any

    sessionNameMap: any = {}

    im = IMPage;
    maincolor;
    designer;

    constructor(public imServ: ImService,
                public nav: NavController,
                public util: Util,
                private modal: ModalController,
                public shared: SharedService,
                private userServ: UsersService) {
        this.maincolor = this.shared.getPrimaryColor();
        this.designer = this.shared.isDesModule();
        this.sessions = this.imServ.state.sessionlist
    }


    ionViewDidEnter() {

        if (!this.shared.isLogin()) {
            this.modal.create(LoginPage).present();
            return
        }

        let loading = this.util.createLoading("加载消息列表中...")


        if (this.imServ.state.isLoading) {
            loading.present()
            console.log("正在加载")
            //如果还没有初始化NIM模块, 则开始初始化
            this.imServ.initializeNim(this.shared.getCurrentUser().imtoken)
            this.imServ.registerSyncDone(() => {
                loading.dismiss();
                this.initFriendlyName()
            })

        } else {
            this.initFriendlyName()
            console.log(this.sessions)
            console.log(this.sessionNameMap)
        }
    }


    chat(session) {
        console.log('进入聊天界面: account', session)
        this.nav.push(ChatPage, {
            account: session.to
        })
    }

    initFriendlyName() {
        console.log("初始化友好名字")
        for (let sess of this.sessions) {
            this.sessionNameMap[sess.id] = sess.to
            this.userServ.getInfoByAccid(sess.to)
                .then(user => this.sessionNameMap[sess.id] = user.nickname)
        }
    }

    doRefresh(refresher) {
        console.log('Begin async operation', refresher);

        setTimeout(() => {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    }


}