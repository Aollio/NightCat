import {NgModule} from "@angular/core";
import {MePage} from "./me/me";
import {IonicModule} from "ionic-angular";
import {CustomIconsModule} from "ionic2-custom-icons";

@NgModule({
    imports: [
        IonicModule,
        CustomIconsModule,
    ],
    declarations: [
        MePage,
    ],
    entryComponents: [
        MePage
    ],
    exports: [
        MePage
    ],
    providers: []
})
export class ImportantModule {
}