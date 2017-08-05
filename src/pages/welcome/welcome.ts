import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams, Platform, ToastController} from 'ionic-angular';
import {LoginPage} from "../common/login/login";
import {EmployerModulePage} from "../employer/employer";
import {DesignerModulePage} from "../designer/designer";
import {NetworkService} from "../../service/network.service";
import {SharedService} from "../../service/share.service";
import {RegisterPage} from "../common/register/register";
import {ImagePicker} from "@ionic-native/image-picker";
import {Slides} from 'ionic-angular';
import {OrderProcessComplete} from "../common/order/orderprocess/order-process-complete/complete";

declare let initializeFontSize: any;

@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class WelcomePage {

    rootPage: any;
    state: any = 2;
    register: any = RegisterPage;





    constructor(public navCtrl: NavController, public navParams: NavParams,
                public platform: Platform,
                public toastCtrl: ToastController,
                public http: NetworkService,
                public shared: SharedService,
                public navParam: NavParams,
                public imagePicker: ImagePicker) {



        console.log('enter welcome')
        let isregister = this.navParam.get('register')
        console.log(isregister)
        if (isregister == 'true') {
            this.enterRegister()
        }
        let one = this.navParam.get('state');
        if (one != null) {
            this.state = one;
        }
    }

    ionViewDidEnter() {
        initializeFontSize();
        console.log("com")
    }

    openImagePicker() {
        this.imagePicker.getPictures({}).then((results) => {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, (err) => {
        });
    }


    open(page, option) {
        this.navCtrl.push(page, option)
    }


    openEmployer() {
        this.shared.currentModuleIsDesigner = false;
        this.navCtrl.setRoot(EmployerModulePage, {}, {animate: true})
    }

    openDesigner() {
        this.shared.currentModuleIsDesigner = true;
        this.navCtrl.setRoot(DesignerModulePage, {}, {animate: true});
    }


    enterRegister() {
        this.state = 2
    }


}