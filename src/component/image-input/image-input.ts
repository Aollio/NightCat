import {Component, forwardRef} from '@angular/core';

import {ImageService} from "../../service/ajax/imgs.service";
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";
import {Events, NavController, Platform} from 'ionic-angular';


const noop = () => {
};

declare let window: any

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


    constructor(
                private imagesServ: ImageService,) {
    }

    pick_image() {
        this.imagesServ.picker({})
            .then(result => {
                console.log("async imagesServ: ")
                console.log(result)
                for (let x of result) {
                    console.log(x)
                    this.imgs.push(x)
                }
            })
            .catch(error => console.log(error))
    }

    async upload() {
        let result = await  this.imagesServ.upload(this.imgs)
        this.imgs.length = 0
        for (let x of result) {
            this.imgs.push(x)
        }
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
