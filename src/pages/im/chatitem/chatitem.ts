import {Component, Input, NgModule} from "@angular/core";
import {State} from "../../../service/im/state.im";
import {Util} from "../../../service/util";
import {Emoji} from "../../../model/emoji";

@Component({
    selector: 'chat-item',
    templateUrl: 'chatitem.html'
})
export class ChatItemComponent {

    // 类型，chatroom, session
    @Input() type: string

    constructor(public util: Util) {
    }


    @Input() rawMsg: any
    @Input() msg: any

    @Input() userInfos: any
    @Input() myInfo: any
    @Input() isRobot: boolean = false
    @Input() robotInfos: any
    @Input() key: any

    // data() {
    //     return {
    //         msg: '',
    //         isFullImgShow: false,
    //         currentAudio: null
    //     }
    // }


    // computed: any = {
    //     robotInfos() {
    //         return this.$store.state.robotInfos
    //     }
    // }


    beforeMount() {
        let item = this.rawMsg
        // 标记用户，区分聊天室、普通消息
        if (this.type === 'session') {
            if (item.flow === 'in') {
                if (item.from !== State.INSTANCE.userUID) {
                    item.avatar = (this.userInfos[item.from] && this.userInfos[item.from].avatar)
                        || "assets/img/des-1.png"
                    // item.link = `#/namecard/${item.from}`
                } else {
                    item.avatar = this.myInfo.avatar
                }
            } else if (item.flow === 'out') {
                item.avatar = this.myInfo.avatar
            }
        } else {
            // 标记时间，聊天室中
            item.showTime = this.util.formatDate(item.time)
        }
        if (item.type === 'timeTag') {
            // 标记发送的时间
            item.showText = item.text
        } else if (item.type === 'text') {
            // 文本消息 //todo
            item.showText = this.util.escape(item.text)
            if (/\[[^\]]+\]/.test(item.showText)) {
                let emojiItems = item.showText.match(/\[[^\]]+\]/g)
                emojiItems.forEach(text => {
                    let emojiCnt = Emoji.emojiList.emoji
                    if (emojiCnt[text]) {
                        item.showText = item.showText.replace(text, `<img class="emoji-small" src="${emojiCnt[text].img}">`)
                    }
                })
            }
        }
        else if (item.type === 'image') {
            // 原始图片全屏显示
            item.originLink = item.file.url
        } else if (item.type === 'audio') {
            item.audioSrc = item.file.mp3Url
            item.showText = Math.round(item.file.dur / 1000) + '" 点击播放'
        } else if (item.type === 'file') {
            item.fileLink = item.file.url
            item.showText = item.file.name
        } else if (item.type === 'notification') {
            //这是聊天室相关
            // 对于系统通知，更新下用户信息的状态
            // item.showText = this.util.generateChatroomSysMsg(item)
        } else if (item.type === 'tip') {
            //对于系统通知，更新下用户信息的状态
            item.showText = item.tip
        }
        else {
            // item.showText = `[${this.util.mapMsgType(item)}],请到手机或电脑客户端查看`
            item.showText = `[${this.util.mapMsgType(item)}],暂时不支持`
        }
        this.msg = item
    }


    // mounted() {
    //     let item = this.msg
    //     有时序问题的操作
    // this.$nextTick(() => {
    //     let media = null
    //     if (item.type === 'image') {
    //         图片消息缩略图
    // media = new Image()
    // media.src = item.file.url + '?imageView&thumbnail=180x0&quality=85'
    // }else if (item.type === 'custom-type3') {
    //     贴图表情
    // media = new Image()
    // media.className = 'emoji.ts-big'
    // media.src = item.imgUrl
    // } else if (item.type === 'video') {
    //     if (/(mov|mp4|ogg|webm)/i.test(item.file.ext)) {
    //         media = document.createElement('video')
    //         media.src = item.file.url
    //         media.width = 640
    //         media.height = 480
    //         media.autoStart = false
    //         media.preload = 'metadata'
    //         media.controls = 'controls'
    //     } else {
    //         let aLink = document.createElement('a')
    //         aLink.href = item.file.url
    //         aLink.target = '_blank'
    //         aLink.innerHTML = `<i class="u-icon icon-file"></i>${video.name}`
    //         this.$refs.mediaMsg.appendChild(aLink)
    //     }
    // }
    // if (media) {
    //     if (this.$refs.mediaMsg) {
    //         this.$refs.mediaMsg.appendChild(media)
    //     }
    //     media.onload = () => {
    //         this.$emit('msg-loaded')
    //     }
    //     media.onerror = () => {
    //         this.$emit('msg-loaded')
    //     }
    // } else {
    //     this.$emit('msg-loaded')
    // }
    // }) // end this.nextTick
    // }
    //
    //
    // revocateMsg(vNode) {
    //     在会话聊天页
    //     if (this.$store.state.currSessionId) {
    //     if (vNode && vNode.data && vNode.data.attrs) {
    //         let attrs = vNode.data.attrs
    //         if (attrs.type === 'robot') {
    //             return
    //         }
    //
    //         自己发的消息
    // if (attrs.flow === 'out') {
    //     let that = this
    //     this.$vux
    //         .confirm
    //         .show({
    //             title: '确定需要撤回消息',
    //             onCancel() {},
    //             onConfirm() {
    //                 that.$store.dispatch('revocateMsg', {
    //                     idClient: attrs.idClient
    //                 })
    //             }
    //         })
    // }
    //
    // }
    // }
    // }


    // sendRobotBlockMsg(msg, originMsg) {
    //     let body = '[复杂按钮模板触发消息]'
    //     if (msg.text && msg.text.length === 1) {
    //         body = msg.text[0].text
    //     }
    //     let robotAccid = originMsg.content.robotAccid
    //     if (!this.isRobot) {
    //         body = `@${this.robotInfos[robotAccid].nick} ${body}`
    //     }
    //     this.$store.dispatch('sendRobotMsg', {
    //         type: 'link',
    //         scene: originMsg.scene,
    //         to: originMsg.to,
    //         robotAccid,
    //         机器人后台消息
    // params: msg.params,
    // target: msg.target,
    // 显示的文本消息
    // body
    // })
    // }
    //

    // continueRobotMsg(robotAccid) {
    //     this.$store.dispatch('continueRobotMsg', robotAccid)
    // }


    // showFullImg(src) {
    //     this.$store.dispatch('showFullscreenImg', {
    //         src
    //     })
    // }


    // playAudio(src) {
    //     if (!this.currentAudio) {
    //         this.currentAudio = new Audio(src)
    //         this.currentAudio.play()
    //         this.currentAudio.onended = () => {
    //             this.currentAudio = null
    //         }
    //     }
    // }
    // }

}
