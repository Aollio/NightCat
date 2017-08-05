import {Injectable} from "@angular/core";
import {SharedService} from "./share.service";
import {KeynoteService} from "./keynote.service";
import {NetworkService} from "./network.service";
import {Util} from "./util";
import {ImService} from "./im/service.im";
import {NavController, ToastController} from "ionic-angular";

@Injectable()
export class Manager {
    constructor(public sharedServ: SharedService,
                public keynote: KeynoteService,
                public http: NetworkService,
                public util: Util,
                public imServ: ImService,
                //UI
                public navCtrl: NavController,
                public toastCtrl: ToastController) {
    }
}