function initializeFontSize() {
    var html = document.documentElement;
    var width = html.getBoundingClientRect().width;
    html.style.fontSize = width / 32 + 'px';
    console.log('This is nightcat')
}