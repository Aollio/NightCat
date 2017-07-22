import {State} from "./state.im";

export class Friends {

    static onMyInfo(myinfo) {
        State.INSTANCE.myInfo = myinfo
    }

    static onUpdateMyInfo(myinfo) {
        //update user info
        // use updating the obj filed instead of set new reference of state
        for (let field in myinfo) {
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