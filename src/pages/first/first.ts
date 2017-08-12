import {Component} from "@angular/core";
import {NavController, Events} from "ionic-angular";
import {WelcomePage} from "../welcome/welcome";
import {SharedService} from "../../service/share.service";
import {Util} from "../../service/util";
import {LoginPage} from "../common/login/login";

@Component({
    selector: "page-first",
    templateUrl: "first.html"
})
export class FirstPage {

    constructor(private nav: NavController,
                public event: Events,
                public share: SharedService,
                private util: Util) {

        //后门, 方便开发. publish this 'backdoor' event.
        // SharedService will receive this event and init default user
        // (auto login using default user)
        // event.publish('backdoor');

        // this.storage.get('first').then(val => {
        //     if (val == null || val == 'true') {
        //         console.log('first', val)
        //         this.gotoWelcome()
        //         this.storage.set('first', 'false')
        //     } else {
        //         this.storage.get('token').then(val => {
        //             console.log('token', val)
        //             if (val == null || val == 'false') {
        //                 this.gotoLogin()
        //             } else {
        //                 this.storage.get('role').then(val => {
        //                     console.log('role', val)
        //                     if (val == null) {
        //                         this.gotoWelcome()
        //                     } else if (val == '00') {
        //                         this.nav.setRoot(DesignerModulePage, {animate: true})
        //                     } else {
        //                         this.nav.setRoot(EmployerModulePage, {animate: true})
        //                     }
        //                 })
        //             }
        //         })
        //     }
        // }).catch(error => {
        //     console.log('storage error => WelcomePage')
        //     this.nav.setRoot(WelcomePage)
        // })

        this.gotoWelcome()

        event.subscribe('gotologin', () => {
            util.toast('授权过期或者未登录');
            this.util.presentLoginPage(this.nav)
        })


        // this.storage.set('first','true')

    }

    gotoWelcome() {
        this.nav.setRoot(WelcomePage, {}, {animate: true})
    }

    gotoLogin() {
        this.nav.setRoot(LoginPage, {}, {animate: true})
    }

}