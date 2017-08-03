import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {PublishTaskPage} from "../../common/publishtask/publishtask";
import {PublishTaskPageNew} from "../../common/publish-task-new/publish-task";
declare let initializeFontSize:any
declare let jQuery:any
@Component({
    selector: 'publish-task-middleware',
    templateUrl: 'publish-task-middleware.html'
})

export class PublishTaskMiddleWarePage {
    constructor(public nav: NavController) {
        console.log('create')
        this.nav.parent.select(0);
    }

    first_open: boolean = true;
    second_open: boolean = false;

    ionViewDidEnter() {
        initializeFontSize()
        console.log(this.nav.parent.getSelected().index)
        if (this.second_open) {
            this.first_open = false;
            this.nav.parent.select(0);
            this.second_open = false;
            console.log("end jump of second")
        }
        if (this.first_open) {
            this.first_open = false;
            this.nav.parent.select(0);
            this.second_open = true;
            this.nav.push(PublishTaskPage, {});
            // this.nav.push(PublishTaskPageNew, {});
            console.log("end jump of first")
        }
        if (this.nav.parent.getSelected().index === 2) {
            this.nav.parent.select(0);
            // this.nav.push(PublishTaskPageNew, {});
            this.nav.push(PublishTaskPage, {});
            console.log("end jump because index == 1")
        }
        this.nav.parent.select(0);
        console.log("end jump")


        setTimeout(()=>{
            this.setInput();
        },100);
    }

    setInput(){
        jQuery(".myInput").find("input").focus(function () {
            console.log("focus")
            jQuery(this).parent().addClass("myInput-wrapper-focus");
        }).blur(function () {
            console.log("blur")
            let input = jQuery(this);
            if(input.val()==""){
                input.parent().removeClass("myInput-wrapper-focus");
            }
        })
        //若点击到title
        jQuery(".myInput").find(".myInput-title").click(function () {
            jQuery(this).siblings().focus();
        })
    }
}