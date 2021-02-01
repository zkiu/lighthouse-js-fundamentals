const readlineSync = require('readline-sync')

// this array holds all the possible words that can be the answer
// feel free to change the words here to words you find interesting! :)

let words = ['do', 'you', 'want', 'to', 'build', 'a', 'snowman']

let answer //array of char
let nWrong //num of wrong guesses
let pastGuesses = []
// let pastGames = []
let cont = true

/*
PART 1

Write the pseudocode that represents your game logic here:

- black space equal to word.length is displayed
- prompt the user to guess a letter
-- confirm letter is from a-z
-- confirm letter was not previously guessed -> if was previously guessed then show error and then prompt for another guess
- push guess into guesses array
- see if letter in word
-- if yes -> show letter -> see if all letters are filled OR prompt for next guess
-- if no -> reduce number of guessing time by 1 -> if guessing time is -1 then show lost OR prompt for next guess

*/

function startGame() {
	setUpGame()
	while (!checkGameOver()) {
		printGameState()
		const guess = readlineSync.question('please enter a guess: ')
		console.log('The guess is:', guess)
		/*
			PART 2
			Write the logic that will check whether or not the guess the user entered
			was valid here.

		*/
		if (pastGuesses.includes(guess)) {
			console.log('You have already guessed this character')
			continue
		}
		pastGuesses.push(guess)

		if (answer.includes(guess)) {
			console.log('Your guess of', guess, 'is correct.')
			continue
		}
		console.log('Wrong guess!')
		nWrong += 1
	}
	printGameState()

	/*
		PART 3

		Log whether or not the game was won or lost here!

	*/
}

function checkGameOver() {
	// WRITE CODE FOR PART 3 BELOW
	if (nWrong === 5) {
		console.log('You lost by making 6 wrong guesses.')
		return true
	}

	for (const char of answer) {
		if (pastGuesses.includes(char)) {
			continue
		} else {
			return false
		}
	}
	return true
}

function printGameState() {
	//Add a console.log here to print the previous guesses.
	console.log('Here are your past guesses:', pastGuesses)

	console.log('\n')
	let str = 'The word: '

	// for each letter in the target word
	for (let i = 0; i < answer.length; i++) {
		let found = false
		// loop through the pastGuesses
		for (let j = 0; j < pastGuesses.length; j++) {
			// and check each element of past guesses to see if it matches the
			if (answer[i] === pastGuesses[j]) {
				found = true
			}
		}
		if (found) {
			str += answer[i]
			str += '\t'
		} else {
			str += '_\t'
		}
	}
	console.log(str)

	console.log('\n')
	printSnowMan(nWrong)
	console.log('\n\n')
}

/*
 =========================================================================================
 	Below are functions that may help with your logic, but do not need any modification
 =========================================================================================
*/

function getRandomWord() {
	const index = Math.floor(Math.random() * words.length)
	return words[index]
}

function printSnowMan(nWrong) {
	//Don't worry about the syntax you see here.  The ? operator is a succinct way to write an
	//if statement that has two results. Think of it as:
	// statement_that_is_true_or_false ? happens_if_true : (OR) happens_if_false
	const snowFace = nWrong > 4 ? `",` : '  '
	const snowBase = nWrong > 0 ? '( :  )|' : '______'
	const snowMiddle = nWrong > 1 ? '\\/. \\-|' : '      '
	const snowHead = nWrong > 2 ? `_,(${snowFace})|_|` : ' '
	const snowHat = nWrong > 3 ? '_==_ _' : ' '

	let str = ''

	console.log('    ' + snowHat)
	console.log('  ' + snowHead + ' ')
	console.log('   ' + snowMiddle + ' ')
	console.log(' __' + snowBase + '__ ')
	return
}

function setUpGame() {
	// choose a new word
	answer = getRandomWord().split('')
	// reset the total of wrong guesses
	nWrong = 0
	// empty our array of previously guessed letters
	pastGuesses = []
}

startGame()

while (cont) {
	let answer = readlineSync.question('Would you like to play again? y/n: ')
	if (answer.toLowerCase() === 'y') {
		startGame()
	} else if (answer.toLowerCase() === 'n') {
		cont = false
		console.log('Good game!')
	} else {
		console.log('Please enter either y (yes) or n (no).')
	}
}
