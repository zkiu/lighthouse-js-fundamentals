/*
Create a function called LargestPair which will receive a number parameter.
This function will determine the largest double digit number within a whole number.
For example: if the number is 6727449765734967 then the function will return 97. 
For this problem assume that the input will always contain at least two positive digits. 
​
Test Cases:
Input:5482673
Output:82
​
Input:541623457
Output: 62
*/

// function largestPair(num = 12) {
// 	let strArray = num.toString().split('')

// 	let maxNum = 0
// 	index = 0

// 	for (let i = 0; i < strArray.length - 1; i++) {
// 		if (strArray[i] > maxNum) {
// 			maxNum = strArray[i]
// 			index = i
// 		}
// 	}

// 	return '' + strArray[index] + strArray[index + 1]
// }

// console.log(largestPair(6727449765734967)) //97
// console.log(largestPair(5482673)) //82
// console.log(largestPair(541623457)) //62

/* 
Create a function called uniqueCharacters which will receive one string parameter.
This function will determine if it contains at least 10 distinct characters. 
If it does return true, otherwise it should return false. 
For example: if the string is "cde456jjoooo!" then the function will return false because this string only contains 9 distinct characters: c, d, e, 4, 5, 6, j, o, ! which adds up to 9. 
​
Test Cases:
Input: "5937ggtta:=6"
Output: true
                
Input:"bbbbkkkkkkkk37777"
Output: false
*/
function uniqueCharacters(str) {
	let charArr = str.split('')
	let set = new Set(charArr)
	return set.size >= 10
}

console.log(uniqueCharacters('5937ggtta:=6'))
console.log(uniqueCharacters('bbbbkkkkkkkk37777'))
