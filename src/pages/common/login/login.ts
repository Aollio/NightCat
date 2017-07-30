import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {ResetPasswordPage} from "../resetpassword/resetpassword";
import {User} from "../../../model/user";
import {AbsCommonPage} from "../abs";
import {UsersService} from "../../../service/ajax/users.service";
import {DesignerTabsPage} from "../../designer/tabs/tabs";
import {EmployerModulePage} from "../../employer/employer";
import {DesignerModulePage} from "../../designer/designer";
import {SharedService} from "../../../service/share.service";
import {WelcomePage} from "../../welcome/welcome";

declare let initializeFontSize: any

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    isDesigner: boolean = true;

    user: any = {};

    //the view that jump
    resetPasswordPage: ResetPasswordPage;

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public toastCtrl: ToastController,
                public userSev: UsersService,
                public shared: SharedService) {
        var role = navParams.get('role');
        this.user.role = role;
        if (role === 'designer') {
            this.user.role = '00'
            this.isDesigner = true
        } else {
            this.user.role = '01'
            this.isDesigner = false

        }
    }

    ionViewDidEnter() {
        initializeFontSize()
    }

    login() {


        if (this.user.phone == null || this.user.phone == '') {
            this.toast('请输入手机号')
            return
        }
        if (this.user.password == null || this.user.password == '') {
            this.toast('请输入密码')
            return
        }

        console.log("开始登录")

        this.userSev
            .login(this.user)
            .then(() => {
                console.log("登录成功")
                if (this.shared.isDesigner) {
                    this.navCtrl.setRoot(DesignerModulePage)
                } else {
                    this.navCtrl.setRoot(EmployerModulePage)
                }
            })
            .catch(error => {
                this.toast("登录出现了异常");
                console.log("login.ts error", error)
            });

    }

    openRegisterPage() {
        this.navCtrl.push(WelcomePage, {
            register: 'true'
        })
    }

    openResetPasswordPage() {
        this.navCtrl.push(ResetPasswordPage, {});
    }

    open(page, option) {
        this.navCtrl.push(page, option);
    }

    toast(msg) {
        let toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    }

}
