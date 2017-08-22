import {Component} from "@angular/core";
import {NavController, Events, AlertController} from "ionic-angular";
import {WelcomePage} from "../welcome/welcome";
import {SharedService} from "../../service/share.service";
import {Util} from "../../service/util";
import {LoginPage} from "../common/login/login";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {UsersService} from "../../service/ajax/users.service";
import {DesignerModulePage} from "../designer/designer";
import {EmployerModulePage} from "../employer/employer";
import {NetworkService} from "../../service/network.service";
import {NoticesService} from "../../service/ajax/notices.serveic";
import {NotificationsPage} from "../designer/nofitications/notifications";

@Component({
    selector: "page-first",
    templateUrl: "first.html"
})
export class FirstPage {

    constructor(private nav: NavController,
                public event: Events,
                private http: NetworkService,
                private userServ: UsersService,
                public shared: SharedService,
                private noticesServ:NoticesService,
                private alertCtrl:AlertController,
                private util: Util) {

        event.subscribe('gotologin', () => {
            util.toast('授权过期或者未登录');
            this.util.presentLoginPage(this.nav);
        })
        this.util.nav = this.nav;


        //监听新消息事件
        event.subscribe(this.noticesServ.s_has_new_notices,()=>{
            if (this.shared.isLogin()) {
                this.showAlert();
            }
        })

    }

    ionViewDidEnter() {
        this.firstUseApp();
    }

    firstUseApp() {
        console.log("firstUserApp", localStorage[SharedService.FIRST_USE_APP]);
        if (!localStorage[SharedService.FIRST_USE_APP]) {
            console.log("第一次使用")
            localStorage[SharedService.FIRST_USE_APP] = true;
            this.gotoWelcome({state: 1});
            return;
        }

        if (!localStorage[SharedService.TOKEN]) {
            console.log("没有token");
            this.gotoWelcome({state: 2});
            return;
        }

        console.log("自动登录", "token", localStorage[SharedService.TOKEN]);
        this.http.setToken(localStorage[SharedService.TOKEN]);
        this.userServ.getInfo(localStorage[SharedService.TOKEN].split("_")[0])
            .then(user => {
                this.shared.setCurrentUser(user);
                this.gotoHome(user.role);

                //发出读取消息事件
                console.log("publish event","s_get_notices");
                this.event.publish(this.noticesServ.s_get_notices);
            }).catch(error => {
            console.log(error);
            this.gotoWelcome({state: 2});
        })
    }


    gotoWelcome(option = {}) {
        this.nav.setRoot(WelcomePage, option, {animate: true})
    }

    gotoLogin() {
        this.nav.setRoot(LoginPage, {}, {animate: true})
    }

    gotoHome(type) {
        if (type == 0) {
            this.nav.setRoot(DesignerModulePage, {animate: true})
        } else {
            this.nav.setRoot(EmployerModulePage, {animate: true})
        }
    }

    showAlert() {
        let confirm = this.alertCtrl.create({
            title: '提示',
            message: '您有新消息,请查看',
            buttons: [
                {
                    text: '立即查看',
                    handler: () => {
                        console.log('Disagree clicked');
                        this.nav.push(NotificationsPage);
                    }
                },
                {
                    text: '我知道了',
                    handler: () => {
                        console.log('Agree clicked');
                    }
                }
            ]
        });
        confirm.present();
    }

}