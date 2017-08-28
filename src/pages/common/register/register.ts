import {Component, ViewChild} from '@angular/core';
import {Events, NavController, NavParams, PopoverController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SharedService} from "../../../service/share.service";
import {DesignerModulePage} from "../../designer/designer";
import {PopoverPage} from "../../popver/popver";
import {EmployerModulePage} from "../../employer/employer";
import {Util} from "../../../service/util";
import {UsersService} from "../../../service/ajax/users.service";
import {NoticesService} from "../../../service/ajax/notices.serveic";
import {FileService} from "../../../service/ajax/files.service";
import {ImageInputComponent} from "../../../component/image-input/image-input";
import {ImageService} from "../../../service/ajax/imgs.service";

declare let md5: any;

@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {

    //页面切换状态, 页面切换特效的实现变量
    current = 1

    user: any = {}

    confirmPassword;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public shared: SharedService,
                public popoverCtrl: PopoverController,
                public util: Util,
                private event: Events,
                private fileServ: FileService,
                private imagesServ: ImageService,
                private noticesServ: NoticesService,
                public usersServ: UsersService) {
        this.current = navParams.get("current") || 1;
    }


    // todo 验证码是否填写
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
        if (this.password == null || this.password == '') {
            util.toast('请输入密码')
            return
        }

        if (this.confirmPassword == null || this.confirmPassword == '') {
            util.toast('请确认密码')
            return
        }

        if (this.confirmPassword !== this.password) {
            util.toast('两次密码输入不一致')
            return
        }

        if (this.captcha != this.user.captcha) {
            util.toast('验证码错误');
            return
        }

        this.current = 2
    }

    back() {
        this.current = 1;
    }


    before_register() {
        if (this.btn_avatar_state == 1) {    //未选择
            this.util.toast('请选择头像');
            return;
        }
        if (this.user.nickname == null || this.user.nickname == '') {
            this.util.toast('请输入昵称')
            return;
        }

        //设置角色身份
        if (this.shared.isDesModule()) {
            this.user.role = 0;
        } else {
            this.user.role = 1;
        }

        //设置头像
        if (this.btn_avatar_state == 2) {
            this.user.img_url = this.avatar;
            this.register();                        //开始注册
        } else if (this.btn_avatar_state == 3) {
            this.imagesServ.upload([this.avatar])
                .then((urls) => {
                    this.user.img_url = urls[0];
                    this.register();                //开始注册
                })
                .catch(error => {
                    console.log(error);
                    this.util.toast("图片上传失败，请稍后再试");
                })
        }
    }


    //保存密码  ，user.password为加密后的密码
    password = "";

    register() {
        let loading = this.util.createLoading('正在注册');
        loading.present();

        // 密码加密
        this.user.password = md5(this.password);
        this.usersServ.register(this.user)
            .then(user => {
                loading.setContent('正在登录...');

                // 设置密码 后台没返回密码
                user.password = this.user.password;
                this.usersServ.login(user)
                    .then(() => {
                        loading.dismiss()
                        this.util.toast('登录成功');
                        console.log('login success');

                        this.shared.setCurrentUser(user);
                        //发出 读取新消息事件
                        this.event.publish(this.noticesServ.s_get_notices);

                        if (this.shared.isDesModule()) {
                            this.navCtrl.setRoot(DesignerModulePage, {}, {animate: true});
                        } else {
                            this.navCtrl.setRoot(EmployerModulePage, {}, {animate: true});
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
            this.util.toast('注册失败, ' + error.message);
        })
    }

    openHome() {
        if (this.shared.isDesModule()) {
            this.navCtrl.setRoot(DesignerModulePage, {}, {animate: true})
        } else {
            this.navCtrl.setRoot(EmployerModulePage, {}, {animate: true});
        }
    }


    //>>>>>>>>>>>>>> 选择头像 >>>>>>>>>>>>>
    //头像url
    avatar: any = "";
    //1 未选择  2 已选择默认  3 已选择自定义
    btn_avatar_state: any = 1;
    //弹框是否显示
    pop_is_open = false;

    //默认头像
    emojiarray: Array<any> = [
        'assets/img/cat-n23.png',
        "assets/img/cat-n54.png",
    ];

    open_pop() {
        this.pop_is_open = true;
    }

    close_pop() {
        this.pop_is_open = false;
    }

    select(item) {
        this.close_pop();
        this.avatar = item;
        this.btn_avatar_state = 2;
    }

    //选择自己的图片
    selectPhoto() {
        let options = {
            maximumImagesCount: 1,
            quality: 100,
            outputType: 0
        }
        this.imagesServ.picker(options)
            .then(uris => {
                console.log(uris)
                this.avatar = uris[0];
                this.btn_avatar_state = 3;
                this.close_pop();
            })
            .catch(error => {
                console.log(error);
            })
    }

    //<<<<<<<<<<<<<<< 选择头像 <<<<<<<<<<<<<<<


    pop() {
        this.navCtrl.pop()
    }


    //>>>>>>>>>>>>>>>>> 获取验证码 >>>>>>>>>>>>>>>>>>
    private captchaText = "获取验证码";
    private captchaDisabled = false;

    captcha;

    getCaptcha() {

        if (!this.util.phoneInput(this.user.phone)) {
            this.util.toast("手机号格式非法")
            return
        }
        this.usersServ.getVerifyCode(this.user.phone).then(captcha => {
            this.user.captcha = captcha;
        }).catch(error => {
            console.log(error);
            this.util.toast("手机号格式不正确");
        })

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

    //<<<<<<<<<<<<<<<<< 获取验证码 <<<<<<<<<<<<<<<<<

    //todo
    sendMessage() {

    }

    openLoginPage() {
        this.navCtrl.push(LoginPage);
    }

}