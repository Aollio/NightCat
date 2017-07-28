import {NgModule} from "@angular/core";
import {EesignerTypesPage} from "./designertypes/designertypes";
import {IonicModule} from "ionic-angular";

@NgModule({
    declarations: [
        EesignerTypesPage
    ],
    entryComponents: [
        EesignerTypesPage
    ],
    imports: [
        IonicModule,
    ],
    exports: [
        EesignerTypesPage
    ]

})
export class EmployerHomeModule {

}
