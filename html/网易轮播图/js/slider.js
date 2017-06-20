/**
 * Created by Administrator on 2017/6/5.
 */
window.onload =function () {
    function $(id) {
        return document.getElementById(id);
    }
    var js_slider = $('js_slider');
    var slider_main_block = $('slider_main_block');
    var imgs = slider_main_block.children;
    var slider_ctrl =$('slider_ctrl');

    for(var i=0;i<imgs.length;i++){
        var span = document.createElement('span');
        span.innerHTML = imgs.length-i;
        span.className = 'slider-ctrl-con';
        slider_ctrl.insertBefore(span,slider_ctrl.children[1])

    }

    var spans = slider_ctrl.children;
    spans[1].setAttribute('class','slider-ctrl-con current');

    var scrollWidth = js_slider.clientWidth;
    for(var i = 1;i < imgs.length;i++){
        imgs[i].style.left = scrollWidth + 'px';
    }

    var iNOw =0;//控制播放的张数
    for(var k in spans){
        spans[k].onclick = function () {
            if(this.className == 'slider-ctrl-prev'){
                animate(imgs[iNOw],{left:scrollWidth});
                iNOw--;
                iNOw = iNOw <0 ? iNOw =imgs.length-1:iNOw;

                imgs[iNOw].style.left = -scrollWidth +'px';
                animate(imgs[iNOw],{left:0});
                setSquare ();
            }
            else if(this.className == 'slider-ctrl-next'){
                autoplay();
            }else{
                console.log(117);

                //获得当前的索引号
                var that =this.innerHTML-1;
                if(that > iNOw){
                    //等同于右侧按钮的做法
                    animate(imgs[iNOw],{left:-scrollWidth});
                    imgs[that].style.left = scrollWidth + 'px';
                }else if(that < iNOw){
                    //等同于左侧按钮的做法
                    animate(imgs[iNOw],{left:scrollWidth});
                    imgs[that].style.left = -scrollWidth + 'px';

                }
                iNOw = that;
                animate(imgs[that],{left:0});
                setSquare ();

            }
        }
    }
    function setSquare () {
        //清楚所有的，在选择当前的
        for(var i =1;i<spans.length-1;i++){
            spans[i].className = 'slider-ctrl-con';
        }
        spans[iNOw+1].className = 'slider-ctrl-con current'
    }

    //定时器开始
    var timer = null;
    timer = setInterval(autoplay,3000);

    function autoplay() {
        animate(imgs[iNOw],{left:-scrollWidth});
        iNOw++;
        iNOw = iNOw >imgs.length -1 ? 0:iNOw;

        imgs[iNOw].style.left = scrollWidth +'px';
        animate(imgs[iNOw],{left:0});
        setSquare ();
    }
    //鼠标经过清除定时器
    //
    js_slider.onmouseover = function () {
        clearInterval(timer);
    }

    js_slider.onmouseout = function () {
        clearInterval(timer);
        timer = setInterval(autoplay,3000);
    }
}