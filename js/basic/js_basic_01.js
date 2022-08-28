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

const keys = Object.keys(staff);
const values = Object.values(staff);
for (const item of keys) {
    console.log(item);
}
for (const item of values) {
    console.log(item);
}
const stas = Object.entries(staff);
for (const [prop, val] of stas) {
    console.log(prop, val);
}

const machine = {
    info0: {
        local: ['123.12', '78.43'],
        data: {
            blue: 775.3,
            green: 786.4
        }
    },
    info1: {
        local: ['123.12', '78.43'],
        data: {
            blue: 775.3,
            green: 786.4
        }
    }
}

const mcs = Object.entries(machine);
for (const [name, { local, data }] of mcs) {
    console.log(`${name} - local: ${local[1]} - data: ${data?.green}`)
}

/* 04. this */
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

/*05. short circuiting  */
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

if (!hong.call?.(1, 2)) {
    console.log(`hong.call() method not exist`);
}

/*06. Set */
const names = ['Brian', 'William', 'Kelvin', 'Brian', 'Neo'];
const ns = new Set(names);
console.log(ns.size);
console.log(new Set('KAWA'));
console.log(ns.has('wil'), ns.has('Neo'));
console.log(ns.add('Ella'));
console.log(ns.delete('Neo'), ns);

/*07. Maps */
const mps = new Map();
mps.set('name', 'brian')
    .set('job', 'banker')
    .set('age', 30);

console.log(mps.get('job'));
for (const [key, val] of mps) {
    console.log(key, val);
}
const fm = new Map([
    ['father', '86kg'],
    ['me', '74kg'],
    ['mother', '53kg'],
    ['wife', '62kg']
]);
console.log(fm.get('me'), fm);
console.log([...fm.keys()]);
console.log([...fm.values()]);

/*08. strings */
const message = `{
    'status': 500,
    'errorCode':'GFH-70006',
    'data':{},
    'message':'Application Error'
}`;
console.log([...message]);
console.log(message.length);
console.log(message.indexOf('0'));
console.log(message.lastIndexOf('0'));
console.log(message.slice(16, 19));
console.log(message.slice(message.indexOf('message') - 1, -1));

console.log(message.toUpperCase());
const na = 'hUanGLiang';
console.log(na[0].toUpperCase() + na.slice(1).toLowerCase());

const email = ' huanghuang @gmial.com \t\n';
console.log(email.trim());

const content = 'A is good, A is best';
console.log(content.replace('A', 'LaoChen'));
console.log(content.replaceAll('A', 'LaoChen'));
console.log(content.includes('good'), content.includes('bad'));
console.log(content.startsWith('A'), content.endsWith('bad'));
console.log(content.split(' '));

//Padding 填充字符
console.log(na.padStart(20, '#'));
console.log(na.padEnd(20, '#'));

// Repeat
const power = 'day day up!';
console.log(power.repeat(5));