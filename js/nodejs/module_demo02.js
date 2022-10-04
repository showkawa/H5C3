// require 可以加载内置模块， 自定义模块和第三方模块
const md = require('./module_demo');


console.log(md.readPath())
console.log(md.path.basename('/kawa/index.js'))

const moment = require('moment');
console.log(moment().format('YYYY-MM-DD HH:mm:ss'));