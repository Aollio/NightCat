import {Component, forwardRef, Input} from '@angular/core';

import {NavController, NavParams} from "ionic-angular";
import {Manager} from "../../service/manager";
import {Util} from "../../service/util";
import {ImageService} from "../../service/ajax/imgs.service";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {removeUnusedFonts} from "@ionic/app-scripts/dist/optimization/remove-unused-fonts";

const noop = () => {
};

export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ImageInputComponent),
    multi: true
};


@Component({
    selector: 'image-input',
    templateUrl: 'image-input.html',
    providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
})
export class ImageInputComponent implements ControlValueAccessor {


    private imgs;


    constructor(private nav: NavController,
                private imagesServ: ImageService) {
    }

    uploading_img() {

        this.imagesServ.picker({})
            .then(result => {
                console.log("async imagesServ: ")
                console.log(result)
                for (let x of result) {
                    console.log("imagesServe:")
                    console.log(x)
                    this.imgs.push(x)
                }
            })
            .catch(error => console.log(error))
        // this.imgs.push("http://yemaotest.shanghai-cu.com/files/15025091100358078.jpg")
    }


    private onTouchedCallback: () => void = noop;
    private onChangeCallback: (_: any) => void = noop;


    //Set touched on blur
    onBlur() {
        this.onTouchedCallback();
    }

    //From ControlValueAccessor interface
    writeValue(v: any) {
        this.imgs = v;
        this.onChangeCallback(v);
    }

    //From ControlValueAccessor interface
    registerOnChange(fn: any) {
        this.onChangeCallback = fn;
    }

    //From ControlValueAccessor interface
    registerOnTouched(fn: any) {
        this.onTouchedCallback = fn;
    }


}

