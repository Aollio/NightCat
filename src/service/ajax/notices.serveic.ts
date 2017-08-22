import {Injectable} from "@angular/core";
import {NetworkService} from "../network.service";
import {HttpUrls} from "../httpurls.service";
import {Events} from "ionic-angular";
import {SharedService} from "../share.service";

@Injectable()
export class NoticesService {

    s_get_notices = "s_get_notices";//查询消息事件
    s_has_new_notices = "s_has_new_notices";//有新消息事件

    //新消息个数
    private new_notices = 0;

    constructor(private http: NetworkService,
                private urls: HttpUrls,
                private shared: SharedService,
                private events: Events) {


        //1s后判断是否有新消息， 给登录时间
        // setTimeout(()=>{
        //     if (shared.isLogin()){
        //         this._getNotices();
        //     }
        // },1000);

        //每100s 判断是否有新消息；
        setInterval(() => {
            if (!shared.isLogin()) {
                this.new_notices = 0;
                return;
            }
            this._getNotices();
        }, 5 * 60 * 1000);


        // 当用户做出可能产生新消息的操作时， 会发出s_get_msgs事件，
        // 捕获事件,并获取新消息个数
        events.subscribe(this.s_get_notices, () => {
            setTimeout(() => {     //当用户做出可能产生新消息的操作时,服务器需相应事件
                this._getNotices();
            }, 5 * 1000);
        })


    }

    //获取新消息, 如果有新消息, 则发出有新消息的事件,
    _getNotices() {
        this.getNotices().then(() => {
            if (this.new_notices > 0) {
                this.events.publish(this.s_has_new_notices);
            }
            console.log("新消息有", this.new_notices);
        }).catch(err => {
            console.log(err);
        })
    }


    async getNotices(): Promise<any> {
        let response = await this.http.getWithToken(this.urls.notices);

        console.log(response.content);
        if (response.status != 200) {
            throw response;
        }


        //获取新消息个数；
        this.new_notices = 0;
        for (let notice of response.content) {
            if (!notice.read) {
                this.new_notices++;
            }
        }


        return response.content
    }

    async del_notices(id): Promise<any> {
        let response = await this.http.postWithToken(this.urls.notices_del, {id: id});

        console.log(response.content);
        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async read_notices(id): Promise<any> {
        let response = await this.http.postWithToken(this.urls.notices_read, {id: id});

        console.log(response.content);
        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

}