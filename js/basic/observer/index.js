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

