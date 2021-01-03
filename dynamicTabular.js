// function fib(n) {
// 	let arr = Array(n + 1).fill(0)
// 	arr[1] = 1
// 	for (let i = 0; i <= n; i++) {
// 		arr[i + 1] += arr[i]
// 		arr[i + 2] += arr[i]
// 	}
// 	return arr[n]
// }
// console.log(fib(6)) // 8
// console.log(fib(7)) // 13
// console.log(fib(8)) //21
// console.log(fib(50)) //12586269025
/*******************************************************************/
/*******************************************************************/
// function gridTraveler(m, n) {
// 	let table = Array(m + 1)
// 		.fill()
// 		.map(() => {
// 			return Array(n + 1).fill(0)
// 		})
// 	table[1][1] = 1

// 	for (let y = 0; y <= m; y++) {
// 		for (let x = 0; x <= n; x++) {
// 			if (y + 1 <= m) table[y + 1][x] += table[y][x]
// 			if (x + 1 <= n) table[y][x + 1] += table[y][x]
// 		}
// 	}
// 	return table[m][n]
// }

// console.log(gridTraveler(3, 3)) //6
// console.log(gridTraveler(18, 18)) //2333606220
/*******************************************************************/
/*******************************************************************/
// const canSum = (targetSum = 0, numbers = [0]) => {
// 	const arr = Array(targetSum + 1).fill(false)
// 	arr[0] = true

// 	for (let i = 0; i <= targetSum; i++) {
// 		if (arr[i] === true) {
// 			for (const num of numbers) {
// 				let position = i + num
// 				if (position <= targetSum) arr[position] = true
// 			}
// 		}
// 	}

// 	return arr[targetSum]
// }
// console.log(canSum(10, [3, 2, 6, 1])) // true
// console.log(canSum(10, [4, 7, 9])) // false
// console.log(canSum(10, [5])) // true
// console.log(canSum(10, [3, 2, 6])) // true
// console.log(canSum(10, [3, 7, 5, 9])) // true
// console.log(canSum(7, [2, 3])) // true
// console.log(canSum(7, [5, 3, 4, 7])) // true
// console.log(canSum(7, [2, 4])) // false
// console.log(canSum(8, [2, 3, 5])) // true
// console.log(canSum(300, [7, 14])) // false
/*******************************************************************/
/*******************************************************************/
// const howSum = (targetSum = 0, numbers = [0]) => {
// 	let table = Array(targetSum + 1).fill(null)
// 	table[0] = []

// 	for (let i = 0; i < targetSum; i++) {
// 		if (table[i] !== null) {
// 			for (const num of numbers) {
// 				let position = i + num
// 				if (position <= targetSum) {
// 					table[position] = [num, ...table[i]]
// 				}
// 			}
// 		}
// 	}
// 	return table[targetSum]
// }
// console.log(howSum(7, [1])) // [1,1,1,1,1,1,1]
// console.log(howSum(7, [7])) // [7]
// console.log(howSum(7, [4])) // null
// console.log(howSum(7, [2, 3])) // [3,2,2]
// console.log(howSum(7, [5, 3, 4, 7])) // [4,3]
// console.log(howSum(7, [2, 4])) // null
// console.log(howSum(8, [2, 3, 5])) // [2,2,2,2]
// console.log(howSum(300, [7, 14])) // null
/*******************************************************************/
/*******************************************************************/
// Kiu's NON-optimized attempt
// const howSum = (targetSum = 0, numbers = [0]) => {
// 	let table = Array(targetSum + 1).fill(null)
// 	table[0] = [[]]

// 	for (let i = 0; i < targetSum; i++) {
// 		if (table[i] !== null) {
// 			for (const num of numbers) {
// 				let position = i + num
// 				if (position <= targetSum) {
// 					if (table[position] === null) {
// 						table[position] = table[i].map((item) => {
// 							return [num, ...item]
// 						})
// 					} else {
// 						table[position] = [
// 							...table[position],
// 							...table[i].map((item) => {
// 								return [num, ...item]
// 							}),
// 						]
// 					}
// 				}
// 			}
// 		}
// 	}

