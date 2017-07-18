import {Component} from "@angular/core";
@Component({
    selector:'page-choosedesigner',
    templateUrl:'choosedesigner.html'
})
export class ChooseDesignerPage{

    desarray:Array<{avatar,name,time,describe}> = [
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
}