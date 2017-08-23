import {Injectable} from "@angular/core";
import {SharedService} from "../share.service";
import {KeynoteService} from "../keynote.service";
import {FileService} from "./files.service";
import {ImagePicker} from "@ionic-native/image-picker";

@Injectable()
export class ImageService {


    constructor(public shared: SharedService,
                public keynote: KeynoteService,
                private imagePicker: ImagePicker,
                private files: FileService) {
    }


    public async picker(options = {}) {
        options = options || {
            maximumImagesCount: 15,
            quality: 100,
            outputType: 1
        }
        options["outputType"] = 1

        console.log("开始选择图片")

        let result = []

        let imgs = await this.imagePicker.getPictures(options)

        for (let i = 0; i < imgs.length; i++) {
            console.log("选择图片后")
            let url = await this.files.upload({file: imgs[i]})
            result.push(url)
        }

        console.log("picker: return urls")
        console.log(result)
        return result;
    }


}