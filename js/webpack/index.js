import './src/css/base.css'
import './src/css/index.less'
import './src/css/other.scss'

import { sum } from './src/js/mun.js'

console.log('load index JS, init: ', sum(3, 4, 5))

document.getElementById('btn2').onclick = function () {
    import(/* webpackChunkName: "lazy" */'./src/js/lazy.js')
        .then(() => console.log("load lazy.js success"))
        .catch((err) => console.log("load lazy.js failed, ", err.message))
}



/* PWA config*/
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js').then(registration => {
        console.log('SW registered: ', registration);
      }).catch(registrationError => {
        console.log('SW registration failed: ', registrationError);
      });
    });
  }