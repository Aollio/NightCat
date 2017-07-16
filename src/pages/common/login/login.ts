import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {ResetPasswordPage} from "../resetpassword/resetpassword";
import {User} from "../../../model/user";
import {AbsCommonPage} from "../abs";
import {UserService} from "../../../service/ajax/user.service";
import {DesignerTabsPage} from "../../designer/tabs/tabs";
import {EmployerModulePage} from "../../employer/employer";
import {DesignerModulePage} from "../../designer/designer";
import {SharedService} from "../../../service/share.service";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    isDesigner: boolean = true;

    user: User = new User();
    //the view that jump
    resetPasswordPage: ResetPasswordPage;

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public toastCtrl: ToastController,
                public userSev: UserService,
                public shared: SharedService) {
        var role = navParams.get('role');
        this.user.role = role;
        if (role === 'employer') {
            this.isDesigner = false
        }
    }

    login() {

        console.log("开始登录")

        if (this.user.phone == null || this.user.phone == '') {
            this.toast('请输入手机号')
            return
        }
        if (this.user.password == null || this.user.password == '') {
            this.toast('请输入密码')
            return
        }

        this.userSev
            .login(this.user.phone, this.user.password,
                this.user.role === this.shared.ROLE_DESIGNER)
            .then(user => {
                if (user === null) {
                    this.toast("登录失败, 用户名或密码错误")
                    console.log("登录失败, 用户名或密码错误")
                }
                this.toast("登录正常");
                console.log("登录成功")
                this.navCtrl.push(DesignerModulePage, {})
            })
            .catch(error => {
            this.toast("登录出现了异常");
            console.log("login.ts error" + error)
        });

    }

    openRegisterPage() {
        this.navCtrl.push(RegisterPage, {
            isDesigner: this.isDesigner
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
