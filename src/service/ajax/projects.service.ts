import {Injectable} from "@angular/core";
import {SharedService} from "../share.service";
import {NetworkService} from "../network.service";
import {HttpUrls} from "../httpurls.service";
import {KeynoteService} from "../keynote.service";

@Injectable()
export class ProjectsService {


    private KEYNOTE: boolean;

    projects: Array<any>;

    constructor(public shared: SharedService,
                public keynote: KeynoteService,
                private http: NetworkService, private urls: HttpUrls,) {
        this.KEYNOTE = shared.KEYNOTE;
        this.projects = this.keynote.projects;
    }

    async getProjectsById(id): Promise<any> {
        if (this.KEYNOTE) {
            console.log('演示模式, 返回默认用户');
            for (let index in this.projects) {
                let temp = this.projects[index];
                if (temp.create_by == id) {
                    return temp;
                }
            }
            return Promise.resolve(this.keynote.projects[0])
        }
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

    /*
    grabProj
    * */
    async grabProj(id) {

        //todo grad url
        let response = await this.http.postWithToken('url', {})

        if (response.status == 600) {
            //this is keynote mode. so return not really data
        }
    }


}