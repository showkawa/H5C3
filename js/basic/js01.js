'use strict';

/** 01. == and === */
let age = 18;
console.log(age == '18');
console.log(age === '18');
console.log(age === '19');

/** 02. Arrays 
 * 
 * Reference: https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array
 * 
*/

let nameList = ['Brian', 'Xiang', 'Shuang'];

// add item in the last
const len = nameList.push('Ella');
console.log(nameList, len);

// remove item in the last
const poped = nameList.pop();
console.log(nameList, poped);

// remove item in the first
const poped2 = nameList.shift();
console.log(nameList, poped2);

// add item in the first
const len2 = nameList.unshift(23);
console.log(nameList, len2);

// indexOf
console.log(nameList.indexOf('Shuang'));
console.log(nameList.indexOf('Neo'));

// include
console.log(nameList.includes('23'));
console.log(nameList.includes(23));

// at
console.log(nameList.at(1));
console.log(nameList.at(-1));


/** 02. Object */
let staff = {
    name: 'Brian',
    age: 30,
    location: 'ShenZhen'
};
console.log(staff.skill);
console.log(staff['location']);