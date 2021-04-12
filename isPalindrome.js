/**
 * @param {number} x
 * @return {boolean}
 */

//by converting to string
// var isPalindrome = function (x) {
// 	if (x < 0) return false
// 	const str = '' + x
// 	const midLen = Math.ceil(str.length / 2)

// 	for (let i = 0; i < midLen; i++) {
// 		if (str[i] !== str[str.length - 1 - i]) {
// 			return false
// 		}
// 	}

// 	return true
// }

//by not converting to string - testing the solution by others
var isPalindrome = function (x) {
	// -- input cannot be negative
	if (x < 0) return false

	let magnitude = 1

	while (x / magnitude >= 10) {
		magnitude *= 10
	}

	while (x > 0) {
		const leftEnd = Math.trunc(x / magnitude)
		const rightEnd = x % 10
		if (leftEnd !== rightEnd) return false

		x = Math.trunc((x % magnitude) / 10)

		magnitude = Math.trunc(magnitude / 100)
	}

	return true
}

console.log(isPalindrome(10)) //true
// console.log(isPalindrome(-121)) //false
// console.log(isPalindrome(5678765)) //true
// console.log(isPalindrome(5678865)) //false
// console.log(isPalindrome(1000021)) //false
// console.log(isPalindrome(10111)) //false
