import {State} from "./state.im";

export class Friends {

    static onMyInfo(myinfo) {
        State.INSTANCE.myInfo = myinfo
    }

    static onUpdateMyInfo(myinfo) {
        for (var field in myinfo) {
            State.INSTANCE.myInfo[field] = myinfo[field]
        }
    }

    static onUsers(userlist){
        let state = State.INSTANCE
        for (let userinfo of userlist){
            state.userInfos[userinfo.account]=userinfo
        }
    }
}