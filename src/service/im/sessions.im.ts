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
        for (let i in obj) {
            state.sessionlist.push(obj[i])
            state.sessionMap.set(obj[i].sessionId, obj[i])
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
        state.sessionMap.set(session.id, session)
        for (let i in sessionlist) {
            if (sessionlist[i].id === session.sessionId) {
                sessionlist[i] = session
            }
        }
    }
}