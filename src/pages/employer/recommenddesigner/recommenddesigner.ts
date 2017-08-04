import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {DesignerMeDetailPage} from "../../designer/me/medetail/medetail";
import {ChooseDesignerPage} from "../choosedesigner/choosedesigner";
import {HelpChoosePage} from "../helpchoose/helpchoose";
import {UsersService} from "../../../service/ajax/users.service";
import {KeynoteService} from "../../../service/keynote.service";

declare let initializeFontSize: any;

@Component({
    templateUrl: 'recommenddesigner.html',
    selector: 'page-recommenddesigner'
})
export class RecommendDesignerPage {
    designerMeDetailPage: any = DesignerMeDetailPage;
    helpchoosePage: any = HelpChoosePage;

    users;

    constructor(public navctrl: NavController, private keynote: KeynoteService) {
        this.users = this.keynote.users
    }

    ionViewDidEnter() {
        initializeFontSize()
    }

    desarray: Array<{ avatar, name, time, describe }> = [
        {
            avatar: 'assets/img/des-1.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-2.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-3.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-4.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-1.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-2.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-3.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        },
        {
            avatar: 'assets/img/des-4.png', name: '张三', time: '100/时',
            describe: '帮助你是希望你成长、成功以后和我一样帮助他人帮助你是希望你成长、成功以后和我一样帮助他人'
        }];

    selected_index = -1;
    selected: any = null;

    selectDesigner(designer, index) {
        this.selected_index = index;
        this.selected = designer;
    }

    open(page, {}) {
        this.navctrl.push(page, {});
    }

    // //todo 内容刷新
    // doRefresh(refresher) {
    //     console.log('Begin async operation', refresher);
    //
    //     setTimeout(() => {
    //         console.log('Async operation has ended');
    //         refresher.complete();
    //     }, 2000);
    // }

}
