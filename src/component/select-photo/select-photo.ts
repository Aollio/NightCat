import {Component, EventEmitter, Output, ViewChild} from '@angular/core';

import {NavController, NavParams} from "ionic-angular";
import {Util} from "../../service/util";
import {Manager} from "../../service/manager";
declare let jQuery: any;


@Component({
    selector: 'select-photo',
    templateUrl: 'select-photo.html'
})

export class SelectPhoto {

    main_color: any;

    constructor(private util: Util,
                private manager: Manager,
                private nav: NavController,
                private navParam: NavParams) {
        this.main_color = this.manager.sharedServ.getPrimaryColor();


    }

    @Output() select = new EventEmitter<boolean>();

    private $inputImg;
    private $input;

    ionViewDidEnter() {
        this.$input = jQuery("#input").change(() => {
            console.log(this.$input.files)
        });
        this.$inputImg = jQuery("#inputImg").click(() => {
            console.log("click  img")
            this.$input.click();
        });

    }


    open(page, option, navparam) {
        this.nav.push(page, option, navparam)
    }

}

