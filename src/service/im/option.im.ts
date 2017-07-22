import {ImService} from "./service.im";
import {Messages} from "./msgs.im";
import {Sessions} from "./sessions.im";
import {System} from "./system.im";
import {ImConfig} from "./config.im";
import {Friends} from "./friends.im";

export class Option {


    db: boolean = false
    debug = false
    appKey = ImConfig.appkey

    account = ImConfig.userinfo.account
    //帐号的 token  用于建立连接
    token = ImConfig.userinfo.token

    //----System----
    onconnect = System.onConnect
    onwillreconnect = System.onWillReconnect
    ondisconnect = System.onDisconnect
    onerror = System.onError
    onsyncdone = System.onSyncDone

    //----Messages----

    // 收到消息的回调  会传入消息对象
    // 当前登录帐号在其它端发送消息之后也会收到此回调  注意此时消息对象的from字段就是当前登录的帐号
    onmsg = Messages.onMsgs
    // 是否同步漫游消息, 默认true. 如果传false就收不到漫游消息, 即不会收到onroamingmsgs回调.
    // syncRoamingMsgs: boolean = true
    //同步离线消息的回调  每个会话对应一个回调  会传入消息数组
    onofflinemsgs = Messages.onOfflineMsgs
    //同步漫游消息的回调  每个会话对应一个回调  会传入消息数组
    onroamingmsgs = Messages.onRoamingMsgs
    //收到系统通知的回调  会传入系统通知
    onsysmsg = Messages.onSysMsgs


    //----Sessions----
    onsessions = Sessions.onSessions
    onupdatesession = Sessions.onUpdateSession

    //----Friends && Users----
    onmyinfo = (user) => Friends.onMyInfo(user)
    onupdatemyinfo = (user) => Friends.onUpdateMyInfo(user)
    //是否同步好友对应的用户名片列表, 默认true, 如果传false就收不到onusers回调.
    syncFriendUsers: boolean = true
    //同步好友用户名片的回调, 会传入用户名片数组
    onusers = (userlist) => Friends.onUsers(userlist)
}