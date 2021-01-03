// function canConstruct(target = '', wordBank = ['']) {
// 	// let str = target.split('')
// 	let table = Array(target.length + 1).fill(false)
// 	table[0] = true

// 	for (let i = 0; i <= target.length; i++) {
// 		if (table[i] === true) {
// 			for (const word of wordBank) {
// 				if (target.indexOf(wordBank, i + 1)===0) {
// 					table[word.length] = true
// 				}
// 			}

target = 'abcdef'
word = 'cd'

console.log(target.indexOf(word, 2))
