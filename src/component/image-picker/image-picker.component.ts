import {Component, Input, Output, EventEmitter} from "@angular/core"


@Component({
    selector: "image-picker",
    template: `<input type="file" accept="image/*" [multiple]="count > 1" (change)="change($event)"/>`,
})


//todo delete
export class ImagePickerComponent {

    //选择最大数量
    @Input('max-count') count = 1;
    //图片加载完成，传出图片信息
    @Output() onload = new EventEmitter()

    //图片信息
    private imgsInfo;
    //加载完成数
    private completeCount;

    //选择图片后
    private change($event) {

        this.imgsInfo = [];
        this.completeCount = 0;

        let imgs = $event.target.files;
        imgs = Array.from(imgs).slice(0, this.count);

        if (imgs.length == 0) {
            console.log("未选择图片");
            this.onload.emit(this.imgsInfo);//发出事件
            return;
        }

        console.log("-----------------加载图片--------------")
        console.log("图片数量"+imgs.length.toString()+'个');
        let index = 0;
        for (let img of imgs) {
            let reader = new FileReader();
            console.log(`加载中 ${index} ...`);

            reader.onload = (e) => {
                console.log("图片加载回调，开始处理");
                let data = e.target['result'];
                let imgInfo = {
                    data: data,
                    url: data,
                    // url: URL.createObjectURL(img),  //本地url  blob网页保错
                    length: data.length,
                    // name: img.name,               //图片名称  中文上传有问题
                    // type: /\/(\w+);/.exec(data)[1],  //图片格式
                    // base64: data.split(",")[1],        //base64 图片内容
                };
                this.imgsInfo.push(imgInfo);

                this.completeCount++;
                if (this.completeCount == imgs.length) {//所有加载完成
                    this.onload.emit(this.imgsInfo);//发出事件
                    console.log("-----------------图片加载完成--------------")
                }
                console.log("图片处理成功");
            }
            reader.readAsDataURL(img);
            // reader.readAsArrayBuffer(img);
            // reader.readAsText(img);
            // reader.readAsBinaryString(img);

            // reader.read(img);

        }
    }

}