// 	if (table[targetSum] === null) {
// 		return null
// 	}
// 	return table[targetSum][0]
// }
/*******************************************************************/
/*******************************************************************/
// function bestSum(targetSum, numbers) {
// 	let table = Array(targetSum + 1).fill(null)
// 	table[0] = []
// 	for (let i = 0; i < targetSum; i++) {
// 		if (table[i] !== null) {
// 			for (const num of numbers) {
// 				let position = i + num
// 				if (position <= targetSum) {
// 					let altLength = [...table[i], num].length
// 					if (table[position] === null || altLength < table[position].length) {
// 						table[position] = [...table[i], num]
// 					}
// 				}
// 			}
// 		}
// 	}
// 	return table[targetSum]
// }
// console.log(bestSum(7, [4])) // null
// console.log(bestSum(7, [5, 3, 4, 7])) // [7]
// console.log(bestSum(8, [2, 3, 5])) // [5,3]
// console.log(bestSum(8, [1, 4, 5])) // [4,4]
// console.log(bestSum(100, [1, 2, 5, 25])) // [25,25,25,25]
/*******************************************************************/
/*******************************************************************/
// function canConstruct(target = '', wordBank = ['']) {
// 	let table = Array(target.length + 1).fill(false)
// 	table[0] = true
// 	for (let i = 0; i <= target.length; i++) {
// 		if (table[i] === true) {
// 			for (const word of wordBank) {
// 				if (target.indexOf(word, i) === i) {
// 					table[i + word.length] = true
// 				}
// 			}
// 		}
// 	}
// 	return table[target.length]
// }
// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // -- true
// console.log(
// 	canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
// ) // -- false
// console.log(
// 	canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
// ) // -- true
// console.log(
// 	canConstruct('eeeeeeeeeeeeeeeeeeeeeeeef', ['e', 'ee', 'eee', 'eeee', 'eeeee'])
// ) // -- false
/*******************************************************************/
/*******************************************************************/
// function countConstruct(target = '', wordBank = ['']) {
// 	let table = Array(target.length + 1).fill(0)
// 	table[0] = 1

// 	for (let i = 0; i <= target.length; i++) {
// 		if (table[i] !== 0) {
// 			for (const word of wordBank) {
// 				if (target.indexOf(word, i) === i) {
// 					table[i + word.length] += table[i]
// 				}
// 			}
// 		}
// 	}

// 	return table[target.length]
// }
// console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])) // -- 2
// console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // -- 1
// console.log(
// 	countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
// ) // -- 0
// console.log(
// 	countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
// ) // -- 4
// console.log(
// 	countConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
// 		'e',
// 		'ee',
// 		'eee',
// 		'eeee',
// 		'eeeee',
// 	])
// ) // -- 0
/*******************************************************************/
/*******************************************************************/
// -- Kiu's version
// function allConstruct(target = '', wordBank = ['']) {
// 	let table = Array(target.length + 1).fill(null)
// 	table[0] = [[]]

// 	for (let i = 0; i <= target.length; i++) {
// 		if (table[i] !== null) {
// 			for (const word of wordBank) {
// 				if (target.indexOf(word, i) === i) {
// 					if (table[i + word.length] === null) {
// 						table[i + word.length] = table[i].map((item) => [...item, word])
// 					} else {
// 						table[i + word.length] = [
// 							...table[i + word.length],
// 							...table[i].map((item) => [...item, word]),
// 						]
// 					}
// 				}
// 			}
// 		}
// 	}
// 	if (table[target.length] === null) return []
// 	return table[target.length]
// }
function allConstruct(target = '', wordBank = ['']) {
	let table = Array(target.length + 1)
		.fill()
		.map(() => [])
	table[0] = [[]]

	for (let i = 0; i <= target.length; i++) {
		if (table[i].length > 0) {
			for (const word of wordBank) {
				if (target.indexOf(word, i) === i) {
					table[i + word.length] = [
						...table[i + word.length],
						...table[i].map((item) => [...item, word]),
					]
				}
			}
		}
	}
	// if (table[target.length] === null) return []
	return table[target.length]
}
// console.log(allConstruct('purple', ['purpl'])) // []]
// console.log(allConstruct('purple', ['purple'])) //[['purple']]
// console.log(allConstruct('purple', ['purp', 'le'])) //[['purp','le']]
// console.log(allConstruct('purple', ['purp', 'purpl'])) // []
// console.log(allConstruct('purple', ['purp', 'le', 'purple'])) // [['purp','le'], ['purple]]
// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// // /*
// // [
// // 	['purp', 'le'],
// // 	['p', 'ur', 'p', 'le']
// // ]  */
// console.log(
// 	allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
// )
// /*
// [
// 	['ab', 'cd', 'ef'],
// 	['ab', 'c', 'def']
// 	['abc', 'def']
// 	['abcd', 'ef']
// ]  */
// console.log(
// 	allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
// ) // []
console.log(allConstruct('eeeeeeeeeeeeez', ['e', 'ee', 'eee', 'eeee', 'eeeee'])) // []
