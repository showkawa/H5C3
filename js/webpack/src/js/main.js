import { sum } from './mun.js'
console.log("load main JS, init: ", sum(1, 2))

document.getElementById("btn").onclick = function () {
    // import 动态导入，会将动态导入的文件代码分割（拆分成单独的模块），在需要的时候自动加载
    import('./lazy.js')
        .then(() => console.log("load lazy.js success"))
        .catch((err) => console.log("load lazy.js failed, ", err.message))
}