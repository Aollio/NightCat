import {Component} from '@angular/core';
import {AlertController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SharedService} from "../../../service/share.service";
import {DesignerModulePage} from "../../designer/designer";
import {PopoverPage} from "../../popver/popver";
import {EmployerModulePage} from "../../employer/employer";
import {Util} from "../../../service/util";
import {UsersService} from "../../../service/ajax/users.service";

declare let initializeFontSize: any

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


    ionViewDidEnter() {
        initializeFontSize()
    }
// todo 密码加密

    next() {

        let util = this.util

        if (!this.util.phoneInput(this.user.phone)) {
            this.util.toast('请输入正确手机号')
            return
        }
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

    register() {
        if (this.user.nickname == null || this.user.nickname == '') {
            this.util.toast('请输入昵称')
            return;
        }

        if (this.shared.currentModuleIsDesigner) {
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
                        this.util.toast('登录成功')
                        console.log('login success')

                        this.current = 3
                    }).catch(error => {
                        console.log('自动登录失败', error)
                        loading.dismiss();
                        this.util.toast('自动登录失败')

                        this.navCtrl.push(LoginPage)
                    })
            }).catch(error => {
                console.log('注册失败', error);
                loading.dismiss();
                this.util.toast('注册失败, 请稍后重试');
            })
    }

    openHome() {
        if (this.role === '00') {
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
        'assets/img/if_cat_emoji_face_smily-9-01_2361853.png',
        "assets/img/if_cat_emoji_face_smily-20-01_2361861.png",
        "assets/img/if_cat_emoji_face_smily-24-01_2361865.png",
        "assets/img/if_cat_emoji_face_smily-29-01_2361869.png",
        "assets/img/if_cat_emoji_face_smily-35-01_2361874.png",
        "assets/img/if_cat_emoji_face_smily-38-01_2361877.png",


    ];

    chooseAvatar() {
        this.btn_avatar_state = 2;
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
}