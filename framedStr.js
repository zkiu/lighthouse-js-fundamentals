// given ['Hello', 'World'], it should print:
const ex1 = ['Hello', 'World']
// *********
// * Hello *
// * World *
// *********
// given ['The', 'Quick', 'Brown', 'Fox'], it should print:
const ex2 = ['The', 'Quick', 'Brown', 'Fox']
// *********
// * The   *
// * Quick *
// * Brown *
// * Fox   *
// *********

function frameStr(strArray) {
	debugger
	let strLength = maxStrLength(strArray)

	let result = ''

	for (let i = 0; i < strLength + 4; i++) {
		result += '*'
	}
	result += '\n'

	for (const item of strArray) {
		result += '* '

		for (let j = 0; j < strLength; j++) {
			result += item[j] || ' '
		}

		result += ' *\n'
	}

	for (let i = 0; i < strLength + 4; i++) {
		result += '*'
	}
	result += '\n'

	return result
}

function maxStrLength(array) {
	let result = array[0].length
	for (const str of array) {
		if (str.length > result) result = str.length
	}

	return result
}

console.log(frameStr(ex2))
