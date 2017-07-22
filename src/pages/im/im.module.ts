import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {IMPage} from "./im";
import {IonicModule} from "ionic-angular";
import {ChatPage} from "./chat/chat";

@NgModule({
    declarations: [
        IMPage,
        ChatPage,
    ],
    entryComponents: [
        IMPage,
        ChatPage,
    ],
    imports: [IonicModule],
    exports: [
        IMPage,
        ChatPage
    ],
    schemas:[CUSTOM_ELEMENTS_SCHEMA],
    providers: []
})
export class ImModule {
    constructor() {
    }
}