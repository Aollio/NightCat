import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, NgModule, NO_ERRORS_SCHEMA, OnInit} from '@angular/core';
import {DesignerMeDetailPage} from "../../pages/designer/me/medetail/medetail";
import {UsersService} from "../../service/ajax/users.service";
import {Util} from "../../service/util";
import {NavController} from "ionic-angular";
import {SharedService} from "../../service/share.service";

declare let initializeFontSize: any

@Component({
    selector: 'designer-item-max',
    templateUrl: 'designer-item.html'
})

export class DesignerItemMax {
    // private designer;

    constructor(private userServ: UsersService,
                private navCtrl: NavController,
                private  util: Util,
                private shared: SharedService) {
    }

    @Input("designer")
    designer;


    openDesignerPage(designer) {
        this.navCtrl.push(DesignerMeDetailPage, {
            designer: designer
        })
    }

}

