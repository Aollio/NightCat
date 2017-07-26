function initializeFontSize(){
    var html=document.documentElement;
    var width=html.getBoundingClientRect().width;
    html.style.fontSize=width/160+'px';
    console.log('This is nightcat')
}