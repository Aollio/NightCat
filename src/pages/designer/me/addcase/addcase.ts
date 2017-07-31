import {Component} from "@angular/core";
import {ImagePicker} from "@ionic-native/image-picker";


@Component({
    selector: 'page-addcase',
    templateUrl: 'addcase.html'

})
export class AddCasePage {

    projectName: string = "";
    description: string = "";
    imgs = ["assets/img/first.png"];

    constructor(public imagePicker: ImagePicker) {
    }

    openImagePicker() {
        if (this.imgs.length >= 3) return;

        this.imagePicker.getPictures({}).then((results) => {
            for (var i = 0; i < results.length; i++) {
                console.log('Image URI: ' + results[i]);
            }
        }, (err) => {
        });
    }

}
