const ingredients = [
	'eggs',
	'milk',
	'flour',
	'sugar',
	'baking soda',
	'baking powder',
	'chocolate chips',
	'bananas',
]

// Write a while loop that prints out the contents of ingredients:
let i = 0
while (i < ingredients.length) {
	console.log(ingredients[i])
	i++
}

// Write a for loop that prints out the contents of ingredients:
console.log('--------------------')
for (let index = 0; index < ingredients.length; index++) {
	const element = ingredients[index]
	console.log(element)
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log('--------------------')

for (let index = ingredients.length - 1; index >= 0; index--) {
	const element = ingredients[index]
	console.log(element)
}
