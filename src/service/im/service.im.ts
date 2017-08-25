import {Injectable} from "@angular/core";
import {Messages} from "./msgs.im";
import {State} from "./state.im";
import {System} from "./system.im";
import {Option} from "./option.im";
import {Util} from "../util";
import {Emoji} from "../../model/emoji";


//import netease NIM sdk from src/js/nim.js
declare let NIM: any;

@Injectable()
export class ImService {


    //全局状态
    public state: State


    private options: any


    constructor(public util: Util) {
        this.state = State.INSTANCE
        Util.INSTANCE = util
        Emoji.initalize()

        console.log(this.state)
        this.options = new Option()
    }

    //send text nofitications
    sendMessage(account, text, scene = 'p2p'): Promise<any> {
        return new Promise((resolve, reject) => {
            let nim = this.state.nim
            let msg = nim.sendText({
                scene: 'p2p',
                to: account,
                text: text,
                done: (error, msg) => {
                    if (!error) {
                        //update msg state
                        resolve(msg)
                    } else {
                        reject(error)
                    }
                }
            })
            //send msg, the variable msg's state is not 'success'
            //but need push msg to the state msgs and currentMsgs
            console.log('send nofitications not done ok')

            Messages.preHandleMessage(msg)
            let belongmsgs = this.state.msgs['p2p-' + account]
            if (belongmsgs == null) {
                belongmsgs = []
                this.state.msgs['p2p-' + account] = belongmsgs
            }
            belongmsgs.push(msg)
        })
    }

    //初始化NIM
    initializeNim(user) {
        console.log(this.state)
        this.options.token = user.imtoken;
        this.options.account = user.accid;
       // this.state.nim = NIM.getInstance(this.options)
    }

    //注册第一次初始化的回调事件
    registerSyncDone(func) {
        System.customSyncDone(func)
    }

    registerSyncError(func) {
        System.customSyncError(func)
    }

    //关闭NIM
    closeNim() {
        State.INSTANCE.nim.disconnect();
    }


    setToken(user: any) {
        this.initializeNim(user);
    }
}