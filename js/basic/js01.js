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


/** 03. Object */
let staff = {
    name: 'Brian',
    age: 30,
    location: 'ShenZhen',
    tags: ['manager', 'father', 'banker']
};
console.log(staff.skill);
console.log(staff['location']);
//对象的解构赋值,解构赋值时设置默认值的好处时防止undefined
const { loves = [], tags: roles = [] } = staff;
console.log(loves, roles);


/* 04.pro */

/* 05. this */
console.log(this);

const fun = function () {
    console.log(this);
}
fun();

const fun2 = () => {
    console.log(this);
};
fun2();

var name = "rdc";
const rdc = {
    name: "RDC",
    type: "bank",
    location: "SG",
    do1: function () {
        console.log(this);
        const do3 = function () {
            console.log(this);
        }
        do3();
    },
    do2: () => {
        console.log(this);
        const do4 = () => {
            console.log(this.name);
        }
        do4();
    }
}
rdc.do1();
rdc.do2();

/*06. short circuiting  */
// OR
console.log(5 || 'brian');
console.log('' || 'brian');
console.log(true || 'brian');
console.log(undefined || null);
console.log([] || NaN);

const obj = {
    names: "heshuang"
}
// obj.skill = obj.skill || 'full stack';
obj.skill ||= 'full stack';
console.log(obj);

// AND
console.log(5 && 'brian');
console.log('' && 'brian');
console.log(true && 'brian');
console.log(undefined && null);
let hongxiang = 'IOS developer';
console.log(hongxiang &&= 'Full Stack Developer');

// ?? Nullish: null and undefined
let hong;
const value = hong ?? 99;
console.log(value);
hong = 66;
const value2 = hong ?? 99;
console.log(value2);
hong ??= 999;
console.log(hong);





