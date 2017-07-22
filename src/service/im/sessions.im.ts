import {ImService} from "./service.im";
import {State} from "./state.im";

export class Sessions {


    constructor() {
    }


    /**
     * 回话列表的回调
     * */
    static onSessions(obj) {
        console.log('onSessions')
        console.log(obj)

        for (let session of obj) {
            if (session.scene != 'p2p') {
                continue
            }
            Sessions.updateStateSession(session)
        }

    }

    /**
     * optional
     更新会话的回调, 会传入会话, 以下情况会收到此回调
     收到消息
     发送消息
     设置当前会话
     重置会话未读数
     * */
    static onUpdateSession(session) {
        console.log('onUpdateSession')
        console.log(session)
        Sessions.updateStateSession(session)
    }

    static updateStateSession(session) {

        //find previous session
        let preSession = null
        for (let sess of State.INSTANCE.sessionlist) {
            if (sess.id === session.id) {
                preSession = sess
            }
        }

        //if this session is new session, add to the sessions list and map
        if (preSession == null) {
            State.INSTANCE.sessionMap[session.id] = session
            State.INSTANCE.sessionlist.push(session)
            //set message-session mapping
            let msglist = State.INSTANCE.msgs[session.id]
            if (msglist == null) {
                State.INSTANCE.msgs[session.id] = []
            }
            return
        }

        //update previous session, don't set new reference
        for (let field in session) {
            preSession[field] = session[field]
        }
    }
}