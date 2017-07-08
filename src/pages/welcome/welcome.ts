import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {DesignerHomePage} from "../designer/home/home";
import {Storage} from '@ionic/storage';
import {DesignerTabsPage} from "../designer/tabs/tabs";
import {LoginPage} from "../common/login/login";
import {RegisterPage} from "../common/register/register";
import {OrderDetailPage} from "../common/orderdetail/orderdetail"
import {OrderListComponent} from "../designer/orderlist/orderlist";
import {EmployerModulePage} from "../employer/employer";
import {DesignerModulePage} from "../designer/designer";
import {PublishTaskPage} from "../designer/publishtask/publishtask";
import {DesignerWalletPage} from "../designer/wallet/wallet";
import {CommentPage} from "../designer/comment/comment";

/**
 * Generated class for the WelcomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
    selector: 'page-welcome',
    templateUrl: 'welcome.html',
})
export class WelcomePage {

    rootPage: any;

    constructor(public navCtrl: NavController, public navParams: NavParams) {


    }


    /**
     * 这是主页的快速入口，用于开发
     * */
    orderDetailPage: any = OrderDetailPage;
    orderListComponent: any = OrderListComponent;

    employerHome: any = EmployerModulePage;
    employerLogin: any = LoginPage;
    designerLogin: any = LoginPage;

    designerHome: any = DesignerModulePage;
    pulishtaskPage: any = PublishTaskPage;
    designerWalletPage: any = DesignerWalletPage;

    commentPage:any = CommentPage;

    open(page, option) {
        this.navCtrl.push(page, option)
    }


    /**
     * 打开登录/注册页面
     * */
    openLogin(typeinfo) {
        this.navCtrl.push(LoginPage, {
            type: typeinfo
        })
    }


}


// this.storage.get('firstOpen').then((result) => {
//
//     if (result) {
//         this.rootPage = DesignerTabsPage;
//     }
//     else {
//         this.storage.set('firstOpen', true);
//         this.rootPage = WelcomePage;
//     }
// });