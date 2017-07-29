import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {AppointPage} from "./appoint/appoint";
import {DesignerTypesPage} from "./designertypes/designertypes";

@NgModule({
    declarations: [
        DesignerTypesPage,
        AppointPage
    ],
    entryComponents: [
        DesignerTypesPage,
        AppointPage
    ],
    imports: [
        IonicModule,
    ],
    exports: [
        DesignerTypesPage
    ]

})
export class EmployerHomeModule {

}
