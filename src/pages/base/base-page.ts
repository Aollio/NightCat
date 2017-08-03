import {NavController,Events } from "ionic-angular";
import {SharedService} from "../../service/share.service";
import {Util} from "../../service/util";


export class BasePage {
    protected mainColor;
    protected title;

    // protected params=[];

    constructor(protected navCtrl: NavController,
                protected events:Events,

                protected shared: SharedService,
                protected util: Util) {
        // this.
        this.mainColor = shared.getPrimaryColor();
    }



}