//import md5.js from src/js/md5.js
import {Injectable} from "@angular/core";

declare let md5: any;

export class ImConfig {

    //用户信息, 相当于NIM登录的用户
    public static userinfo: { account, token } = {
        //uid
        account: 'aollioaollio',
        token: md5('123456'),
    }

    //APP KEY的设置, 用于和NIM服务器通信使用
    private static __appconfig: any = {
        test: {
            appkey: 'fe416640c8e8a72734219e1847ad2547',
            postUrl: 'https://apptest.netease.im'
        },
        online: {
            appkey: '47045ca57e2ca57f805cb24563e34160',
            postUrl: 'https://app.netease.im'
        }
    }

    public static env: any = 'online'

    // public config: { appkey, postUrl } = this.__appconfig[this.env]

    public static appkey = ImConfig.__appconfig[ImConfig.env].appkey
    public static postUrl = ImConfig.__appconfig[ImConfig.env].postUrl

}