const arr = [1, 2, 3, 4, 5]

//map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
const arrMap = arr.map(val => val * 2)
console.log(arrMap)

//filter() 方法创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素。
const arrFilter = arr.filter(val => val % 2 === 0)
console.log(arrFilter)

//filter() 方法创建给定数组一部分的浅拷贝 (en-US)，其包含通过所提供函数实现的测试的所有元素。
const arrReduce = arr.reduce((pre, cur) => { return pre + cur }, 0)
console.log(arrReduce)

//find() 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 undefined。
const arrFind = arr.find(val => val % 2 === 0)
console.log(arrFind)

//findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回 -1。
const arrFindIndex = arr.findIndex(val => val % 2 === 0)
console.log(arrFindIndex)

//some

//every

//flat

//flatMap
