import {Component} from "@angular/core";
import {Util} from "../../../../service/util";
import {Manager} from "../../../../service/manager";
import {NavController, NavParams} from "ionic-angular";
import {ProjectService} from "../../../../service/ajax/projects.service";

@Component({
    selector: 'page-cancel-project',
    templateUrl: 'cancel-project.html'
})
export class CancelProjectPage {
    //当前登录角色对应的颜色
    main_color: any;
    private projectId;

    private reasonChoose = [false, false, false, false];
    private reasonTexts = ["已找到设计师", "没有找到合适的设计师", "我发错了", "我不想发布了"];
    //todo
    private reason="";


    constructor(private util: Util,
                private manager: Manager,
                private nav: NavController,
                private projectServ:ProjectService,
                private navParam: NavParams) {
        this.main_color = this.manager.sharedServ.getPrimaryColor();

        this.projectId = this.navParam.get("projectId");
    }

    changeStatus(i) {
        for(let i in this.reasonChoose){
            this.reasonChoose[i] = false;
        }
        this.reasonChoose[i] = true;
    }

    getReason(){
        if(this.reason==""){
            let i = this.reasonChoose.indexOf(true);
            if(i==-1){
                return ''
            }
            return this.reasonTexts[i];
        }

        return this.reason;
    }

    submit(){
        let reason = this.getReason();
        if(reason==""){
            this.util.toast("请填写取消原因");
            return;
        }

        this.projectServ.cancle(this.projectId,reason)
            .then(project=>{
                this.util.toast("取消订单成功!");
                this.nav.goToRoot({});
            })
            .catch(error=>{
                console.log(error);
            })
    }

}