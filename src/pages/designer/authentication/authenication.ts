import {NavController} from "ionic-angular";
import {Component} from "@angular/core";
import {ImageService} from "../../../service/ajax/imgs.service";
import {UsersService} from "../../../service/ajax/users.service";
import {Util} from "../../../service/util";
// import {ImagePicker} from '@ionic-native/image-picker';
@Component({
    selector: 'page-authentication',
    templateUrl: 'authentication.html'
})
export class AuthenticationPage {

    //todo 测试 上传认证信息
    info = {
        realname: "",
        id_card: "",
        position: "",
        position_img_url: "http://images.adsttc.com/media/images/594c/30ba/b2…uben_Muedra_Casa_Brise-Soleil_(40).jpg",
        school: "",
        school_img_url: "http://images.adsttc.com/media/images/594c/30ba/b2…uben_Muedra_Casa_Brise-Soleil_(40).jpg",
    }

    //检查输入是否正确
    checkInputValue() {
        console.log("realname", this.info.realname);
        if (this.info.realname.trim() == "") return "请填写真实姓名";
        if (this.info.id_card.trim() == "") return "请填写身份证号码";
        else if (!this.util.check_id_card(this.info.id_card)) return "身份证输入不合法";
        if (this.info.position.trim() == "") return "请填写职称证书";
        if (this.info.position_img_url.trim() == "") return "请上传职称证书";
        if (this.info.school.trim() == "") return "请填写学历";
        if (this.info.school_img_url.trim() == "") return "请上传学历证书";
        return true;
    }


    state: number = 1;

    constructor(public navCtrl: NavController,
                private userServ: UsersService,
                private util: Util,
                private imagesServ: ImageService) {
    }

    nextOrFinish() {
        if (this.state == 2) {//上传
            this.upLoad_authentication();
            return;
        }

        if (this.state == 3) {
            this.navCtrl.pop();
        }

        this.state++;
    }

    //todo 测试 上传认证信息
    //上传认证信息
    upLoad_authentication() {
        let checkResult = this.checkInputValue();
        if (checkResult !== true) {//输入不正确
            this.util.toast(checkResult);
            return;
        }

        let loading = this.util.createLoading("上传中");
        loading.present();
        this.userServ.setAuthentication(this.info).then(info => {
            loading.dismiss();
            this.state++;
        }).catch(err => {
            console.log(err);
            loading.dismiss();
        })
    }


    setState(state) {
        this.state = state;
    }

    upload_postion_img() {
        this.uploading_img().then(img_url => {
            this.info.position_img_url = img_url;
        }).catch(err => {
            console.log("上传图片出错", err);
        })
    }

    upload_school_img() {
        this.uploading_img().then(img_url => {
            this.info.school_img_url = img_url;
        }).catch(err => {
            console.log("上传图片出错", err);
        })
    }

    async uploading_img() {
        let img_urls = await this.imagesServ.picker({
            maximumImagesCount: 1,
            quality: 100,
            outputType: 1
        });
        return img_urls[0];
    }

}