import {NgModule} from "@angular/core";
import {DesignerWalletPage} from "./wallet";
import {IonicModule, IonicPageModule} from "ionic-angular";
import {ConsumeDetail} from "./consumedetail/consumedetail";

@NgModule({
    declarations: [
        DesignerWalletPage,
        ConsumeDetail
    ],
    entryComponents: [
        DesignerWalletPage,
        ConsumeDetail
    ],
    exports: [DesignerWalletPage],
    imports: [IonicPageModule.forChild(DesignerWalletPage)]
})
export class WalletModule {
}