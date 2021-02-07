// var twoSum = function (nums = [], target) {
// 	for (let i = 0; i < nums.length; i++) {
// 		let index = nums.indexOf(target - nums[i])
// 		if (index != -1 && index != i) return [i, index]
// 	}
// }
var twoSum = function (nums = [], target) {
	let map = {}
	for (let i = 0; i < nums.length; i++) {
		let reminder = target - nums[i]

		if (reminder in map && map[reminder] != i) {
			return [map[reminder], i]
		}
		map[nums[i]] = i
	}
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))
