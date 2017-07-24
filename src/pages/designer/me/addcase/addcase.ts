import {Component} from "@angular/core";
import {ImagePicker} from '@ionic-native/image-picker';


@Component({
    selector: 'page-addcase',
    templateUrl: 'addcase.html'

})
export class AddCasePage {
    constructor(public imagePicker: ImagePicker) {

    }

    addpicture;
    maxSize: any = 200 * 1024;//200KB
    description: string = '';



    imagePicker1() {

        let options = {
            maximumImagesCount: 1,
            width: 300,
            height: 300,
            quality: 75
        };

    }

}
