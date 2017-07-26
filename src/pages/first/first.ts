import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {Storage} from '@ionic/storage';
import {WelcomePage} from "../welcome/welcome";
import {RegisterPage} from "../common/register/register";
import {el} from "@angular/platform-browser/testing/src/browser_util";
import {DesignerModulePage} from "../designer/designer";
import {EmployerModulePage} from "../employer/employer";
import {provideStorage} from "../../app/app.module";

@Component({
    selector: "page-first",
    templateUrl: "first.html",
    providers: [
        {provide: Storage, useFactory: provideStorage}
    ]
})
export class FirstPage {

    constructor(private nav: NavController, private storage: Storage) {
        this.storage.get('first').then(val => {
            if (val == null || val == 'true') {
                this.nav.setRoot(WelcomePage)
                this.storage.set('first','true')
            } else {
                this.storage.get('token').then(val => {
                    if (val == null || val == 'false') {
                        this.nav.setRoot(RegisterPage)
                    } else {
                        this.storage.get('role').then(val => {
                            if (val == null) {
                                this.nav.setRoot(WelcomePage)
                            } else if (val == '00') {
                                this.nav.setRoot(DesignerModulePage)
                            } else {
                                this.nav.setRoot(EmployerModulePage)
                            }
                        })
                    }
                })
            }
        }).catch(error => {
            console.log('storage error => WelcomePage')
            this.nav.setRoot(WelcomePage)
        })
        // this.storage.set('first','true')
    }

}