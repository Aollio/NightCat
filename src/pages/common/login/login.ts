import {Component} from '@angular/core';
import {Events, NavController, NavParams, ViewController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {ResetPasswordPage} from "../resetpassword/resetpassword";
import {UsersService} from "../../../service/ajax/users.service";
import {SharedService} from "../../../service/share.service";
import {Util} from "../../../service/util";
import {EmployerTabsPage} from "../../employer/tabs/tabs";
import {DesignerTabsPage} from "../../designer/tabs/tabs";
import {NoticesService} from "../../../service/ajax/notices.serveic";
import {EmpFavoriteDesignerPage} from "../../employer/me/favorite-designer/favorite-designer";


declare let md5: any;

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {


    user: any = {};

    //the view that jump
    resetPasswordPage: ResetPasswordPage;


    _one = null;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public viewCtrl: ViewController,
                public event: Events,
                public userSev: UsersService,
                public shared: SharedService,
                private noticesServ: NoticesService,
                public util: Util,) {
        this._one = navParams.get("nav")
    }


    close() {
        this.viewCtrl.dismiss();
    }

    pop() {
        this.navCtrl.pop()
    }


    //此为加密前的密码
    password = "";

    login() {

        if (!this.util.phoneInput(this.user.phone)) {
            this.util.toast('请输入正确手机号')
            return
        }
        if (this.password == null || this.password == '') {
            this.util.toast('请输入密码')
            return
        }

        // 密码加密
        this.user.password = md5(this.password);

        this.userSev.login(this.user)
            .then(user => {
                this.viewCtrl.dismiss();


                console.log("isDes", this.shared.isDesModule(), "role", user.role);

                this.gotoModuleByRole(user);

                this.shared.setCurrentUser(user);
                this.event.publish(this.noticesServ.s_get_notices);//发出 读取新消息 事件

            }).catch(error => {

            console.log("登录异常:");
            console.log(error)
            if (error.status == 400) {
                this.util.toast("用户名或密码不正确");
            } else {
                // this.util.toast("未知错误")
            }
        })
    }

    //判断登录的用户身份和打开的模块是否一致，否则进行模块切换
    gotoModuleByRole(user){
        if (this.shared.isDesModule() != (user.role == 0)) {
            //登录用户身份和打开用户身份不一致
            this.util.toast("你登录的用户身份和打开的模块不一致");
            if (this.shared.isDesModule()) {
                if (this._one != null) {
                    this._one.setRoot(EmployerTabsPage, {}, {animate: true});
                }
                else {
                    this.navCtrl.setRoot(EmployerTabsPage, {}, {animate: true});
                }
            } else {
                if (this._one != null) {
                    this._one.setRoot(DesignerTabsPage, {}, {animate: true});
                }
                else {
                    this.navCtrl.setRoot(DesignerTabsPage, {}, {animate: true});
                }
            }
        } else {
            console.log("登录的用户身份和打开的模块一致");
        }
    }

    openRegisterPage() {
        this.navCtrl.push(RegisterPage)
    }

    openResetPasswordPage() {
        this.navCtrl.push(ResetPasswordPage, {});
    }

    open(page, option) {
        this.navCtrl.push(page, option);
    }


}
