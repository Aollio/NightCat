import {Injectable} from "@angular/core";

@Injectable()
export class ImgUploaderService {
    private _maxCount = 2;//限制数量

     _input = null; //通过这个能查看 数量
    private _output = null;

    //图片上传后返回的url
    img_urls = [];

    private _initDom() {

        this._input = document.getElementById("input");
        this._output = document.getElementById("output");
        if (this._input == null ) {
            throw new Error("id为input的dom对象不存在");
        }else if(this._output == null){
            throw new Error("id为output的dom对象不存在");
        }

        this._completeCount = 0;
    }

    // 显示 与input change 绑定
    show_img() {
        this._initDom(); //这个为了防止 在之前页面调用后  input 还指向之前页面

        this._output.innerHTML = "";

        for (let img of this._limit_file()) {
            this._output.innerHTML += `<img src='${URL.createObjectURL(img)}'/>`;
        }
    }

    // 限制数量
    private _limit_file() {
        let empty: any = []
        return this._input && this._input.files && Array.from(this._input.files).slice(0, this._maxCount) || empty;
    }

    private _is_uploading = false//是否在上传中
    private _completeCount = 0  //上传完成数
    //      上传     上传完成   出错回调
    upload(up_func, complete, showError?) {
        console.log("1")
        if (!this._input || this._input.files.length == 0) return;
        console.log("2")
        if (this._is_uploading) return;  //   防止多次点击

        console.log("-----------------start upload img --------------------- ");
        this._is_uploading = true;
        this.img_urls = [];
        this._completeCount = 0;

        for (let img of this._limit_file()) {
            console.log(img)
            let reader = new FileReader();
            let imgInfo;
            reader.onload = (e) => {
                let data = e.target['result'];
                imgInfo = {
                    // name: img.name,               //图片名称  中文有问题
                    type: /\/(\w+);/.exec(data)[1],  //图片格式
                    file: data.split(",")[1],        //base64 图片内容
                };
                up_func(imgInfo).then((img_url) => { //上传图片
                    this.img_urls.push(img_url);
                    this._completeCount++;

                    if (this._isComplete()) {//上传完成 执行回调
                        this._is_uploading = false;
                        this._completeCount = 0;
                        console.log("-----------------complete upload img --------------------- ");
                        complete();
                    }
                }).catch(err => {
                    console.log(err);
                    showError(err);
                });
            }
            reader.readAsDataURL(img);
        }
    }

    async getImgInfo(){

    }


    //是否完成上传
    private _isComplete() {
        return this._completeCount == this._limit_file().length;
    }
}