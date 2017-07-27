import {Injectable} from "@angular/core";
import {SharedService} from "../share.service";
import {NetworkService} from "../network.service";
import {HttpUrls} from "../httpurls.service";
import {KeynoteService} from "../keynote.service";

@Injectable()
export class ProjectsService {


    private KEYNOTE: boolean;

    constructor(public shared: SharedService,
                public keynote: KeynoteService,
                private http: NetworkService, private urls: HttpUrls,) {
        this.KEYNOTE = shared.KEYNOTE;
    }


    async getProjects(param = {}): Promise<any> {
        if (this.KEYNOTE) {
            console.log('演示模式, 返回默认项目列表')
            return this.keynote.projects
        }
        let response = await this.http.get(this.urls.projects_url, param)

        if (response.status != 200) {
            Promise.reject(response)
        }
        return response.content
    }


}