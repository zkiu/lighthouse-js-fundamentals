/*
Longest Harmonious Subsequence

Input: nums = [1,3,2,2,5,2,3,7]
Output: 5
Explanation: The longest harmonious subsequence is [3,2,2,2,3].

Input: nums = [1,2,3,4]
Output: 2

Input: nums = [1,1,1,1]
Output: 0
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

// -- Kiu's solution
// var findLHS = function (nums) {
// 	nums.sort((a, b) => a - b)
// 	let seq = 0

// 	for (let i = 0; i < nums.length - 1; i++) {
// 		if (nums.includes(nums[i] + 1)) {
// 			let total = numOccur(nums[i], nums) + numOccur(nums[i] + 1, nums)
// 			if (total > seq) {
// 				seq = total
// 			}
// 		}
// 	}

// 	return seq
// }

// function numOccur(n, array) {
// 	let count = 0
// 	for (const item of array) {
// 		if (item === n) count++
// 	}
// 	return count
// }

// -- trying the suggested solution using something similar to a hash table

var findLHS = function (nums) {
	let countObj = {}
	for (const num of nums) {
		if (num in countObj) {
			countObj[num]++
		} else {
			countObj[num] = 1
		}
	}

	let maxChain = 0
	let tempSum = 0
	for (const key in countObj) {
		if (countObj[parseInt(key) + 1]) {
			tempSum = countObj[key] + countObj[parseInt(key) + 1]

			if (tempSum > maxChain) maxChain = tempSum
		}
	}

	return maxChain
}

console.log(findLHS([1, 3, 2, 2, 5, 2, 3, 7]))
console.log(findLHS([1, 2, 3, 4]))
console.log(findLHS([1, 1, 1, 1]))
