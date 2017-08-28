import {Injectable} from "@angular/core";
import {NetworkService} from "../network.service";
import {HttpUrls} from "../httpurls.service";

import {FileTransfer, FileUploadOptions, FileTransferObject} from '@ionic-native/file-transfer';

@Injectable()
export class FileService {

    fileTransfer: FileTransferObject;

    constructor(private http: NetworkService,
                private urls: HttpUrls,
                private transfer: FileTransfer) {
        this.fileTransfer = this.transfer.create()
    }


    async upload(file_uri) {
        console.log("文件上传......")
        let options: FileUploadOptions = {
            fileKey: 'file',
            fileName: 'name.jpg',
            headers: {}
        }

        try {
            let result = await this.fileTransfer.upload(file_uri, this.urls.upload, options)
            console.log('file upload.response', result.response)
            //string:
            // {"status":200,"message":"ok","content":"http://yemaotest.shanghai-cu.com/files/15035601223688332.1503560122368.jpg"}
            let response = JSON.parse(result.response)
            return response.content
        } catch (err) {
            console.log('err', err)
        }

    }
}