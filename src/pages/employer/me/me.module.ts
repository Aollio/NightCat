import {NgModule} from "@angular/core";
import {EmpFavoriteDesignerPage} from "./favorite-designer/favorite-designer";
import {IonicModule} from "ionic-angular";
import {PayProjectsListPage} from "./pay-projects-list/pay-projects-list";

@NgModule({
    declarations: [
        EmpFavoriteDesignerPage,
        PayProjectsListPage,
    ],
    entryComponents: [
        EmpFavoriteDesignerPage,
        PayProjectsListPage,
    ],
    imports: [
        IonicModule
    ],
    exports: []
})
export class EmployerMeModule {

}