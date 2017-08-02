import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {AppointPage} from "./appoint/appoint";
import {DesignerTypesPage} from "./designertypes/designertypes";
import {DesingerTypePage} from "./desinger-types/desinger-types";

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
