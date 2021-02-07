// /**
//  * @param {string} path
//  * @return {string}
//  */
// // -- original version
// // var simplifyPath = function (path) {
// // 	let array = path.split('/')

// // 	array = array.filter((item) => {
// // 		return item !== '.' && item !== ''
// // 	})

// // 	let index = 0
// // 	while (array.includes('..')) {
// // 		if (array[0] == '..') {
// // 			array.shift()
// // 			continue
// // 		}

// // 		index = array.indexOf('..')

// // 		array.splice(index - 1, 2)
// // 	}

// // 	return '/' + array.join('/')
// // }

// // -- inspired version
// var simplifyPath = function (path) {
// 	let array = path.split('/')

// 	array = array.filter((item) => {
// 		return item !== '.' && item !== ''
// 	})

// 	let stack = []

// 	for (const item of array) {
// 		if (item === '..' && stack.length === 0) {
// 			continue
// 		}
// 		if (item === '..' && stack.length !== 0) {
// 			stack.pop()
// 			continue
// 		}
// 		stack.push(item)
// 	}
// 	return '/' + stack.join('/')
// }

// console.log(simplifyPath('/../home/./../foo/'))
// console.log(simplifyPath('//home/./../foo/'))
// console.log(simplifyPath('/a/./b/../../c/'))
// console.log(simplifyPath('/a/./b///c/'))
// console.log(simplifyPath('/a/../../b/../c//.//'))
// console.log(simplifyPath('/home/'))

let monkey = [1, 2]
let message = ''

message = monkey.pop()
console.log(message)
message = monkey.pop()
console.log(message)
message = monkey.pop()
console.log(message)
