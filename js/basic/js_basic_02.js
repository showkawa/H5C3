'use strict';

/*01. higher-order functions */
const bindFun = (func, ...params) => {
    if (params.length <= 0) {
        console.error(new SyntaxError('params can not be null!🌞'));
    }
    return func(...params)
}

const printFun = (...params) => {
    console.log([...params]);
}

const reduceFun = (...params) => {
    return params.join(' ').toUpperCase();

};
// callback function
bindFun(printFun, ['shenzhen', 'xixiang', 'xinercun']);
bindFun(reduceFun);
console.log(bindFun(reduceFun, 'day', 'day', 'up❗'));

document.body.addEventListener('click', () => console.log('I love today 🇨🇳 😃'));

// function return function
const returnFun = (first) => {
    return function (second) {
        console.log(`${first} - ${second}`);
    }
}

returnFun('lao huang')('niu bi 🙅');

const returnFun2 = firstName => lastName => console.log(`${firstName} - ${lastName}`);
returnFun2('Huang')('Liang');

//Function call(), bind() and apply() method
const oneDay = {
    dateTime: 10,
    learnTime: 2,
    study(name) {
        console.log(`Study ${name} ${this.learnTime} hours`);
    }
}
// call(this, params)
const run = oneDay.study;
try {
    run('javascript');
} catch (error) {
    console.error(new SyntaxError(error));
}
run.call(oneDay, 'NodeJS');

// apply(this, arrays) = call(this, ...params)
const oneWeek = {
    familyTime: 10,
    studyTime: 10,
    happy(...item) {
        console.log(`Study ${item} in this week ${this.studyTime} hours`);
    }
}
const weekRun = oneWeek.happy;
weekRun.apply(oneWeek, ['React']);

// bind()
const weekBindRun = weekRun.bind(oneWeek);
weekBindRun('JavaScript');

const weekBindRun2 = weekRun.bind(oneWeek, 'Webpack');
weekBindRun2();


document.body.addEventListener('dblclick', oneWeek.happy.bind(oneWeek));

// if dont want use this, can set first params as null
const oneMonth = {
    familyTime: 40,
    happy(...item) {
        console.log(`This Month i totally focus on ${item} 🙋`);
    }
}
oneMonth.happy.bind(null, 'Movies')();


/*02. immediately invoked functions 立即执行的函数 s*/
(function () { console.log('🇨🇳🇨🇳🇨🇳🇨🇳🇨🇳🇨🇳🇨🇳🇨🇳🇨🇳🇨🇳') })();
(() => console.log('🙋🙋🙋🙋🙋🙋🙋🙋🙋🙋'))();


{
    console.log('10086');
}

/*03. Closures 闭包 */
const updateProgress = () => {
    let progress = 0;
    return function (num) {
        progress = progress + num;
        console.log(progress);
    }
}

const up = updateProgress();
up(1);
up(1);
up(1);