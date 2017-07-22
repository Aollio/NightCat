import {State} from "./state.im";
import {Util} from "../util";
import {Emoji} from "../../model/emoji";

export class Messages {


    constructor() {
    }

    //get history messages, return message list as promise
    static getHistoryMsgs(to): Promise<any> {

        return new Promise((resolve, reject) => {
            let options = {
                scene: 'p2p',
                to: to,
                reverse: false,
                asc: true,
                limit: 20,
                done: (error, obj) => {
                    if (obj.msgs) {
                        if (obj.msgs.length === 0) {
                            console.log('no more history messages')
                            // commit('setNoMoreHistoryMsgs')
                        }
                        resolve(obj.msgs)
                    } else {
                        reject(error)
                    }
                }
            }
            State.INSTANCE.nim.getHistoryMsgs(options)
        })

    }

    /**
     * 处理消息的回调
     * */
    static onOfflineMsgs(obj) {
        console.log('onOfflineMsgs')
        console.log(obj)
        //msgs是一个消息数组
        State.INSTANCE.commitMessageList(obj.msgs)
    }

    static onRoamingMsgs(obj) {
        console.log('onRoamingMsgs')
        console.log(obj)
        //msgs是一个消息数组
        State.INSTANCE.commitMessageList(obj.msgs)
    }

    static onMsgs(msg) {
        console.log('onMsgs')
        console.log(msg)
        State.INSTANCE.commitMessage(msg)
    }

    static onSysMsgs(obj) {
        console.log('onSysMsgs')
        console.log(obj)
    }

    static preHandleMessage(msg): boolean {
        //NOTE!!! 过滤非点对点消息, 即过滤群聊/机器人消息等等
        if (msg.scene !== 'p2p') {
            return false
        }
        //友好格式化信息内容和显示时间等等
        Messages.formatMsg(msg)
        return true
    }

    //预处理消息
    static formatMsg(msg) {

        let util = Util.INSTANCE

        // 标记时间，聊天室中
        msg.showTime = util.formatDate(msg.time)
        if (msg.type === 'text') {
            // 文本消息
            msg.showText = util.escape(msg.text)
            if (/\[[^\]]+\]/.test(msg.showText)) {
                let emojiItems = msg.showText.match(/\[[^\]]+\]/g)
                emojiItems.forEach(text => {
                    let emojiCnt = Emoji.emojiList.emoji
                    if (emojiCnt[text]) {
                        msg.showText = msg.showText.replace(text, `<img class="emoji-small" src="${emojiCnt[text].img}">`)
                    }
                })
            }
        }
        else if (msg.type === 'image') {
            // 原始图片全屏显示
            msg.originLink = msg.file.url
        }
        else if (msg.type === 'file') {
            msg.fileLink = msg.file.url
            msg.showText = msg.file.name
        }
        else if (msg.type === 'tip') {
            //对于系统通知，更新下用户信息的状态
            msg.showText = msg.tip
        }
        else {
            // item.showText = `[${this.util.mapMsgType(item)}],请到手机或电脑客户端查看`
            msg.showText = `[${util.mapMsgType(msg)}],暂时不支持`
        }
    }

}