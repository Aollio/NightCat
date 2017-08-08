import {Component, CUSTOM_ELEMENTS_SCHEMA, Input, NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {DesignerMeDetailPage} from "../../pages/designer/me/medetail/medetail";
import {UsersService} from "../../service/ajax/users.service";

declare let initializeFontSize: any

@Component({
    selector: 'designer-item-max',
    templateUrl: 'designer-item.html'
})

export class DesignerItemMax {
    @Input("designer") designer;

    private userInfo={};

    constructor(private userServ: UsersService) {
        this.userInfo['img_url']='';
    }

    ionViewDidEnter() {
        //获取用户信息 显示图片
        console.log('get userInfo');
        this.userServ.getInfo(this.designer.uid).then(user => {
            this.userInfo = user;
        }).catch(error => {
            console.log(error);
        });
    }
}

