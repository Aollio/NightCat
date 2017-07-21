import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from "@angular/core";
import {ImService} from "../../service/im/service.im";
import {ImConfig} from "../../service/im/config.im";
import {IMPage} from "./im";
import {IonicModule} from "ionic-angular";
import {ChatListComponent} from "./chatlist/chatlist";
import {ChatPage} from "./chat/chat";
import {ChatItemComponent} from "./chatitem/chatitem";

@NgModule({
    declarations: [
        IMPage,
        ChatListComponent,
        ChatPage,
        ChatItemComponent
    ],
    entryComponents: [
        IMPage,
        ChatListComponent,
        ChatPage,
        ChatItemComponent
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