import {NgModule} from "@angular/core";
import {IonicModule} from "ionic-angular";
import {AppointPage} from "./appoint/appoint";
import {DesingerTypePage} from "./desinger-types/desinger-types";
import {DesignerListPage} from "./designer/designer-list";
import {CommonModule} from "@angular/common";
import {CommonPageModule} from "../../common/commonpage.module";
import {ComponentModule} from "../../../component/component.module";

@NgModule({
    declarations: [
        DesignerListPage,
        AppointPage,
        DesingerTypePage,

    ],
    entryComponents: [
        DesignerListPage,
        AppointPage,
        DesingerTypePage
    ],
    imports: [
        IonicModule,
        CommonModule,
        CommonPageModule,
        ComponentModule,
    ],
    exports: [
        DesignerListPage,
        DesingerTypePage
    ]

})
export class EmployerHomeModule {

}
