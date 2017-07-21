import {Component, Input} from "@angular/core";

@Component({
    selector: 'chatlist',
    templateUrl: 'chatlist.html'
})
export class ChatListComponent {


    @Input() msglist: Array<object>

    @Input() type: string

    @Input() isRobot: boolean = false
    @Input() userInfos: any
    @Input() robotInfos: any
    @Input() myInfo: any
    @Input() key: any


    constructor() {
    }


    canLoadMore: [String, Boolean]

    // showFullImg(src) {
    //     this.$store.dispatch('showFullscreenImg', {
    //         src
    //     })
    // }
    //
    // msgLoaded() {
    //     clearTimeout(this.msgLoadedTimer)
    //     this.msgLoadedTimer = setTimeout(() => {
    //         this.$emit('msgs-loaded')
    //     }, 20)
    // }


}