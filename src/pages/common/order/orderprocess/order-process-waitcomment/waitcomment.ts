import {Component} from "@angular/core";
import {SharedService} from "../../../../../service/share.service";
import {NavController, NavParams} from "ionic-angular";
import {ProjectsService} from "../../../../../service/ajax/projects.service";
import {Util} from "../../../../../service/util";
// import {SharedService} from "../../../service/share.service";
declare let initializeFontSize:any;
@Component({
    selector: "waitcomment",
    templateUrl: 'waitcomment.html'
})
export class OrderProcessWaitcomment{

    ionViewDidEnter(){
        initializeFontSize();
        console.log("com");
    }


    private _comment={
        content:"",
        type:"2",
        score:"5",
    }


    user;
    constructor(public shared: SharedService,
                private navParams:NavParams,
                private util:Util,
                private projectServ:ProjectsService,
                private nav:NavController) {
        this.user = shared.getCurrentUser();
    }

    comment(){
        this.projectServ.comment(this._comment).then(comment=>{
            this.util.toast("评论成功！")
            this.nav.pop();
        }).catch(error=>{
            console.log(error);
            this.util.toast("评论失败，请稍后再试");
        })
    }

    //todo
    returnHome(){

    }

}