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

//some() 方法测试数组中是不是至少有 1 个元素通过了被提供的函数测试。它返回的是一个 Boolean 类型的值。
const arrSome = arr.some(val => val > 4)
console.log('some()', arrSome)

//every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
const arrEvery = arr.every(val => val > 4)
console.log('every()', arrEvery)

const arr2 = [[1, 2, 3], [4, [5, 6]], 7]
//flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
console.log(arr2.flat(2))


const arr3 = ['this', 'is', 'a', 'new man']
//flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为 1 的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
const arrFM = arr3.flatMap(val => val.split(" "))
console.log(arrFM)