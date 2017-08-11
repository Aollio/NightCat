import {NgModule} from "@angular/core";
import {ImportantMePage} from "./me/me";
import {IonicModule} from "ionic-angular";
import {CustomIconsModule} from "ionic2-custom-icons";

@NgModule({
    imports: [
        IonicModule,
        CustomIconsModule,
    ],
    declarations: [
        ImportantMePage,
    ],
    entryComponents: [
        ImportantMePage
    ],
    exports: [
        ImportantMePage
    ],
    providers: []
})
export class ImportantModule {
}