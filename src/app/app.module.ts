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
import {HttpModule} from "@angular/http";
import {PopoverPage} from "../pages/popver/popver";
import {CustomIconsModule} from 'ionic2-custom-icons';
import {ImService} from "../service/im/service.im";
import {ImModule} from "../pages/im/im.module";
import {Util} from "../service/util";
import {FirstPage} from "../pages/first/first";
import {IonicStorageModule} from "@ionic/storage";
import {KeynoteService} from "../service/keynote.service";
import {AdsService} from "../service/ajax/ads.service";
import {ProjectService} from "../service/ajax/projects.service";
import {OrderProcessModule} from "../pages/common/order/orderprocess/orderprocess.module";
import {OrderModule} from "../pages/common/order/order.module";
import {ComponentModule} from "../component/component.module";
import {Manager} from "../service/manager";
import {FileService} from "../service/ajax/files.service";
import {ImportantModule} from "../importants/important.module";
import {ImageService} from "../service/ajax/imgs.service";
import {ImagePicker} from "@ionic-native/image-picker";
import {NoticesService} from "../service/ajax/notices.serveic";

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
        CustomIconsModule, // Add this!
        ComponentModule,//自定义模块
        ImportantModule
    ],
    exports: [],
    bootstrap: [IonicApp],

    providers: [
        //service ajax
        ImageService,
        ImagePicker,
        FileService,
        AdsService,
        ProjectService,
        UsersService,
        NoticesService,
        //service im
        ImService,
        //service
        HttpUrls,
        KeynoteService,
        Manager,
        NetworkService,
        SharedService,
        Util,
        //Other
        //auto
        StatusBar,
        SplashScreen,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
    ]
})
export class AppModule {
}


