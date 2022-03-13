export function isWebp() {
    function testWebP(callback) {
        let webP =  new Image();

        webP.onload = webP.onerror = function() {
            debugger
            callback(webP.height);
        }
        webP.scr = "http://www.gstatic.com/webp/gallery/1.webp";
    }

    testWebP(function (support) {
        let className = support ===  true ? 'webp' : 'no-webp';
        
        document.documentElement.classList.add(className);
    })
}