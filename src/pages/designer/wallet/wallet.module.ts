import {NgModule} from "@angular/core";
import {DesignerWalletPage} from "./wallet";
import {IonicModule, IonicPageModule} from "ionic-angular";
import {ConsumeDetail} from "./consumedetail/consumedetail";
import {DesignerWithDrawPage} from "./withdraw/withdraw";
import {CustomIconsModule} from "ionic2-custom-icons";

@NgModule({
    declarations: [
        DesignerWalletPage,
        ConsumeDetail,
        DesignerWithDrawPage
    ],
    entryComponents: [
        DesignerWalletPage,
        ConsumeDetail,
        DesignerWithDrawPage
    ],
    exports: [DesignerWalletPage],
    imports: [IonicPageModule.forChild(DesignerWalletPage),
        CustomIconsModule // Add this!
     ]
})
export class WalletModule {
}