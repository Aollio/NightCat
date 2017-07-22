import {Injectable} from "@angular/core";
import {ImConfig} from "./config.im";
import {Messages} from "./msgs.im";
import {Sessions} from "./sessions.im";
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

    //send text message
    sendMessage(text, scene = 'p2p'): Promise<any> {
        let session = this.state.sessionMap[this.state.currSessionId]
        return new Promise((resolve, reject) => {
            let nim = this.state.nim
            let msg = nim.sendText({
                scene: 'p2p',
                to: session.to,
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
            console.log('send message not done ok')

            Messages.preHandleMessage(msg)
            let belongmsgs = this.state.msgs[session.id]
            if (belongmsgs == null) {
                belongmsgs = []
                this.state.msgs[session.id] = belongmsgs
            }
            belongmsgs.push(msg)
        })
    }

    //初始化NIM
    initializeNim() {
        console.log(this.state)
        this.state.nim = NIM.getInstance(this.options)
    }

    //注册第一次初始化的回调事件
    registerSyncDone(func) {
        System.customSyncDone(() => func())
    }

    //关闭NIM
    closeNim() {
        State.INSTANCE.nim.disconnect();
    }


}