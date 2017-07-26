import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {WelcomePage} from "../pages/welcome/welcome";
import {DesignerModule} from "../pages/designer/designer.module";
import {EmployerModule} from "../pages/employer/employer.module";
import {CommonModule} from "@angular/common";
import {BlankPage} from "../pages/blank/blank";
import {NetworkService} from "../service/network.service";
import {SharedService} from "../service/share.service";
import {HttpUrls} from "../service/httpurls.service";
import {FormsModule} from '@angular/forms';
import {UsersService} from "../service/ajax/users.service";
import {HTTP} from "@ionic-native/http";
import { HttpModule} from "@angular/http";
import {PopoverPage} from "../pages/popver/popver";
import {CustomIconsModule} from 'ionic2-custom-icons';
import {ImService} from "../service/im/service.im";
import {ImModule} from "../pages/im/im.module";
import {IMPage} from "../pages/im/im";
import {Util} from "../service/util";


@NgModule({
    declarations: [
        MyApp,
        WelcomePage,
        BlankPage,
        PopoverPage,
    ],
    entryComponents: [
        WelcomePage,
        BlankPage,
        PopoverPage,
    ],
    imports: [
        ImModule,
        HttpModule,
        BrowserModule,
        FormsModule,
        DesignerModule,
        EmployerModule,
        CommonModule,
        IonicModule.forRoot(MyApp, {
            mode: 'ios',
            backButtonText: '返回',
            tabsHideOnSubPages: true,
            hideTabsOnSubPages: true,
            //push overlay reveal
            menuType:'overlay'
        }),
        CustomIconsModule // Add this!

    ],
    exports: [],
    bootstrap: [IonicApp],

    providers: [
        ImService,
        Util,
        HttpUrls,
        NetworkService,
        SharedService,
        UsersService,
        StatusBar,
       // ImagePicker,//
        HTTP,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}

// constructor(public http:Http) {
//     $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8';
// Use x-www-form-urlencoded Content-Type

/**
 * The workhorse; converts an object to x-www-form-urlencoded serialization.
 * @param {Object} obj
 * @return {String}
 */
// var param = function (obj) {
//     var query = '', name, value, fullSubName, subName, subValue, innerObj, i;
//
//     for (name in obj) {
//         value = obj[name];
//
//         if (value instanceof Array) {
//             for (i = 0; i < value.length; ++i) {
//                 subValue = value[i];
//                 fullSubName = name + '[' + i + ']';
//                 innerObj = {};
//                 innerObj[fullSubName] = subValue;
//                 query += param(innerObj) + '&';
//             }
//         }
//         else if (value instanceof Object) {
//             for (subName in value) {
//                 subValue = value[subName];
//                 fullSubName = name + '[' + subName + ']';
//                 innerObj = {};
//                 innerObj[fullSubName] = subValue;
//                 query += param(innerObj) + '&';
//             }
//         }
//         else if (value !== undefined && value !== null)
//             query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
//     }
//
//     return query.length ? query.substr(0, query.length - 1) : query;
// };
//
// Override $http service's default transformRequest
// $httpProvider.defaults.transformRequest = [function (data) {
//     return angular.isObject(data) && String(data) !== '[object File]' ? param(data) : data;
// }];
// });
// }
// }
