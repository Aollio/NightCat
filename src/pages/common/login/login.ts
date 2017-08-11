import {Component} from '@angular/core';
import {Events, ModalController, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {ResetPasswordPage} from "../resetpassword/resetpassword";
import {UsersService} from "../../../service/ajax/users.service";
import {EmployerModulePage} from "../../employer/employer";
import {DesignerModulePage} from "../../designer/designer";
import {SharedService} from "../../../service/share.service";
import {Util} from "../../../service/util";
import {EmployerTabsPage} from "../../employer/tabs/tabs";
import {DesignerTabsPage} from "../../designer/tabs/tabs";
import {el} from "@angular/platform-browser/testing/src/browser_util";


@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {


    user: any = {};

    //the view that jump
    resetPasswordPage: ResetPasswordPage;


    _one = null;

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public viewCtrl: ViewController,
                public event: Events,
                public userSev: UsersService,
                public shared: SharedService,
                public util: Util,
    ) {
        this._one = navParams.get("nav")

    }



    close() {
        this.viewCtrl.dismiss();
    }

    pop() {
        this.navCtrl.pop()
    }

// todo 密码加密
    login() {

        if (!this.util.phoneInput(this.user.phone)) {
            this.util.toast('请输入正确手机号')
            return
        }
        if (this.user.password == null || this.user.password == '') {
            this.util.toast('请输入密码')
            return
        }


        this.userSev.login(this.user)
            .then(user => {
                this.viewCtrl.dismiss();

                console.log("isDes", this.shared.isDesModule(), "role", user.role);

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

                this.shared.setCurrentUser(user);

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
