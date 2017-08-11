import {Injectable} from "@angular/core";
import {SharedService} from "../share.service";
import {NetworkService} from "../network.service";
import {HttpUrls} from "../httpurls.service";
import {KeynoteService} from "../keynote.service";
import {FilesService} from "./files.service";
import {ImagePicker} from "@ionic-native/image-picker";

@Injectable()
export class ImagesService {


    // private KEYNOTE: boolean;

    projects: Array<any>;

    constructor(public shared: SharedService,
                public keynote: KeynoteService,
                private http: NetworkService, private urls: HttpUrls,
                private imagePicker: ImagePicker,
                private files: FilesService) {
    }


    async picker(options) {
        options = options || {
            maximumImagesCount: 15,
            quality: 100,
            outputType: 1
        }

        console.log("开始选择图片")

        let result = []

        let imgs = await this.imagePicker.getPictures(options)

        for (let i = 0; i < imgs.length; i++) {
            console.log("选择图片后")
            this.files.upload(imgs[i]).then(url => {
                result.push(url)
            });
        }

        return result;
    }

    //new
    // type, limit, since_time, max_time
    async getProjects(param = {}): Promise<any> {

        let response = await this.http.get(this.urls.projects_list_get, param)

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async getUserProjects(): Promise<any> {

        let response = await this.http.getWithToken(this.urls.projects_of_user_get, {})

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async getProjectsInfo(id) {
        let response = await this.http.get(this.urls.project_info_get, {id: id});

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async getProjectsDynamics(id) {
        let response = await this.http.get(this.urls.project_dynamics_get, {id: id});

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async getProjectsComments(id) {
        let response = await this.http.get(this.urls.project_comments_get, {id: id});

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async getProjectImgs(id) {
        let response = await this.http.get(this.urls.project_imgs_get, {id: id});

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async publishProj(project) {
        let response = await this.http.postWithToken(this.urls.project_publish_post, project);

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

    async grabProject(grabInfo) {
        let response = await this.http.postWithToken(this.urls.project_grab_post, grabInfo);

        if (response.status != 200) {
            throw response;
        }
        return response.content;
    }

}