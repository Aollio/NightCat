import {Component, Injectable} from "@angular/core";
import {Http, Headers} from "@angular/http";
import {HTTP} from "@ionic-native/http";
import {Platform} from "ionic-angular";

@Injectable()
@Component({
    providers: [Http]
})
export class NetworkService {


    private token: string

    constructor(private http_browser: Http,
                private http_mobile: HTTP,
                private platform: Platform) {

    }


    async getWithToken(url, param = {}, header = {}) {
        if (this.token == null) {
            Promise.reject({status: -100, messgae: 'TOKEN不存在, 用户是否登录?'})
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
    async get(url, param?, header?): Promise<any> {
        if (this.platform.is('core')) {
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
                // a = error.json(), a.status,a.message,a.error, a.timestamp, a.path
                console.log(error)
                console.log(error.status)
                console.log(error.ok)
                console.log(error.message)
                return Promise.reject(error)
            }
        }

        let data
        try {
            data = await this.http_mobile.get(url, param || {}, {})
        } catch (error) {
            console.log(error)
            Promise.reject(error)
        }
        return data.data

    }


    async postWithToken(url, param = {}, header = {}) {
        if (this.token == null) {
            Promise.reject({status: -100, messgae: 'TOKEN不存在, 用户是否登录?'})
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
    post(url, param?: any, headers?): Promise<any> {

        console.log(this.platform.platforms())
        if (this.platform.is('core') || this.platform.is('mobileweb')) {
            //由于angular 传送post数据方式的不同, 需要添加一下headers和将param转化为可识别格式,
            //才能被后端所接受
            console.log('开始post请求', '在浏览器中')
            let _headers = new Headers({
                Accept: 'application/json,text/json,*/*',
                'content-type': 'application/x-www-form-urlencoded'
            })
            return this.http_browser
                .post(url, this.trans(param), {headers: _headers})
                .toPromise()
                .then(res => res.json() as any)
                .catch(error => {
                    //     error 是 response对象 ,含有属性
                    //     ok:false;status:404,statusText:"OK",type:2,url:"http://localhost:8080/user"
                    //     angular http模块 出现错误是返回的error.json()对象,包含数据,
                    //     a = error.json(), a.status,a.message,a.error, a.timestamp, a.path
                    console.log(error)
                    return Promise.reject(error.message | error);
                })
        }

        return this.http_mobile
            .post(url, param || {}, {})
            .then(data => data.data.content as any)
            .catch(error => Promise.reject(error))

    }


    trans(obj) {
        if (obj == null) {
            return "";
        }
        var str = [];
        for (var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        return str.join("&");
    }

}