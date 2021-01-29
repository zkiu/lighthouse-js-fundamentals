/*
Write your own implementation of the following array methods.
Do not use the array method in your implementation because that would be cheating.
Test are provided but it is recommended that you test other input values.
For a super challenge, write your implementations without any loop construct. Hint: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#Recursion
*/
var testArray
var testCallback

/** with a loop */
/** .forEach() */
// function forEach(array, callback) {
// 	for (const item of array) {
// 		callback(item)
// 	}
// }

// testArray = ['it', 'worked', 'just', 'as', 'expected']
// testCallback = (item) => {
// 	console.log(item.toUpperCase())
// }
// forEach(testArray, testCallback)

/** .map() */
// function map(array, callback) {
// 	let result = []
// 	for (const item of array) {
// 		result = [...result, callback(item)]
// 	}

// 	return result
// }

// testArray = ['it', 'worked', 'just', 'as', 'expected']
// testCallback = (item) => {
// 	return item.length
// }
// console.log(map(testArray, testCallback))
// console.log(testArray) // confirm that the original array was not mutated

// /** .filter() */
// function filter(array, callback) {
// 	let result = []

// 	for (const item of array) {
// 		if (callback(item)) {
// 			result = [...result, item]
// 		}
// 	}

// 	return result
// }

// testArray = ['it', 'worked', 'just', 'as', 'expected']
// testCallback = (item) => {
// 	return item.length > 4
// }
// console.log(filter(testArray, testCallback))
// console.log(testArray) //confirm that the original array was not mutated

// /** .find() */
function find(array, callback) {
	for (const item of array) {
		if (callback(item)) return item
	}
}

testArray = ['it', 'worked', 'just', 'as', 'expected']
testCallback = (item) => {
	return item === 'as'
}
console.log(find(testArray, testCallback))
console.log(testArray) //confirm that the original array was not mutated
