var prompt = require("prompt-sync")();
var answerString;
var answerNumber;
var numberOfGuesses = 0;
var previousGuesses = [];
//random number generator between 0 to 100
var randomNumber = Math.ceil(Math.random() * 100);
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
        console.log("You got it! You took " + numberOfGuesses + " attempts!");
        break;
    }
} while (answerNumber !== randomNumber);
function previouslyGuessed(guess, numArray) {
    // -- check if there are previous guesses
    if (numArray.length === 0) {
        return false;
    }
    // -- if guess matches any number in the array of previously guess choices
    for (var _i = 0, numArray_1 = numArray; _i < numArray_1.length; _i++) {
        var num = numArray_1[_i];
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
    }
    else {
        return NaN;
    }
}
