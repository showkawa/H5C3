'use strict';

/*01. Array API */
let arr = ['A', 'B', 'C', 'D', 'E', 'F'];

// slice() 方法返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));

// splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。
let arr2 = ['A', 'B', 'C', 'D', 'E', 'F'];
arr2.splice(-2);
console.log(arr2);
arr2.splice(0, 3);
console.log(arr2);

// reverse() 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
let arr3 = ['A', 'B', 'C', 'D', 'E', 'F'];
console.log(arr3.reverse(), arr3);

// concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
let arr4 = ['H', 'I'];
console.log(arr.concat(arr4), [...arr, ...arr4], arr, arr4);


// join() 方法将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
console.log(arr.join(','), arr);

// at() 方法接收一个整数值并返回该索引的项目，允许正数和负数。负整数从数组中的最后一个项目开始倒数。
console.log('BRIAN'.at(0));
console.log(arr.at(0), arr.at(3), arr.at(-1), arr.at(-3), arr);
console.log(arr[0], arr[3], arr[arr.length - 1], arr[arr.length - 3], arr);
console.log(arr.slice(0, 1)[0], arr.slice(3, 4)[0], arr.slice(-1)[0], arr.slice(-3)[0], arr);

// forEach() 方法对数组的每个元素执行一次给定的函数。
// for - of
let skills = ['java', 'javascript', 'css', 'html', 'nodejs'];
for (const sk of skills) {
    console.log(sk);
}
for (const [i, sk] of skills.entries()) {
    console.log(i, sk);
}

skills.forEach((sk, i) => console.log(i, sk));

const infos = new Map([
    ['A230', '96'],
    ['A333', '88'],
    ['A350', '135']
]);
infos.forEach((value, key) => console.log(key, value));

const setInfos = new Set(['A230','A333','A350']);
setInfos.forEach((value, key) => console.log(key, value));
