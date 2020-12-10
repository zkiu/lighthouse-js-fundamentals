let prompt = require("prompt-sync")();

let answerString: string;
let answerNumber: number;
let numberOfGuesses: number = 0;
const previousGuesses: number[] = [];

//random number generator between 0 to 100
const randomNumber = Math.ceil(Math.random() * 100);

do {
  // -- assume the guess is greater than 0 and an integer between 1 to 100
  answerString = prompt("Guess a number: ");
  answerNumber = filterInt(answerString);

  // -- if the guess is not a number
  if (isNaN(answerNumber)) {
    console.log("Not a number! Try again!");
    continue;
  }

  // -- check if number already guessed previously
  if (previouslyGuessed(answerNumber, previousGuesses)) {
    console.log("Already Guessed!");
    continue;
  }

  if (answerNumber > randomNumber) {
    previousGuesses.push(answerNumber);
    console.log("Too High!");
    numberOfGuesses++;
    continue;
  }
  if (answerNumber < randomNumber) {
    previousGuesses.push(answerNumber);
    console.log("Too Low!");
    numberOfGuesses++;
    continue;
  }
  if (answerNumber === randomNumber) {
    numberOfGuesses++;
    console.log(`You got it! You took ${numberOfGuesses} attempts!`);
    break;
  }
} while (answerNumber !== randomNumber);

function previouslyGuessed(guess: number, numArray: number[]): boolean {
  // -- check if there are previous guesses
  if (numArray.length === 0) {
    return false;
  }

  // -- if guess matches any number in the array of previously guess choices
  for (const num of numArray) {
    if (num === guess) {
      return true;
    }
  }

  return false;
}

// -- from internet https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// -- the following is strict parsing function for numbers. This is used in case the user passing in something like '123abc'.
/// -- parseInt() would return 123 while the STRICT parse below would return NaN
function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value);
  } else {
    return NaN;
  }
}
