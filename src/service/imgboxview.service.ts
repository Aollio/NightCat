import {Injectable} from "@angular/core"

declare let jQuery: any;

let $ = jQuery;

@Injectable()
export class ImgBoxViewService {

    private imgBoxView = '<div style="position: absolute;top: 0;left: 0;width: 100%;height: 100%;background: whitesmoke;"></div>';
    private src = '';

    constructor() {

    }

    bindImg(selector) {
        $("ion-app").on("click", selector, this.showImg);
    }

    //点击后显示
    private showImg(e) {
        console.log(e);
        let $imgBox = $(this.imgBoxView).appendTo("ion-app");
        console.log($(this.imgBoxView));
        console.log($imgBox);
        let $img = $(`<img src="${e.target.src}"/>`);

        $img.offset().left = e.target.pageX;
        $img.offset().top = e.target.pageY;
        $img.width(e.target.width);
        $img.height(e.target.height);

        $imgBox.click(function () {
            $(this).remove();
        });
        $imgBox.append($img);


    }

}
