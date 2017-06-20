/**
 * Created by Administrator on 2017/5/15.
 */
window.onload = function() {
    function $(className){return document.getElementsByClassName(className);}

    $("close-banner").onclick = function () {
        $("topbanner").style.display = "none";
    };
};
