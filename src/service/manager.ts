import {Injectable} from "@angular/core";
import {SharedService} from "./share.service";
import {KeynoteService} from "./keynote.service";
import {NetworkService} from "./network.service";
import {Util} from "./util";
import {ImService} from "./im/service.im";
import {Events, NavController, ToastController} from "ionic-angular";
import {UsersService} from "./ajax/users.service";

@Injectable()
export class Manager {

    //UI
    public navCtrl: NavController;

    constructor(public sharedServ: SharedService,
                public keynote: KeynoteService,
                public http: NetworkService,
                public util: Util,
                public imServ: ImService,
                //服务
                public userServ: UsersService,
                public events: Events) {
        events.publish("manager-init")
    }
}