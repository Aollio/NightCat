import {SharedService} from "../../service/share.service";

export class AbsCommonPage {
    navColor: string;
    /**
     * 先暂时设为参数为order id，或者为order的对象。
     * 构造器判断一下，如果是order id，则显示加载符号，如果是order直接显示
     * */
    constructor(public constance: SharedService) {
        this.navColor = constance.getNavColor();
        console.log(this.navColor)
    }
}