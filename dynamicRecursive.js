// -- fibonacci sequence
// function fib(n, memo = {}) {
// -- recursive way
// if (n === 1 || n === 2) {
//   return 1;
// } else {
//   return fib(n - 1) + fib(n - 2);
// }
// -- non recursive way
// let nSmall = 1;
// let nSmaller = 1;
// let temp = 0;
// for (let i = 3; i < n + 1; i++) {
//   temp = nSmall + nSmaller;
//   nSmaller = nSmall;
//   nSmall = temp;
// }
// return temp;

// -- recursive witht memoization
// if (n in memo) return memo[n];
// if (n <= 2) return 1;
// memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
// return memo[n];
// }
// console.log(fib(50));
/*******************************************************************/
/*******************************************************************/
//   // --my way without help(except for the memoization) - process is very slow when m and n are high numbers
// function gridTraveler(m, n, memo = [0]) {
//   if (m === 1 && n === 1) {
//     memo[0] += 1;
//     return;
//   }
//   if (m > 1) {
//     gridTraveler(m - 1, n, memo);
//   }
//   if (n > 1) {
//     gridTraveler(m, n - 1, memo);
//   }
//   return memo[0];
// }

// -- better way with memozation of past answers
// function gridTraveler(m, n, memo = {}) {
//   if (m === 1 && n === 1) return 1;
//   if (m === 0 || n === 0) return 0;

//   let index1 = m + "," + n;
//   let index2 = n + "," + m;

//   if (index1 in memo) return memo[index1];
//   if (index2 in memo) return memo[index2];

//   // -- each time the recursion is complete, the result is recorded into the referenced object (which is the initial memo = {})
//   memo[index1] = memo[index2] =
//     gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
//   return memo[index1];
// }

// console.log(gridTraveler(18, 18)); //2333606220
/*******************************************************************/
/*******************************************************************/
// -- Kiu's solution
// export const canSum = (
// 	targetSum: number,
// 	numbers: number[],
// 	memo = {}
// ): boolean => {
// 	// console.log('value for: targetSum ')
// 	// console.log(targetSum)
// 	// console.log('value for: numbers ')
// 	// console.log(numbers)

// 	if (targetSum in memo) return memo[targetSum]
// 	if (numbers.includes(1) || numbers.includes(targetSum)) return true
// 	if (numbers.includes(targetSum)) return true
// 	if (
// 		numbers.every((num) => {
// 			num > targetSum
// 		})
// 	)
// 		return false
// 	if (targetSum <= 0) return false
// 	memo[targetSum] = numbers.some((num) => {
// 		return canSum(targetSum - num, numbers, memo)
// 	})
// 	return memo[targetSum]
// }
// -- course solution
// export const canSum = (
// 	targetSum: number,
// 	numbers: number[],
// 	memo = {}
// ): boolean => {
// 	if (targetSum in memo) {
// 		return memo[targetSum]
// 	}
// 	if (targetSum === 0) return true
// 	if (targetSum < 0) return false

// 	for (const num of numbers) {
// 		if (canSum(targetSum - num, numbers, memo) === true) {
// 			memo[targetSum] = true
// 			// -- note that the aswer is not memo[targetSum - num] = true. if you return true, then you know that the result will be true at targetSum
// 			return true
// 		}
// 	}

// 	memo[targetSum] = false
// 	return memo[targetSum]
// }

// // console.log(canSum(10, [3, 2, 6, 1])) // true
// // console.log(canSum(10, [5])) // true
// // console.log(canSum(10, [3, 2, 6])) // true
// // console.log(canSum(10, [3, 7, 5, 9])) // true
// // console.log(canSum(10, [4, 7, 9])) // false
// console.log(canSum(7, [2, 3])) // true
// console.log(canSum(7, [5, 3, 4, 7])) // true
// console.log(canSum(7, [2, 4])) // false
// console.log(canSum(8, [2, 3, 5])) // true
// console.log(canSum(300, [7, 14])) // false

/*******************************************************************/
/*******************************************************************/
// -- my solution
// export const howSum = (targetSum: number, numbers: number[], result = []) => {
// 	if (targetSum < 0) return null
// 	if (targetSum === 0) {
// 		return true
// 	}

// 	for (const num of numbers) {
// 		let remainder = targetSum - num
// 		if (howSum(remainder, numbers, result)) {
// 			result.push(num)
// 			break
// 		}
// 	}

// 	if (result.length === 0) return null
// 	return result
// }
// -- by course
// export const howSum = (targetSum: number, numbers: number[], memo = {}) => {
// 	if (targetSum in memo) return memo[targetSum]
// 	if (targetSum === 0) return []
// 	if (targetSum <= 0) return null

// 	for (const num of numbers) {
// 		let result = howSum(targetSum - num, numbers, memo)
// 		if (result !== null) {
// 			memo[targetSum] = [...result, num]
// 			return memo[targetSum]
// 		}
// 	}

