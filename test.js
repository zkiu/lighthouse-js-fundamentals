// let arr = ['a', 'b', 'c', 'd']
// const a = [50, 60, 60, 45, 70]

var data = [
	['X.crazy.c', 'crazy%20neat'],
	['a.b', 'cool'],
	['a.new', 'test'],
]
// var array = data.split('.')

let result = {}
let temp = result

for (let y = 0; y < data.length; y++) {
	// console.log(`Output for -> y`, y)
	let path = data[y][0].split('.')
	let value = data[y][1]

	value = value.replace('%20', ' ')

	for (let i = 0; i < path.length - 1; i++) {
		if (temp[path[i]] == null) {
			temp = temp[path[i]] = {}
		} else {
			temp = temp[path[i]]
		}
	}
	temp[path[path.length - 1]] = value

	temp = result
}

console.log(JSON.stringify(result))
// var result = {}
// var temp = result
// for (var i = 0; i < array.length; i++) {
// 	temp = temp[array[i]] = {}
// }

// console.log(result)
