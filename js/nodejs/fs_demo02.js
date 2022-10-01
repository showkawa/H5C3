// 导入 fs path 模块
const fs = require('fs')
const path = require('path')

// 定义正则表达式 匹配<style>和<script>
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script [\s\S]*><\/script>/

// fe.readFile() 读取文件
fs.readFile(path.join(__dirname, '../../index.html'), 'utf-8', (err, dataStr) => {
    // 读取文件失败
    if (err) {
        return console.log(err.message);
    }
    resolveCSS(dataStr);
    resolveJS(dataStr);

})

// 处理css的函数
function resolveCSS(htmlSource) {
    // 正则表达式提取需要的内容
    const r1 = regStyle.exec(htmlSource);
    // [0]是目标数据，乣进行替换操作
    const cssStr = r1[0].replace('<style>', '').replace('</style>', '');

    // 调用fs.write() 写入base.css
    fs.writeFile(path.join(__dirname, 'base.css'), cssStr.trim(), 'utf-8', (err) => {
        if (err) {
            return console.log(err.message);
        }
        console.log('写入目标CSS文件成功')
    })
}

// 处理js的函数
function resolveJS(htmlSource) {
    // 正则表达式提取需要的内容
    const r1 = regScript.exec(htmlSource);

    // [0]是目标数据，乣进行替换操作
    const jsStr = r1[0].replace('<script ', '').replace('>', '')
        .replace('type="text/javascript" ', '').replace('</script>', '')
        .replace('src=', '').replaceAll('"', '');
    console.log(jsStr);
    fs.readFile(path.join(__dirname, '../../'.concat(jsStr)), 'utf-8', (err, dataStr) => {
        if (err) {
            return console.log(err.message);
        }
        fs.writeFile(path.join(__dirname, 'base.js'), dataStr, 'utf-8', (err) => {
            if (err) {
                return console.log(err.message);
            }
            console.log('写入目标JS文件成功')
        })
    })

}