"use strict";

const title = document.querySelector('.title')
const content = document.querySelector('.content')
const mh = title.getBoundingClientRect().height;

const obsCallback = (entries, observer) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
        title.classList.add('fixed')
        console.log(title.getBoundingClientRect())
    } else {
        title.classList.remove('fixed')
    }

    entries.forEach(entry => console.log(entry))

}
const obsOptions = {
    root: null,
    threshold: 0,
    rootMargin: `-${mh}px`
}
const observer = new IntersectionObserver(obsCallback, obsOptions)
observer.observe(title)

