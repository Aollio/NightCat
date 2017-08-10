import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {PublishOrderItemComponent} from "./published-order-item/published-order-item";
import {DesignerItemMax} from "./designer-item-max/designer-item";
import {IonicModule} from "ionic-angular";
import {DesignerProjectStatusComponent} from "./designer-project-status/designer-project-status";
import {EmployerProjectStatusComponent} from "./employer-project-status/employer-project-status";
import {NoProjectComponent} from "./no-project/no-project";
import {DesignerListMaxComponent} from "./designer-list-max/designer-list-max";

@NgModule({
    imports: [IonicModule],

    declarations: [
        PublishOrderItemComponent,
        DesignerItemMax,
        DesignerProjectStatusComponent,
        EmployerProjectStatusComponent,
        NoProjectComponent,
        //todo delete
        DesignerListMaxComponent
    ],
    entryComponents: [
        DesignerItemMax
    ],

    exports: [
        PublishOrderItemComponent,
        DesignerItemMax,
        DesignerProjectStatusComponent,
        EmployerProjectStatusComponent,
        NoProjectComponent,
        //todo delete
        DesignerListMaxComponent
    ]
})

export class ComponentModule {
}