import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";

@Component({
    selector: 'com-popver',
    templateUrl: 'popver.html'
})
export class PopoverPage {
    constructor(public viewCtrl: ViewController) {
    }

    emojiarray: Array<any> = [
        'if_cat_emoji_face_smily-9-01_2361853',
        "if_cat_emoji_face_smily-20-01_2361861",
        "if_cat_emoji_face_smily-24-01_2361865",
        "if_cat_emoji_face_smily-29-01_2361869",
        "if_cat_emoji_face_smily-35-01_2361874",
        "if_cat_emoji_face_smily-38-01_2361877",


        ];
    selected_index = -1;
    selected: any = null;
    selectDesigner(designer, index) {
        this.selected_index = index;
        this.selected = designer;
    }

    close() {
        this.viewCtrl.dismiss();
    }
}