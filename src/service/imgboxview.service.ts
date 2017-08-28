import {Injectable} from "@angular/core"

declare let jQuery: any;

let $ = jQuery;

@Injectable()
//图片点击查看
export class ImgBoxViewService {

    private time = '200ms';
    private $imgBoxView;

    constructor() {
        this.$imgBoxView = $('<div></div>').css({
            position: "absolute",
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'transparent',
            transition: `background ${this.time} ease-in`
        })
    }

    bindImg(selector) {
        $("ion-app").on("click", selector, (e) => this.showImg(e));
    }

    private imgStyle = {
        position: 'absolute',
        transition: `width ${this.time},height ${this.time},top ${this.time},left ${this.time}`
    };

    //点击后显示
    private showImg(e) {
        console.log(e);
        let $target = $(e.target);

        let $img = $(`<img src="${e.target.src}"/>`).css(this.imgStyle);

        let $imgbox = this.$imgBoxView.clone()
            .click(() => {
                console.log('animated', $img.is(":animated"))
                if ($img.is(":animated")) {
                    return;
                }
                // this.setSamePosition($img, $img);//消除auto
                this.setSamePosition($img, $target);
                $imgbox.css('background', 'transparent');
                setTimeout(() => {
                    $imgbox.remove();
                }, parseInt(this.time));
            })
            .append($img)
            .appendTo("ion-app"); //添加入app
        this.setSamePosition($img, $target);

        //背景渐变
        $imgbox.css('background', 'rgba(0, 0, 0, 0.7)');

        let aspectRatio = $img[0].naturalWidth / $img[0].naturalHeight; //原始宽高比
        //适配屏幕
        if (aspectRatio > $imgbox.width() / $imgbox.height()) {    //img原始宽高比大于 imgbox
            let height = $imgbox.width() / aspectRatio; //缩放后高度
            let top = $imgbox.height() / 2 - height / 2;
            $img.css({width: '100%', height: height, left: 0, top: top});
        } else {                                                   //img宽高比小于 imgbox
            let width = $imgbox.height() * aspectRatio; //缩放后宽度
            let left = $imgbox.width() / 2 - width / 2;
            $img.css({width: width, height: "100%", left: left, top: 0});
        }

    }


    //设为相同位置
    private setSamePosition($obj, $target) {
        $obj.offset($target.offset())
            .width($target.width()).height($target.height());
    }

}
