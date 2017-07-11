/**
 * Created by Jery on 2017/7/11.
 */
var ppl=70
var maxl=200
document.onkeydown=function(){
    var s=document.getElementById("b").value.length +1;
    if(s>maxl)document.getElementById("b").value=document.getElementById("b").value.substr(0,maxl-1)
    else document.getElementById("a").innerHTML="已输入："+s+"/"+maxl+" 字符"
}
function cha(){
    var txt=document.getElementById("b").value,tl=txt.length;
    var txtArray=[],k=(tl/ppl<=1)?1:Math.ceil(tl/ppl);
    for (var i=0;i<k;i++){
        txtArray[i]=txt.substr(i*ppl,ppl);
        alert(txtArray[i]) ;
    }
    document.getElementById("b").value=""
    document.getElementById("a").innerHTML="已输入字符: "
}