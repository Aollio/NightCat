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

        let state = State.INSTANCE
        for (let session of obj) {
            state.sessionlist.push(session)
            state.sessionMap[session.id] = session
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
        let state = State.INSTANCE
        let sessionlist = state.sessionlist
        state.sessionMap[session.id] = session
        //find previous session
        let preSession = null
        for (let sess of sessionlist) {
            if (sess.id === session.id) {
                preSession = sess
            }
        }
        //if this session is new session, add to the sessions list and map
        if (preSession == null) {
            state.sessionMap[session.id] = session
            return
        }
        //update previous session, don't set new reference
        for (let field in session) {
            preSession[field] = session[field]
        }
    }
}