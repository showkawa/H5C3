/**
 * fs node file api
 */
const fs = require('fs');


// fs.readFile('./../index.js','utf-8',(err,dataStr) => {
//     if(err){
//         console.log(err.message);
//         return;
//     }
//     console.log(dataStr);
// });
console.log(__dirname);
fs.writeFile(__dirname+'/fsWrite.txt', 'this is a good question!','utf-8',(err) => {
    if(err){
        console.log(err.message);
    }
    console.log('write data success!!!');
})


const path = require('path')

console.log(path.join('/un','/home/code','../','./node','basic'))
fs.writeFile(path.join(__dirname, 'fsWrite2.txt'), 'this is a good question!','utf-8',(err) => {
    if(err){
        console.log(err.message);
    }
    console.log('write data success!!!');
})


const filePath = '/un/home/code/node/day/package.json';
console.log(path.basename(filePath));
console.log(path.extname(filePath));
console.log(path.basename(filePath, '.json'));