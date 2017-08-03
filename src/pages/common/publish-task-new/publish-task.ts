import {Component} from "@angular/core";
import {SharedService} from "../../../service/share.service";
import {AlertController, NavController} from "ionic-angular";
import {Util} from "../../../service/util";


declare let initializeFontSize: any;

@Component({
    selector: "page-publish-task",
    templateUrl: 'publish-task.html'
})
export class PublishTaskPageNew {

    maincolor: string;
    designer: boolean;
    relationship: any;




    public event = {
        // type:'',
        title:'',
        description:"",
        preBudget:"",
        // grabDeadline:"",
        designArea:"",
        count:"",
        workTime:"",

        // relationship: 'key',
        timeStarts: '2017-01-01',
        timeEnds: '2017-01-01',
        timeStar: '2017-01-01',
        employer_deadline: '2017-01-01'
    };

    ionViewDidEnter() {
        initializeFontSize();
        console.log("com")
    }

    constructor(public util:Util,
                public shared: SharedService,
                public navCtrl:NavController,
                public alertCtrl:AlertController) {
        this.maincolor = shared.getPrimaryColor();
        this.designer = shared.currentModuleIsDesigner;
    }


    publish(){
        let loading = this.util.createLoading("",{});
        loading.present();

        setTimeout(()=>{
            let alert = this.alertCtrl.create({
                // title: '警告',
                title: "发布成功！",
                buttons: [
                    {
                        text: 'Ok',
                        handler: data => {
                            loading.dismiss();
                            this.navCtrl.pop();
                            console.log('Saved clicked');
                        }
                    }
                ]
            });
            alert.present();
        },500);


    }

    goBack(){
        if(this.isInputSome()){
            let alert = this.alertCtrl.create({
                title: '警告',
                // subTitle: '有新设计师接单，请查看',
                message: "确定要退出吗？ 您的项目将不会保存",
                buttons: [
                    {
                        text: 'Cancel',
                        handler: data => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Ok',
                        handler: data => {
                            this.navCtrl.pop();
                            console.log('Saved clicked');
                        }
                    }
                ]
            });
            alert.present();
        }else {
            this.navCtrl.pop();
        }
    }

    //判断用户是否输入
    isInputSome(){
        if (this.event.title.trim()!="") return true;
        if (this.event.description.trim()!="") return true;
        if (this.event.preBudget.trim()!="") return true;
        if (this.event.designArea.trim()!="") return true;
        if (this.event.count.trim()!="") return true;
        if (this.event.workTime.trim()!="") return true;

        return false;
    }

}