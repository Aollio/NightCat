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


    private token: string;
    private isWebCore: boolean;

    constructor(private http_browser: Http,
                private http_mobile: HTTP,
                private util: Util,
                private platform: Platform,
                private event: Events,
                private share: SharedService) {
        this.isWebCore = this.platform.is('core') || this.platform.is('mobileweb');
    }

    setToken(token) {
        console.log("setToken: ", token)
        this.token = token;
    }

    doIfNoToken() {
        this.event.publish('gotologin');
    }


    async getWithToken(url, param = {}, header = {}) {
        console.log("getWithToken, token:", this.token);
        if (this.token == null) {
            this.doIfNoToken()
            throw {status: 401, messgae: 'TOKEN不存在, 用户是否登录?'}
        }
        // header['token'] = this.token;
        param['token'] = this.token;
        return await this.get(url, param, header);
    }

    /**
     * 返回get请求是的body部分的许诺,转化为json对象
     * @param url
     * @param param
     * @returns {Promise<any>}
     */
    async get (url, param = {}, header = {}): Promise<any> {
        console.log("\n get url", url);
        console.log("get params", param);

        let response;
        try {
            if (this.isWebCore) {
                let _params = {
                    params: param,
                    headers: new Headers(header)
                }
                response = await this.http_browser.get(url, _params).toPromise();
                console.log("get response", response.json(), "\n");

                return response.json();

            } else {
                response = await this.http_mobile.get(url, param, header);
                console.log("get response", response.data, "\n");

                return JSON.parse(response.data);


            }
        } catch (error) {
            this.showError(error);
            if (error && error.status != 0) {
                throw error;
            }
        }

        // if (this.platform.is('core') || this.platform.is('mobileweb')) {
        //     let _params = {
        //         params: param,
        //         headers: new Headers(header)
        //     }
        //     try {
        //         let res = await this.http_browser.get(url, _params).toPromise()
        //         console.log("get response", res.json());
        //         console.log(" ");
        //         return res.json();
        //     } catch (error) {
        //         this.showError(error);
        //         return error
        //     }
        // }
        //
        // //using http mobile
        // let data
        // try {
        //     data = await this.http_mobile.get(url, param || {}, {})
        // } catch (error) {
        //     this.showError(error);
        //     return error
        // }
        //
        // console.log("get response", data.data);
        // console.log(" ");
        // return data.data;
    }

    async postWithToken(url, param = {}, header = {}) {
        console.log("postWithToken", this.token);
        if (this.token == null) {
            this.doIfNoToken()
            throw {status: 401, message: 'TOKEN NOT EXIST'}
        }
        param['token'] = this.token;
        // header['token'] = this.token
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
        console.log("\n post url", url);
        console.log("post params", param);

        let response;

        try {
            if (this.isWebCore) {
                console.log('开始post请求', '在浏览器中');
                headers['Accept'] = 'application/json,text/json,*/*';
                headers['content-type'] = 'application/x-www-form-urlencoded';
                let _headers = new Headers(headers);

                response = await this.http_browser.post(url, this.trans(param), {headers: _headers}).toPromise();
                console.log("post response", response.json(), "\n");
                return response.json();

            } else {
                console.log('开始post请求', '在手机中');

                response = await this.http_mobile.post(url, param, headers);
                console.log("post response", response.data, "\n");
                return JSON.parse(response.data);

            }

        } catch (error) {

            this.showError(error);
            if (error && error.status != 0) {
                throw error;
            }
        }

        // if (this.platform.is('core') || this.platform.is('mobileweb')) {
        //     //由于angular 传送post数据方式的不同, 需要添加一下headers和将param转化为可识别格式,才能被后端所接受
        //     console.log('开始post请求', '在浏览器中')
        //     headers['Accept'] = 'application/json,text/json,*/*'
        //     headers['content-type'] = 'application/x-www-form-urlencoded'
        //
        //     let _headers = new Headers(headers)
        //
        //     try {
        //         let response = await this.http_browser.post(url, this.trans(param), {headers: _headers}).toPromise()
        //         console.log("post response", response.json());
        //         console.log(" ");
        //         return response.json();
        //     } catch (error) {
        //         this.showError(error);
        //         return error
        //     }
        // }
        //
        // let response
        // try {
        //     response = await this.http_mobile.post(url, param = {}, headers)
        // } catch (error) {
        //     this.showError(error);
        //     return error
        // }
        //
        // console.log("get response", response.data);
        // console.log(" ");
        // return response.data;
    }


    //
    showError(error) {
        console.log("error: ", error);
        if (error) {
            if (error.status === 0) {
                this.util.toast("网络未连接");
            }
            if (error.status == 500) {
                this.util.toast("服务器开了小差, 请稍后再试");
            }
        } else {
            if (error.status == 401) {
                this.doIfNoToken()
            }
        }
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