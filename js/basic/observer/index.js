"use strict";

const title = document.querySelector('.title')
const content = document.querySelector('.content')
const mh = content.getBoundingClientRect().height;

const obsCallback = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
        title.classList.add('fixed')
        console.log(entry)
    } else {
        title.classList.remove('fixed')
    }
}
const obsOptions = {
    root: null,
    threshold: 0,
    // rootMargin: `-${mh}px`
}
const observer = new IntersectionObserver(obsCallback, obsOptions)
observer.observe(content)

// load,这个事件仅仅应该在探测到整个页面完全加载完成时被使用
window.addEventListener('load',() => console.log('load'))
// 当纯 HTML 被完全加载以及解析时，**DOMContentLoaded **事件会被触发，而不必等待样式表，图片或者子框架完成加载。
document.addEventListener('DOMContentLoaded',() => console.log('DOMContentLoaded'))

