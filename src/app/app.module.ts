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
import {HttpModule} from "@angular/http";
import {PopoverPage} from "../pages/popver/popver";
import {CustomIconsModule} from 'ionic2-custom-icons';
import {ImService} from "../service/im/service.im";
import {ImModule} from "../pages/im/im.module";
import {Util} from "../service/util";
import {FirstPage} from "../pages/first/first";
import {IonicStorageModule} from "@ionic/storage";
import {Storage} from '@ionic/storage';
import {KeynoteService} from "../service/keynote.service";
import {AdsService} from "../service/ajax/ads.service";
import {ImagePicker} from "@ionic-native/image-picker";
import {ProjectsService} from "../service/ajax/projects.service";
import {OrderProcessModule} from "../pages/common/order/orderprocess/orderprocess.module";
import {OrderModule} from "../pages/common/order/order.module";


export function provideStorage() {
    return new Storage({});
}

@NgModule({
    declarations: [
        MyApp,
        WelcomePage,
        BlankPage,
        PopoverPage,
        FirstPage
    ],
    entryComponents: [
        WelcomePage,
        BlankPage,
        PopoverPage,
        FirstPage
    ],
    imports: [
        OrderProcessModule,
        OrderModule,
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
            menuType: 'overlay'
        }),
        IonicStorageModule.forRoot({}),
        CustomIconsModule // Add this!
    ],
    exports: [],
    bootstrap: [IonicApp],

    providers: [
        ImService,
        Util,
        HttpUrls,
        KeynoteService,
        AdsService,
        NetworkService,
        SharedService,
        UsersService,
        ProjectsService,
        StatusBar,
        HTTP,
        SplashScreen,
        ImagePicker,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        {provide: Storage, useFactory: provideStorage},
    ]
})
export class AppModule {
}


