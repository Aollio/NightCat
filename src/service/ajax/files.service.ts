import {Injectable} from "@angular/core";
import {NetworkService} from "../network.service";
import {HttpUrls} from "../httpurls.service";


@Injectable()
export class FileService {


    constructor(private http: NetworkService,
                private urls: HttpUrls) {
    }


    async upload(file_uri: string) {

        let data = await this.http.post(this.urls.upload, {file: file_uri})

        console.log("upload:")
        console.log(data)

        return data.content
    }
}