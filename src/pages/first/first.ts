import {Component} from "@angular/core";
import {NavController, Events} from "ionic-angular";
import {Storage} from '@ionic/storage';
import {WelcomePage} from "../welcome/welcome";
import {RegisterPage} from "../common/register/register";
import {DesignerModulePage} from "../designer/designer";
import {EmployerModulePage} from "../employer/employer";
import {provideStorage} from "../../app/app.module";
import {SharedService} from "../../service/share.service";
import {Util} from "../../service/util";
import {LoginPage} from "../common/login/login";

@Component({
    selector: "page-first",
    templateUrl: "first.html",
    providers: [
        {provide: Storage, useFactory: provideStorage}
    ]
})
export class FirstPage {

    constructor(private nav: NavController,
                private storage: Storage,
                public event: Events,
                public share: SharedService,
                private util: Util) {

        console.log('publish event')
        //后门, 方便开发
        event.publish('backdoor')

        this.storage.get('first').then(val => {
            if (val == null || val == 'true') {
                this.gotoWelcome()
                this.storage.set('first', 'true')
            } else {
                this.storage.get('token').then(val => {
                    if (val == null || val == 'false') {
                        this.gotoLogin()
                    } else {
                        this.storage.get('role').then(val => {
                            if (val == null) {
                                this.gotoWelcome()
                            } else if (val == '00') {
                                this.nav.setRoot(DesignerModulePage, {animate: true})
                            } else {
                                this.nav.setRoot(EmployerModulePage, {animate: true})
                            }
                        })
                    }
                })
            }
        }).catch(error => {
            console.log('storage error => WelcomePage')
            this.nav.setRoot(WelcomePage)
        })

        event.subscribe('gotologin', () => {
            util.toast('授权过期或者未登录')
            this.nav.setRoot(LoginPage, {}, {animate: true})
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