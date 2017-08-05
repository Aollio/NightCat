import {Component} from '@angular/core';
import {Events, IonicPage, NavController, NavParams, ToastController, ViewController} from 'ionic-angular';
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


    constructor(public navCtrl: NavController,
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
        // console.log('asd');
        this.viewCtrl.dismiss();
        // this.navCtrl.pop();

    }

    pop() {
        this.navCtrl.pop()
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

        console.log("开始登录");

        //正常登录流程
        (async () => {
            let user = await this.userSev.login(this.user)

            this.shared.setCurrentUser(user);
            //todo登陆成功
            if (user.role == 0) {
                this.navCtrl.setRoot(DesignerModulePage)
                // this.viewCtrl.dismiss();
            } else if (user.role == 1) {
                this.navCtrl.setRoot(EmployerModulePage)
                // this.viewCtrl.dismiss();
            } else {
                throw {}
            }

        })().catch(error => {
            this.toast("用户名或密码错误");
            console.log("login.ts error", error)
        });

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
