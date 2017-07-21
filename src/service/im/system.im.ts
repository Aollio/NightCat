import {ImService} from "./service.im";
import {State} from "./state.im";
import {Util} from "../util";

export class System {


    constructor() {
    }


    /**
     optional
     连接建立后的回调, 会传入一个对象, 包含登录的信息, 有以下字段
     lastLoginDeviceId: 上次登录的设备的设备号
     connectionId: 本次登录的连接号
     ip: 客户端IP
     port: 客户端端口
     country: 本次登录的国家
     */
    static onConnect() {
        console.log('连接成功');
    }


    private static customSyncDoneFunc = null

    static customSyncDone(func) {
        System.customSyncDoneFunc = func
    }

    static onSyncDone() {

        let state = State.INSTANCE
        console.log(state)
        state.isLoading = false

        if (System.customSyncDoneFunc != null) {
            System.customSyncDoneFunc()
        }
        console.log("同步完成")
    }


    static onWillReconnect(obj) {
        // 此时说明 SDK 已经断开连接, 请开发者在界面上提示用户连接已断开, 而且正在重新建立连接
        console.log('即将重连', obj);
    }

    static onDisconnect(error) {
        // 此时说明 SDK 处于断开状态, 开发者此时应该根据错误码提示相应的错误信息, 并且跳转到登录页面
        console.log('连接断开', error);
        if (error) {
            switch (error.code) {
                // 账号或者密码错误, 请跳转到登录页面并提示错误
                case 302:
                    break;
                // 重复登录, 已经在其它端登录了, 请跳转到登录页面并提示错误
                case 417:
                    break;
                // 被踢, 请提示错误后跳转到登录页面
                case 'kicked':
                    break;
                default:
                    break;
            }
        }
    }

    static onError(error, obj) {
        console.log('发生错误', error, obj);
    }
}