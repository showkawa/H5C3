console.log("load lazy JS");

const pro= new Promise(function (resolve) {
 resolve('run resolve()')
});
pro.then(res => console.log(res))