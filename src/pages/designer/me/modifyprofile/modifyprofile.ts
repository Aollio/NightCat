import {Component} from "@angular/core";
import {NavController, NavParams} from "ionic-angular";
import {AddCasePage} from "../addcase/addcase";
import {AddHonorPage} from "../addhonor/addhonor";
import {SharedService} from "../../../../service/share.service";
import {UsersService} from "../../../../service/ajax/users.service";
import {Util} from "../../../../service/util";
import {ProjectService} from "../../../../service/ajax/projects.service";

@Component({
    selector: 'page-modifyprofile',
    templateUrl: 'modifyprofile.html'
})
export class ModifyProfilePage {

    //修改的信息
    private profile = {};


    constructor(public navCtrl: NavController,
                private userServ: UsersService,
                private util: Util,
                private projServ: ProjectService,
                private shared: SharedService) {
        this.util.updateObj(this.profile, shared.getCurrentUser());
    }

    beforeSave() {
        let result = this.checkValue();
        if (result !== true) {
            this.util.toast(result);
        } else {
            this.saveMsg();
        }
    }

    checkValue() {
        if (this.profile['nickname'] == '') return "请填写昵称";
        if (this.profile['service_length'] == '') return "请填写工时";
        if (this.profile['position'] == '') return "请填写职称";
        if (this.profile['school'] == '') return "请填写学历";
        if (this.profile['hourly_wage'] == '') return "请填写时薪";
        if (this.profile['type'] == '') return "请填写设计类型";
        if (this.profile['summary'] == '') return "请填写个人说明";
        return true;
    }

    //保存信息
    saveMsg() {
        this.userServ.modify_profile(this.profile).then(() => {
            this.util.toast("提交成功");
            this.shared.setCurrentUser(this.profile);
            this.navCtrl.pop();
        }).catch(err => {
            console.log(err);
            this.util.toast("提交失败");
        })
    }


    private addcase = AddCasePage;
    private addhonor = AddHonorPage;

    open(page, option) {
        this.navCtrl.push(page, option)
    }
}