import {Component} from '@angular/core';
import {Events, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
import {RegisterPage} from "../register/register";
import {ResetPasswordPage} from "../resetpassword/resetpassword";
import {UsersService} from "../../../service/ajax/users.service";
import {EmployerModulePage} from "../../employer/employer";
import {DesignerModulePage} from "../../designer/designer";
import {SharedService} from "../../../service/share.service";
import {Util} from "../../../service/util";

declare let initializeFontSize: any

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {


    user: any = {};

    //the view that jump
    resetPasswordPage: ResetPasswordPage;

    constructor(public navCtrl: NavController, public navParams: NavParams,
                public toastCtrl: ToastController,
                public viewCtrl: ViewController,
                public event: Events,
                public userSev: UsersService,
                public shared: SharedService,
                public util: Util) {
    }

    ionViewDidEnter() {
        initializeFontSize()
    }

    close() {
        this.viewCtrl.dismiss();
    }

    pop() {
        this.navCtrl.pop()
    }


    login() {
        if (this.user.phone == null || this.user.phone == '') {
            this.util.toast('请输入手机号')
            return
        }
        if (this.user.password == null || this.user.password == '') {
            this.util.toast('请输入密码')
            return
        }

        let isDesigner = this.shared.currentModuleIsDesigner;

        this.userSev.login(this.user)
            .then(userInfo => {
                if (isDesigner != (userInfo.role == 0)) {
                    //登录用户身份和打开用户身份不一致
                    this.util.toast("你登录的用户身份和打开的模块不一致")
                    if (this.shared.currentModuleIsDesigner) {
                        this.viewCtrl.dismiss();
                        this.navCtrl.setRoot(DesignerModulePage)
                    } else {
                        this.viewCtrl.dismiss();
                        this.navCtrl.setRoot(EmployerModulePage)
                    }
                } else {
                    this.viewCtrl.dismiss()
                }
            }).catch(error => {

        })

        // (async () => {
        //     let newuser = await this.userSev.login(this.user);
        //
        //
        // })().catch(error => {
        //     this.util.toast("登录异常: " + error.message);
        //     console.log("login.ts error", error)
        // });

        //正常登录流程
        // (async ()=> {
        //     await this.userSev.login(this.user)
        //     let user = await this.userSev.getLoginUser()
        // todo登陆成功
        // if (user.role == '00'){
        // this.navCtrl.setRoot(DesignerModulePage)
        // this.viewCtrl.dismiss();
        // this.event.publish('backdoor')
        // }else if (user.role == '01'){
        // this.navCtrl.setRoot(EmployerModulePage)
        // this.viewCtrl.dismiss();
        // this.event.publish('backdoor')
        // }else {
        //     throw {}
        // }
        //
        // })().catch(error => {
        //     this.util.toast("登录出现了异常");
        //     console.log("login.ts error", error)
        // });

    }

    openRegisterPage() {
        this.navCtrl.push(RegisterPage, {
            register: 'true'
        })
    }

    openResetPasswordPage() {
        this.navCtrl.push(ResetPasswordPage, {});
    }

    open(page, option) {
        this.navCtrl.push(page, option);
    }


}
