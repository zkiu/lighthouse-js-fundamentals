const outer = () => {
	let counter = 0

	function inner() {
		counter++
		console.log(counter)
	}

	function inner2() {
		counter++
		console.log(counter)
	}
	return {inner, inner2}
}

const {inner, inner2} = outer()

console.log(inner())
console.log(inner())
console.log(inner2())
