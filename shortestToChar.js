/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 Input: s = "loveleetcode", c = "e"
Output: [3,2,1,0,1,0,0,1,2,2,1,0]
Example 2:

Input: s = "aaab", c = "b"
Output: [3,2,1,0]
 * 
 */

// -- original solution

// var shortestToChar = function (s, c) {
// 	let res = []
// 	let str = s.split('')

// 	let pointA = -1
// 	let pointB = -1
// 	let gap = 0

// 	if (str[0] === c) {
// 		pointA = 0
// 		pointB = str.indexOf(c, pointA + 1)
// 	}

// 	for (let i = 0; i < str.length; i++) {
// 		if (str[i] === c) {
// 			res.push(0)
// 			pointA = i
// 			pointB = str.indexOf(c, pointA + 1)
// 			continue
// 		}

// 		// -- for when 'c' is not at the very START
// 		if (pointA === -1) {
// 			pointB = str.indexOf(c)
// 			gap = pointB - i
// 			res.push(gap)
// 			continue
// 		}

// 		// -- for when 'c' is not at the very END
// 		if (pointB === -1) {
// 			res.push(i - pointA)
// 			continue
// 		}

// 		// -- for substring surrounded by c

// 		res.push(Math.min(i - pointA, pointB - i))
// 	}

// 	return res
// }

// -- inspired solution
// var shortestToChar = function (s, c) {
// 	let res = new Array(s.length).fill(null)

// 	let pastPos = -1
// 	for (let i = 0; i < s.length; i++) {
// 		if (s[i] === c) {
// 			res[i] = 0
// 			pastPos = i
// 			continue
// 		}
// 		if (pastPos === -1) {
// 			continue
// 		}

// 		res[i] = i - pastPos
// 	}

// 	pastPos = s.length
// 	for (let i = s.length - 1; i >= 0; i--) {
// 		if (s[i] === c) {
// 			pastPos = i
// 			continue
// 		}

// 		let value = pastPos - i

// 		if (pastPos === s.length) {
// 			continue
// 		}
// 		if (res[i] === null) {
// 			res[i] = value
// 		} else {
// 			res[i] = Math.min(res[i], value)
// 		}
// 	}

// 	return res
// }

// -- inspired by the fav solution
var shortestToChar = function (s, c) {
	let res = []
	let keyPos = []

	for (let i = 0; i < s.length; i++) {
		if (s[i] === c) keyPos.push(i)
	}

	for (let i = 0; i < s.length; i++) {
		min = Infinity

		for (let j = 0; j < keyPos.length; j++) {
			min = Math.min(Math.abs(i - keyPos[j]), min)
		}
		res.push(min)
	}

	return res
}

// // Output: [3, 2, 1, 0]
// console.log(shortestToChar('aaab', 'b'))
// // Output: [0,1,2,3]
// console.log(shortestToChar('baaa', 'b'))
// // Output: [0, 1, 2, 1, 0]
console.log(shortestToChar('baaab', 'b'))
// // output [3,2,1,0,1,0,0,1,2,2,1,0]
console.log(shortestToChar('loveleetcode', 'e'))
// output [1,0,1,2]
console.log(shortestToChar('abaa', 'b'))
