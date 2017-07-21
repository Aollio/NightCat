import {Component} from '@angular/core';
import {AlertController, NavController, NavParams, PopoverController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {SharedService} from "../../../service/share.service";
import {DesignerModulePage} from "../../designer/designer";
import {PopoverPage} from "../../popver/popver";
import {EmployerModulePage} from "../../employer/employer";


@Component({
    selector: 'page-register',
    templateUrl: 'register.html',
})
export class RegisterPage {
    testRadioResult: any;
    testRadioOpen: boolean;
    state: any = 1;
    isDesigner: boolean = true;
    role: any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public shared: SharedService,
                public alerCtrl: AlertController,
                public popoverCtrl: PopoverController) {
        this.role = navParams.get('role');
        if (this.role == 'designer') {
            this.navCtrl.setRoot(DesignerModulePage)
        } else {
            this.navCtrl.setRoot(EmployerModulePage)
        }
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
    }

    openLoginPage() {
        this.navCtrl.push(LoginPage);
    }

    next() {
        this.state = 2;
    }

    login() {
        this.state = 3;
    }

    open() {
        this.navCtrl.push(DesignerModulePage, {});
    }


    doRadio() {
        let popover = this.popoverCtrl.create(PopoverPage);
        // let alert = this.alerCtrl.create();
        popover.present({});
        //     alert.setTitle('Lightsaber color');
        //
        //     alert.addInput({
        //         type: 'radio',
        //         label: 'Blue',
        //         value: 'blue',
        //         checked: true
        //     });
        //
        //     alert.addInput({
        //         type: 'radio',
        //         label: 'Green',
        //         value: 'green'
        //     });
        //
        //     alert.addInput({
        //         type: 'radio',
        //         label: 'Red',
        //         value: 'red'
        //     });
        //
        //     alert.addInput({
        //         type: 'radio',
        //         label: 'Yellow',
        //         value: 'yellow'
        //     });
        //
        //     alert.addInput({
        //         type: 'radio',
        //         label: 'Purple',
        //         value: 'purple'
        //     });
        //
        //     alert.addInput({
        //         type: 'radio',
        //         label: 'White',
        //         value: 'white'
        //     });
        //
        //     alert.addInput({
        //         type: 'radio',
        //         label: 'Black',
        //         value: 'black'
        //     });
        //
        //     alert.addButton('Cancel');
        //     alert.addButton({
        //         text: 'Ok',
        //         handler: data => {
        //             console.log('Radio data:', data);
        //             this.testRadioOpen = false;
        //             this.testRadioResult = data;
        //         }
        //     });
        //
        //     alert.present().then(() => {
        //         this.testRadioOpen = true;
        //     });
    }
}