import {Component, Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {HTTP} from "@ionic-native/http";
import {Platform, NavController, Events} from "ionic-angular";
import {Util} from "./util";
import {LoginPage} from "../pages/common/login/login";
import {KeynoteService} from "./keynote.service";
import {SharedService} from "./share.service";

@Injectable()
// @Component({
//     providers: [Http]
// })
export class NetworkService {


    private token: string

    constructor(private http_browser: Http,
                private http_mobile: HTTP,
                private platform: Platform,
                private event: Events,
                private share: SharedService) {
    }

    doIfNoToken() {
        this.event.publish('gotologin')
    }


    async getWithToken(url, param = {}, header = {}) {
        if (this.token == null) {
            this.doIfNoToken()
            return {status: 401, messgae: 'TOKEN不存在, 用户是否登录?'}
        }
        header['token'] = this.token
        return await this.get(url, param, header)
    }

    /**
     * 返回get请求是的body部分的许诺,转化为json对象
     * @param url
     * @param param
     * @returns {Promise<any>}
     */
    async get (url, param?, header?): Promise<any> {

        if (this.share.KEYNOTE) {
            return {status: 600}
        }


        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            let _params = {
                params: param
            }
            try {
                let res = await this.http_browser.get(url, _params).toPromise()
                return res.json()
            } catch (error) {
                // error 是 response对象 ,含有属性
                //ok:false;status:404,statusText:"OK",type:2,url:"http://localhost:8080/user"
                //angular http模块 出现错误是返回的error.json()对象,包含数据,
                // a = error.json(), a.status,a.nofitications,a.error, a.timestamp, a.path
                console.log(error)
                console.log(error.status)
                console.log(error.ok)
                console.log(error.message)
                //error.status 401 means that unautnenication
                if (error.status == 401) {
                    this.doIfNoToken()
                }
                return error
            }
        }

        //using http mobile
        let response
        try {
            response = await this.http_mobile.get(url, param || {}, header || {})
        } catch (error) {
            console.log(error)
            return error
        }
        console.log("手机执行GET")
        let body = JSON.parse(response.data)
        console.log(body)
        return body

    }


    async postWithToken(url, param = {}, header = {}) {
        if (this.token == null) {
            this.doIfNoToken()
            return {status: 401, message: 'TOKEN NOT EXIST'}
        }
        header['token'] = this.token
        return await this.post(url, param, header)
    }

    /**
     * 返回get请求是的body部分的许诺,转化为json对象.
     * 由于ionic在手机安装后的http使用方式,和浏览器中使用http调用方式的不同,在这里进行判断
     * @param url
     * @param param
     * @returns {Promise<any>}
     */
    async post(url, param = {}, headers = {}): Promise<any> {


        if (this.share.KEYNOTE) {
            return {status: 600}
        }

        console.log(this.platform.platforms())

        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            //由于angular 传送post数据方式的不同, 需要添加一下headers和将param转化为可识别格式,才能被后端所接受
            console.log('开始post请求', '在浏览器中')
            headers['Accept'] = 'application/json,text/json,*/*'
            headers['content-type'] = 'application/x-www-form-urlencoded'

            let _headers = new Headers(headers)

            let response
            try {
                response = await this.http_browser.post(url, this.trans(param), {headers: _headers}).toPromise()
            } catch (error) {
                //     error 是 response对象 ,含有属性
                //     ok:false;status:404,statusText:"OK",type:2,url:"http://localhost:8080/user"
                //     angular http模块 出现错误是返回的error.json()对象,包含数据,
                //     a = error.json(), a.status,a.nofitications,a.error, a.timestamp, a.path
                console.log(error)
                if (error.status == 401) {
                    this.event.publish('gotologin')
                }
                return error
            }
            return response.json()
        }

        let response
        try {
            response = await this.http_mobile.post(url, param, headers)
        } catch (error) {
            if (error.status == 401) {
                this.event.publish('gotologin')
            }
            return error
        }
        console.log("手机执行POST")
        let body = JSON.parse(response.data)
        console.log(body)
        return body
    }


    trans(obj) {
        if (obj == null) {
            return "";
        }
        let str = [];
        for (let p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    }

}