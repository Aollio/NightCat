import {Component, NgModule} from "@angular/core";
import {SlideMenuComponment} from "./slidemenu/slidemenu";
import {IonicPageModule} from "ionic-angular";
import {AccountSecurityPage} from "./securitycenter/accountsecurity/accountsecurity";
import {ProjectDetailPage} from "./order/orderdetail/projectdetail";
import {SupportPage} from "./support/support";
import {RegisterPage} from "./register/register";
import {LoginPage} from "./login/login";
import {AboutPage} from "./about/about";
import {ResetPasswordPage} from "./resetpassword/resetpassword";
import {CommonModulePage} from "./commonpage";
import {SecurityCenterModule} from "./securitycenter/securitycenter.module";
import {DesignerMeModule} from "../designer/me/me.module";
import {PublishTaskPage} from "./publishtask/publishtask";
import {CommentOrderPage} from "./order/comment-order/comment-order";
import {OrderModule} from "./order/order.module";
import {CustomIconsModule} from "ionic2-custom-icons";
import {ImModule} from "../im/im.module";
import {PublishTaskPageNew} from "./publish-task-new/publish-task";
import {DesignerListMinComponent} from "./designer-list-min/designer-list";
import {ComponentModule} from "../../component/component.module";

@NgModule({
    imports: [
        IonicPageModule.forChild(CommonModulePage),
        SecurityCenterModule,
        DesignerMeModule,
        OrderModule,
        ImModule,
        CustomIconsModule,// Add this!
        ComponentModule
    ],
    declarations: [
        CommonModulePage,
        SlideMenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        AboutPage,
        ResetPasswordPage,
        PublishTaskPage,
        PublishTaskPageNew,
        DesignerListMinComponent,
    ],
    entryComponents: [
        CommonModulePage,
        SlideMenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        AboutPage,
        ResetPasswordPage,
        PublishTaskPage,
        PublishTaskPageNew,
        DesignerListMinComponent,
    ],
    exports: [
        AccountSecurityPage,
        SlideMenuComponment,
        LoginPage,
        RegisterPage,
        SupportPage,
        AboutPage,
        CommonModulePage,
        ResetPasswordPage,
        PublishTaskPage,
        PublishTaskPageNew,
        CommentOrderPage,
        DesignerListMinComponent,
    ],
    providers: []
})
export class CommonPageModule {
}