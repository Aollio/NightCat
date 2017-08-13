import {Injectable} from "@angular/core";
import {NetworkService} from "../network.service";
import {HttpUrls} from "../httpurls.service";

@Injectable()
export class MessageService {

    constructor(private http: NetworkService,
                private urls: HttpUrls) {
    }

    async getNotices(): Promise<any> {

        let response = await this.http.getWithToken(this.urls.notices);

        console.log(response.content);
        if (response.status != 200) {
            Promise.reject(response)
        }
        return response.content

    }

}