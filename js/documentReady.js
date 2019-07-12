document.myReady = function(callback) {
    /* 封裝標準瀏覽器&IE */
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', callback, false);
    } else if (document.attachEvent) {
        /* ie */
        document.attachEvent('onreadystatechange', function() {
            if (document.readyState == "interactive") {
                callback(window.event);
            }
        });
    } else {
        window.onload = callback;
    }
}