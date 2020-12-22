"use strict";
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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.howSum = void 0;
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
// console.log(gridTraveler(18, 18));
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
exports.howSum = function (targetSum, numbers, memo) {
    if (memo === void 0) { memo = {}; }
    if (targetSum in memo)
        return memo[targetSum];
    if (targetSum === 0)
        return [];
    if (targetSum <= 0)
        return null;
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var num = numbers_1[_i];
        var result = exports.howSum(targetSum - num, numbers, memo);
        if (result !== null) {
            memo[targetSum] = __spreadArrays(result, [num]);
            return memo[targetSum];
        }
    }
    memo[targetSum] = null;
    return null;
};
console.log(exports.howSum(7, [1])); // [1,1,1,1,1,1,1]
console.log(exports.howSum(7, [7])); // [7]
console.log(exports.howSum(7, [4])); // null
console.log(exports.howSum(7, [2, 3])); // [3,2,2]
console.log(exports.howSum(7, [5, 3, 4, 7])); // [4,3]
console.log(exports.howSum(7, [2, 4])); // null
console.log(exports.howSum(8, [2, 3, 5])); // [2,2,2,2]
console.log(exports.howSum(300, [7, 14])); // null