// 	memo[targetSum] = null
// 	return null
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
// -- by Kiu
// function bestSum(targetSum, numbers) {
// 	if (targetSum === 0) return []
// 	if (targetSum < 0) return null

// 	let results = numbers.map((num) => {
// 		let temp = bestSum(targetSum - num, numbers)
// 		if (temp === null) {
// 			return null
// 		} else {
// 			return [num, ...temp]
// 		}
// 	})
// 	let shortestPath = null
// 	for (const result of results) {
// 		if (shortestPath === null && result !== null) {
// 			shortestPath = result
// 		}
// 		if (
// 			shortestPath !== null &&
// 			result !== null &&
// 			result.length < shortestPath?.length
// 		) {
// 			shortestPath = result
// 		}
// 	}
// 	return shortestPath
// }
// -- by course
// function bestSum(targetSum, numbers, memo = {}) {
// 	if (targetSum in memo) return memo[targetSum]
// 	if (targetSum === 0) return []
// 	if (targetSum < 0) return null
// 	let shortestPath = null
// 	for (const num of numbers) {
// 		let result = bestSum(targetSum - num, numbers, memo)
// 		if (result !== null) {
// 			let path = [...result, num]
// 			if (shortestPath === null || path.length < shortestPath.length) {
// 				shortestPath = path
// 			}
// 		}
// 	}
// 	memo[targetSum] = shortestPath
// 	return memo[targetSum]
// }
// console.log(bestSum(7, [4])) // null
// console.log(bestSum(7, [5, 3, 4, 7])) // [7]
// console.log(bestSum(8, [2, 3, 5])) // [5,3]
// console.log(bestSum(8, [1, 4, 5])) // [4,4]
// console.log(bestSum(100, [1, 2, 5, 25])) // [25,25,25,25]
/*******************************************************************/
/*******************************************************************/
// -- Kiu's version. it sort of works, but the logic fails when things are removed from the middle of the target. This will join the 1st and last part together, breaking the logic by creating new adjacencies of charactor that should not exist
// function canConstruct(target = '', wordBank = ['']) {
// 	if (target === '') return true
// 	for (const word of wordBank) {
// 		if (target.includes(word)) {
// 			let newStr = target.replace(word, '')
// 			if (canConstruct(newStr, wordBank)) return true
// 		}
// 	}
// 	return false
// }
// -- Course version
// function canConstruct(target, wordBank, memo = {}) {
// 	if (target in memo) return memo[target]
// 	if (target === '') return true

// 	for (const word of wordBank) {
// 		if (target.startsWith(word)) {
// 			let newStr = target.replace(word, '')
// 			let result = canConstruct(newStr, wordBank, memo)
// 			if (result === true) {
// 				memo[target] = true
// 				return true
// 			}
// 		}
// 	}
// 	memo[target] = false
// 	return false
// }
// console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) // -- true
// console.log(
// 	canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])
// ) // -- false
// console.log(
// 	canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o', 't'])
// ) // -- true
// console.log(
// 	canConstruct('eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef', [
// 		'e',
// 		'ee',
// 		'eee',
// 		'eeee',
// 		'eeeee',
// 	])
// ) // -- false
/*******************************************************************/
/*******************************************************************/
// function countConstruct(target = '', wordBank = [''], memo = {}) {
// 	if (target in memo) return memo[target]
// 	if (target === '') return 1

// 	let count = 0
// 	for (const word of wordBank) {
// 		if (target.indexOf(word) === 0) {
// 			let suffix = target.slice(word.length)
// 			let result = countConstruct(suffix, wordBank, memo)
// 			count += result
// 		}
// 	}

// 	memo[target] = count
// 	return count
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
// function allConstruct(target = '', wordBank = [''], memo = {}) {
// 	if (target in memo) return memo[target]
// 	if (target === '') return [[]]

// 	let array = []
// 	for (const word of wordBank) {
// 		if (target.indexOf(word) === 0) {
// 			let results = allConstruct(target.slice(word.length), wordBank, memo)
// 			let combinedResult = results.map((result) => {
// 				return [word, ...result]
// 			})
// 			array.push(...combinedResult)
// 		}
// 	}

// 	memo[target] = array
// 	return array
// }
// // console.log(allConstruct('purple', ['purpl']))
// // console.log(allConstruct('purple', ['purple']))
// // console.log(allConstruct('purple', ['purp', 'le']))
// // console.log(allConstruct('purple', ['purp', 'purpl']))
// // console.log(allConstruct('purple', ['purp', 'le', 'purple']))
// console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']))
// /*
// [
// 	['purp', 'le'],
// 	['p', 'ur', 'p', 'le']
// ]  */
// console.log(
// 	allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c'])
// ) // -- 1
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
// console.log(
// 	allConstruct('eeeeeeeeeeeeeeeeeeeeeeeeez', [
// 		'e',
// 		'ee',
// 		'eee',
// 		'eeee',
// 		'eeeee',
// 	])
// ) // []
