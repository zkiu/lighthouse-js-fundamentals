const pyramidStr = (n) => {
	// assume that n is greater than 0 and it is an integer
	let result = ''
	const rowWidth = n * 2 - 1
	const halfway = Math.ceil(rowWidth / 2)

	for (let i = 1; i <= n; i++) {
		//
		for (let j = 1; j <= rowWidth; j++) {
			//set boundaries for when number is printed
			if (j >= halfway - (i - 1) && j <= halfway + (i - 1)) {
				// conditional statement that covers when either both i & j are odd, or when both are even
				if (!isEven(i) === !isEven(j)) {
					result = result + String(i)
				} else {
					result = result + ' '
				}
			} else {
				result = result + ' '
			}
			//
		}
		//
		result = result + '\n'
	}

	return result
}

console.log(pyramidStr(5))

function isEven(num) {
	// asume num is >0 and it is an integer
	if (num % 2 === 0) {
		return true
	} else return false
}

// console.log(isEven(1))
// console.log(isEven(2))
// console.log(isEven(3))
