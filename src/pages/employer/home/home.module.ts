import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {AppointPage} from "./appoint/appoint";
import {DesingerTypePage} from "./desinger-types/desinger-types";
import {DesignerTypesPage} from "./designer/designertypes";
import {CommonModule} from "@angular/common";
import {CommonPageModule} from "../../common/commonpage.module";

@NgModule({
    declarations: [
        DesignerTypesPage,
        AppointPage,
        DesingerTypePage
    ],
    entryComponents: [
        DesignerTypesPage,
        AppointPage,
        DesingerTypePage
    ],
    imports: [
        IonicModule,
        CommonModule,
        CommonPageModule
    ],
    exports: [
        DesignerTypesPage,
        DesingerTypePage
    ]

})
export class EmployerHomeModule {

}
