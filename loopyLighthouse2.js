/*
  range should be an array of 2 numbers representing the start and end values for the loop.
  multiples should be an array of 2 numbers representing the multiples you want to replace with words.
  words should be an array of 2 strings representing the words that will replace the multiples.

  loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);


  The loopyLighthouse function should log to the console all the numbers from 15 to 90, except replacing multiples of 2 with "Batty", multiples of 5 with "Beacon", and multiples of 2 and 5 with "BattyBeacon".

*/

function loopyLighthouse(range, multiples, words) {
  let [start, end] = range;
  let [multipleA, multipleB] = multiples;
  let [wordA, wordB] = words;

  for (let index = start; index < end + 1; index++) {
    if (index % multipleA === 0 && index % multipleB === 0) {
      console.log(wordA + wordB);
      continue;
    }
    if (index % multipleA === 0) {
      console.log(wordA);
      continue;
    }
    if (index % multipleB === 0) {
      console.log(wordB);
      continue;
    }
    console.log(index);
  }
}
