function canSum(main, numbers) {
	if (main === 0) return true
	if (main < 0) return false

	for (const num of numbers) {
		let remainder = main - num

		if (canSum(remainder, numbers)) return true
	}

	return false
}

console.log(canSum(7, [2, 3])) // true
console.log(canSum(7, [5, 3, 4, 7])) // true
console.log(canSum(7, [2, 4])) // false
console.log(canSum(8, [2, 3, 5])) // true
