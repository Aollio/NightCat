import {CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {PublishOrderItemComponent} from "./published-order-item/published-order-item";
import {DesignerItemMax} from "./designer-item-max/designer-item";
import {IonicModule} from "ionic-angular";
import {DesignerProjectStatusComponent} from "./designer-project-status/designer-project-status";
import {EmployerProjectStatusComponent} from "./employer-project-status/employer-project-status";
import {NoProjectComponent} from "./no-project/no-project";

@NgModule({
    imports: [IonicModule],

    declarations: [
        PublishOrderItemComponent,
        DesignerItemMax,
        DesignerProjectStatusComponent,
        EmployerProjectStatusComponent,
        NoProjectComponent
    ],
    entryComponents: [
        DesignerItemMax
    ],

    exports: [
        PublishOrderItemComponent,
        DesignerItemMax,
        DesignerProjectStatusComponent,
        EmployerProjectStatusComponent,
        NoProjectComponent
    ]
})

export class ComponentModule {
}