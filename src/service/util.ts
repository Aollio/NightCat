import {Loading, LoadingController, ModalController, Toast, ToastController} from "ionic-angular";
import {Injectable} from "@angular/core";
import {LoginPage} from "../pages/common/login/login";

@Injectable()
export class Util {

    //NOTE!!!单例的初始化在IMService中初始化
    public static INSTANCE: Util;

    constructor(public loaderCtrl: LoadingController,
                public toastCtrl: ToastController,
                public modal: ModalController) {
    }

    presentLoginPage(nav) {
        this.modal.create(LoginPage, {nav: nav}).present();
    }

    //如果str为空则提示。
    notEmptyOrToast(obj, msg) {
        if (obj == null || this.isEmptyObj(obj) || obj == '') {
            this.toast(msg)
        }

    }

    isEmptyObj(obj) {
        return JSON.stringify(obj) == JSON.stringify({});
    }


    private loading = false;
    private _toast: Toast = null;

    toast(msg) {
        console.log("toast", msg);

        if (this.loading) {
            this._toast.setMessage(msg)
            return
        }
        this._toast = this.toastCtrl.create({
            message: msg,
            position: 'bottom',
            dismissOnPageChange: true
        });
        this._toast.present();
        this.loading = true
        // toast.set
        setTimeout(() => {
            this._toast.dismiss().then(() => {
                this._toast = null;
                this.loading = false;
            }).catch(() => {
                this._toast.dismiss()
                this.loading = false
            })
        }, 500)
    }


    //显示加载框
    createLoading(message, options = {}) {
        options['content'] = message;
        options['spinner'] = 'crescent';
        options['dismissOnPageChange'] = true;

        return this.loaderCtrl.create(options);

    }


    phoneInput(phone) {
        return phone && /^1[3|4|5|8]\d{9}$/.test(phone);
    }

    updateObj(oldObj, newObj) {
        for (let attr in newObj) {
            oldObj[attr] = newObj[attr];
        }
    }

    // 消息类型列表
    mapMsgType = (msg) => {
        let map = {
            text: '文本消息',
            image: '图片消息',
            file: '文件消息',
            audio: '语音消息',
            video: '视频消息',
            geo: '地理位置消息',
            tip: '提醒消息',
            custom: '自定义消息',
            notification: '系统通知',
            robot: '机器人消息'
        }
        let type = msg.type
        return map[type] || '未知消息类型'
    }

    public stringifyDate(datetime, simple = false) {
        // let weekMap = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        let weekMap = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
        datetime = new Date(datetime)
        let year = datetime.getFullYear()
        let simpleYear = datetime.getYear() - 100
        let month = datetime.getMonth() + 1
        month = month > 9 ? month : '0' + month
        let day = datetime.getDate()
        day = day > 9 ? day : '0' + day
        let hour = datetime.getHours()
        hour = hour > 9 ? hour : '0' + hour
        let min = datetime.getMinutes()
        min = min > 9 ? min : '0' + min
        let week = datetime.getDay()
        week = weekMap[week]
        let thatDay = (new Date(year, month - 1, day, 0, 0, 0)).getTime()

        if (simple) {
            return {
                withYear: `${day}/${month}/${simpleYear}`,
                withMonth: `${month}-${day}`,
                withDay: `${week}`,
                withLastDay: `昨天`,
                withHour: `${hour}:${min}`,
                year: year,
                month: month,
                day: day,
                week: week,
                thatDay
            }
        } else {
            return {
                withYear: `${year}-${month}-${day} ${hour}:${min}`,
                withMonth: `${month}-${day} ${hour}:${min}`,
                withDay: `${week} ${hour}:${min}`,
                withLastDay: `昨天 ${hour}:${min}`,
                withHour: `${hour}:${min}`,
                year: year,
                month: month,
                day: day,
                week: week,
                thatDay
            }
        }
    }

    /* 格式化日期 */
    public formatDate(datetime, simple = false) {
        let tempDate = (new Date()).getTime()
        let result = this.stringifyDate(datetime, simple)
        let thatDay = result.thatDay
        let deltaTime = (tempDate - thatDay) / 1000

        if (deltaTime < 3600 * 24) {
            return result.withHour
        } else if (deltaTime < 3600 * 24 * 2) {
            return result.withLastDay
        } else if (deltaTime < 3600 * 24 * 7) {
            return result.withDay
        } else if (deltaTime < 3600 * 24 * 30) {
            return result.withMonth
        } else {
            return result.withYear
        }
    }

    // public dateToNow(datetime, simple = false) {
    //     let time = datetime - new Date().getTime();
    //     time = time < 0 ? 0 : time;
    //     return this.formatDate(time,simple);
    // }


    encode = (_map, _content) => {
        _content = '' + _content
        if (!_map || !_content) {
            return _content || ''
        }
        return _content.replace(_map.r, ($1) => {
            var _result = _map[!_map.i ? $1.toLowerCase() : $1]
            return _result != null ? _result : $1
        });
    };


    escape = (() => {
        let _reg = /<br\/?>$/
        let _map = {
            r: /\<|\>|\&|\r|\n|\s|\'|\"/g,
            '<': '&lt;',
            '>': '&gt;',
            '&': '&amp;',
            ' ': '&nbsp;',
            '"': '&quot;',
            "'": '&#39;',
            '\n': '<br/>',
            '\r': ''
        }
        return (_content) => {
            _content = this.encode(_map, _content)
            return _content.replace(_reg, '<br/>');
        };
    })();


    /* 获得有效的备注名 */
    getFriendAlias = (userInfo) => {
        userInfo.alias = userInfo.alias ? userInfo.alias.trim() : ''
        return userInfo.alias || userInfo.nick || userInfo.account
    }

}