import {Injectable} from "@angular/core";
import {ImConfig} from "./config.im";
import {Messages} from "./msgs.im";
import {Sessions} from "./sessions.im";
import {State} from "./state.im";
import {System} from "./system.im";
import {Option} from "./option.im";
import {Util} from "../util";
import {Emoji} from "../../model/emoji";


//import netease NIM sdk from src/js/nim.js
declare let NIM: any;

@Injectable()
export class ImService {


    //全局状态
    public state: State


    private options: any


    constructor(public util: Util) {
        this.state = State.INSTANCE
        Util.INSTANCE = util
        Emoji.initalize()

        console.log(this.state)

        this.options = new Option()
    }


    initializeNim() {
        console.log(this.state)
        this.state.nim = NIM.getInstance(this.options)
    }

    registerSyncDone(func) {
        System.customSyncDone(() => func())
    }

    closeNim() {
        State.INSTANCE.nim.disconnect();
    }


}