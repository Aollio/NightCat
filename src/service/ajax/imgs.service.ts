import {Injectable} from "@angular/core";
import {SharedService} from "../share.service";
import {KeynoteService} from "../keynote.service";
import {FileService} from "./files.service";
import {ImagePicker} from "@ionic-native/image-picker";
import {Platform} from 'ionic-angular'

@Injectable()
export class ImageService {


    constructor(public shared: SharedService,
                public keynote: KeynoteService,
                private imagePicker: ImagePicker,
                private files: FileService,
                private platform: Platform) {
    }


    /**
     * 选择图片, 返回文件URI. e.g. ['file://.......']
     */
    public async picker(options) {

        options = options || {
            maximumImagesCount: 15,
            quality: 100,
            outputType: 0 //返回uri
        }

        if (this.platform.is('android')) {
            console.log("在安卓环境中, 开始检测权限")
            let permission = await this.imagePicker.hasReadPermission()
            console.log("检测权限成功, 含有权限")
            if (!permission) {
                console.log("检测权限失败, 没有权限, 开始请求权限")
                let anyre = await this.imagePicker.requestReadPermission()
                console.log("请求权限成功", anyre)
            }
        }

        console.log("开始选择图片")

        let result = []

        let imgs = await this.imagePicker.getPictures(options)

        for (let i = 0; i < imgs.length; i++) {
            console.log("选择图片后")
            console.log(imgs[i])
            result.push(imgs[i])
        }

        console.log("picker: return urls")
        console.log(result)
        return result;
    }


    /**
     * 上传图片, 传入文件URI的数组, 返回文件URL. e.g. ['file://......', ......] => ['http/https://........', .......]
     */
    public async upload(uris: Array<any> = []) {
        let result = []
        for (let uri of uris) {
            let url = await this.files.upload(uri)
            result.push(url)
        }
        return result
    }

}