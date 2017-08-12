import {Component, ViewChild} from '@angular/core';
import {AlertController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SharedService} from "../../../service/share.service";
import {DesignerModulePage} from "../../designer/designer";
import {PopoverPage} from "../../popver/popver";
import {EmployerModulePage} from "../../employer/employer";
import {Util} from "../../../service/util";
import {UsersService} from "../../../service/ajax/users.service";


@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    avatar: any = "";
    btn_avatar_state: any = 1;
    //页面切换状态, 页面切换特效的实现变量
    current = 1

    isDesigner: boolean = true;

    role: any;

    user: any = {}

    confirmPassword;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public shared: SharedService,
                public popoverCtrl: PopoverController,
                public util: Util,
                public usersServ: UsersService) {
    }



// todo 密码加密

    next() {

        let util = this.util

        if (!this.util.phoneInput(this.user.phone)) {
            this.util.toast('请输入正确手机号')
            return
        }

        // todo 验证密码
        // 正则验证密码中是否有大小写字母，数字，和符号
        // 大小写字母：(?=.*[A-Z])(?=.*[a-z])
        // 数字：(?=.*\d)
        // 符号：((?=[\x21-\x7e]+)[^A-Za-z0-9])
        //  \d改为[0-9]问题就解决了
        if (this.user.password == null || this.user.password == '') {
            util.toast('请输入密码')
            return
        }

        if (this.confirmPassword == null || this.confirmPassword == '') {
            util.toast('请确认密码')
            return
        }

        if (this.confirmPassword !== this.user.password) {
            util.toast('两次密码输入不一致')
            return
        }

        this.current = 2
    }

    back(){
        this.current = 1;
    }

    register() {
        if (this.user.nickname == null || this.user.nickname == '') {
            this.util.toast('请输入昵称')
            return;
        }

        if (this.shared.isDesModule()) {
            this.user.role = 0;
        } else {
            this.user.role = 1;
        }

        let loading = this.util.createLoading('正在注册')

        loading.present();

        this.usersServ.register(this.user)
            .then(user => {
                loading.setContent('正在登录...')
                this.usersServ.login(user)
                    .then(() => {
                        loading.dismiss()
                        this.util.toast('登录成功');
                        console.log('login success');

                        this.shared.setCurrentUser(user);

                        if (this.shared.isDesModule()) {
                            this.navCtrl.setRoot(DesignerModulePage,{},{animate:true});
                        } else {
                            this.navCtrl.setRoot(EmployerModulePage,{},{animate:true});
                        }
                        // this.openHome();
                        // this.current = 3
                    }).catch(error => {
                    console.log('自动登录失败', error)
                    loading.dismiss();
                    this.util.toast('自动登录失败')

                    this.navCtrl.push(LoginPage)
                });


            }).catch(error => {
            console.log('注册失败', error);
            loading.dismiss();
            this.util.toast('注册失败, '+error.message);
        })
    }

    openHome() {
        if (this.shared.isDesModule()) {
            this.navCtrl.setRoot(DesignerModulePage, {}, {animate: true})
        } else {
            this.navCtrl.setRoot(EmployerModulePage, {}, {animate: true});
        }
    }


    selectAvatar() {
        let popover = this.popoverCtrl.create(PopoverPage);
        popover.present({});
    }


    openLoginPage() {
        this.navCtrl.push(LoginPage);
    }

    emojiarray: Array<any> = [
        'assets/img/cat-n23.png',
        "assets/img/Rectangle.png",
        "assets/img/cat-n54.png",
        // "assets/img/if_cat_emoji_face_smily-24-01_2361865.png",
        // "assets/img/if_cat_emoji_face_smily-29-01_2361869.png",
        // "assets/img/if_cat_emoji_face_smily-35-01_2361874.png",
        // "assets/img/if_cat_emoji_face_smily-38-01_2361877.png",


    ];

    chooseAvatar() {
        this.btn_avatar_state = 2;
        this.util.toast(this.avatar)
    }

    complete(any) {
        this.btn_avatar_state = any;
        if (any === 1) {
            this.avatar = "";
        }
        if (this.avatar === "") {
            this.btn_avatar_state = 1;
        }
    }

    select(item) {
        this.avatar = item;
    }

    pop() {
        this.navCtrl.pop()
    }


    // @ViewChild("captcha") captcha;
    // private captcha = ANGULAR.;

    //获取验证码
    private captchaText = "获取验证码";
    captchaDisabled = false;


    getCaptcha() {
        this.sendMessage();
        let time_s = 60;
        this.captchaDisabled = true;
        let timer = setInterval(() => {
            time_s--;
            if (time_s == 0) {
                this.captchaText = "获取验证码";
                this.captchaDisabled = false;
                clearInterval(timer);
            }
            this.captchaText = time_s + "后重新获取";
        }, 1000);
    }

    //todo
    sendMessage() {

    }
}