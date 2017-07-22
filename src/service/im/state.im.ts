import {Messages} from "./msgs.im";

export class State {

    //注意!!! 单例在im.service.ts ImService中生成
    public static INSTANCE: State = new State()

    //是否正在加载
    isLoading: any = true
    // 操作是否是刷新页面，刷新初始没有nim实例，会导致时序问题
    isRefresh: any = true
    // 全屏显示的原图
    isFullscreenImgShow: any = false
    fullscreenImgSrc: any = ''
    // 切页动画 forward，backward
    // transitionName : any =  'forward' 

    // IM相关
    // NIM SDK 实例
    nim: any = null
    // 登录账户ID
    userUID: any = null
    // 登录用户名片
    myInfo: any = {}
    // 好友/黑名单/陌生人名片  数据结构如：{account : any =  {attr : any =  ...}  ...}
    userInfos: any = {}
    // 用户订阅的事件同步  数据结构如：{cid : any =  {typeid : any =  {...}  ...}  ...}
    userSubscribes: any = {}

    // 好友列表
    friendslist: any = []
    blacklist: any = []

    // 消息列表
    msgs: any = {}  // 以sessionId作为key
    // 会话列表
    sessionlist: Array<any> = []
    sessionMap: any = {}
    // 当前会话ID（即当前聊天列表，只有单聊群聊采用，可用于判别）
    currSessionId: any = null
    currSessionMsgs: any = []
    // 是否有更多历史消息，用于上拉加载更多
    noMoreHistoryMsgs: any = false

    // 系统消息
    sysMsgs: any = []
    customSysMsgs: any = []
    sysMsgUnread: any = {
        total: 0
    }
    customSysMsgUnread: any = 0

    // 临时变量
    // 缓存需要获取的用户信息账号 如searchUser
    searchedUsers: any = []
    // 缓存需要获取的群组账号
    searchedTeams: any = []


    setCurrentSessionId(sessionId) {
        this.currSessionId = sessionId
        this.currSessionMsgs = this.msgs[sessionId]
    }

    //新收到的消息 递交到消息全局变量中
    commitMessage(msg) {
        if (!Messages.preHandleMessage(msg)) {
            return
        }

        if (!this.msgs[msg.sessionId]) {
            this.msgs[msg.sessionId] = []
        }
        this.msgs[msg.sessionId].push(msg)
    }

    commitMessageList(msgs) {
        for (let msg of msgs) {
            this.commitMessage(msg)
        }
    }


    //根据账号来获取友好昵称，并缓存用户信息到State中
    //返回一个Promise，User as 用户名片
    getUserByAccount(account): Promise<any> {
        if (account == this.myInfo.account) {
            return this.myInfo
        }

        let cache = this.userInfos[account]
        if (cache != null) {
            return Promise.resolve(cache)
        }

        return new Promise((resolve, reject) => {
            State.INSTANCE.nim.getUser({
                account: account,
                done: (error, user) => {
                    if (!error && user) {
                        //set cache
                        State.INSTANCE.userInfos[account] = user
                        resolve(user)
                    } else {
                        reject(error)
                    }
                }
            })
        })
    }


}