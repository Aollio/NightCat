import {Injectable} from "@angular/core";
import {NetworkService} from "../network.service";
import {HttpUrls} from "../httpurls.service";


@Injectable()
export class FileService {


    constructor(private http: NetworkService,
                private urls: HttpUrls) {
    }


    async upload(fileInfo) {
        console.log("文件上传。。。")
        let data = await this.http.post(this.urls.upload, fileInfo);

        if (data.status != 200) {
            throw data;
        }
        return data.content
    }
}