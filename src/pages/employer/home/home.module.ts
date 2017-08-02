import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {AppointPage} from "./appoint/appoint";
import {DesingerTypePage} from "./desinger-types/desinger-types";
import {DesignerTypesPage} from "./designer/designertypes";

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
    ],
    exports: [
        DesignerTypesPage,
        DesingerTypePage
    ]

})
export class EmployerHomeModule {

}
