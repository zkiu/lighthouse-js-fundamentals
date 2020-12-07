// -- kata 7
/*
a threshold of 0.4 means that there must be less than 40% of total samples classified as dirty for our air to be considered clean. Our function must return Polluted if there are too many dirty air samples, or Clean if the proportion of dirty samples is below the threshold.
*/
const checkAir = function (samples, threshold) {
  let cleanSample = 0;
  let dirtySample = 0;

  samples.forEach((sample) => {
    if (sample === "clean") {
      cleanSample++;
    } else if (sample === "dirty") {
      dirtySample++;
    }
  });

  let result = dirtySample / (dirtySample + cleanSample);

  if (result < threshold) {
    return "Clean";
  } else {
    return "Polluted";
  }
};

console.log(
  checkAir(
    [
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
      "clean",
      "clean",
      "dirty",
      "clean",
      "dirty",
    ],
    0.3
  )
);

console.log(checkAir(["dirty", "dirty", "dirty", "dirty", "clean"], 0.25));

console.log(
  checkAir(["clean", "dirty", "clean", "dirty", "clean", "dirty", "clean"], 0.9)
);

// -- kata 6
// const whereCanIPark = function (spots, vehicle) {
//   // -- looping through rows coordinates
//   for (let y = 0; y < spots.length; y++) {
//     const array = spots[y];
//     // -- looping through columns coordinates
//     for (let x = 0; x < array.length; x++) {
//       const spot = array[x];

//       if (
//         vehicle === "motorcycle" &&
//         (spot === "R" || spot === "S" || spot === "M")
//       ) {
//         return [x, y];
//       }
//       if (vehicle === "small" && (spot === "R" || spot === "S")) {
//         return [x, y];
//       }
//       if (vehicle === "regular" && spot === "R") {
//         return [x, y];
//       }
//     }
//   }
//   // -- returns false if no spot is found
//   return false;
// };

// console.log(
//   whereCanIPark(
//     [
//       // COLUMNS ARE X
//       // 0    1    2    3    4    5
//       ["s", "s", "s", "S", "R", "M"], // 0 ROWS ARE Y
//       ["s", "M", "s", "S", "r", "M"], // 1
//       ["s", "M", "s", "S", "r", "m"], // 2
//       ["S", "r", "s", "m", "r", "M"], // 3
//       ["S", "r", "s", "m", "r", "M"], // 4
//       ["S", "r", "S", "M", "M", "S"], // 5
//     ],
//     "regular"
//   )
// );

// console.log(
//   whereCanIPark(
//     [
//       ["M", "M", "M", "M"],
//       ["M", "s", "M", "M"],
//       ["M", "M", "M", "M"],
//       ["M", "M", "r", "M"],
//     ],
//     "small"
//   )
// );

// console.log(
//   whereCanIPark(
//     [
//       ["s", "s", "s", "s", "s", "s"],
//       ["s", "m", "s", "S", "r", "s"],
//       ["s", "m", "s", "S", "r", "s"],
//       ["S", "r", "s", "m", "r", "s"],
//       ["S", "r", "s", "m", "R", "s"],
//       ["S", "r", "S", "M", "m", "S"],
//     ],
//     "motorcycle"
//   )
// );
// console.log(whereCanIPark([["s", "s", "s", "s", "s", "s"]], "motorcycle"));

// -- Kata 5
// const urlEncode = function (text) {
//   let url = "";

//   for (let index = 0; index < text.length; index++) {
//     const letter = text[index];

//     if (index === 0 && letter === " ") {
//       continue;
//     }
//     if (index === text.length - 1 && letter === " ") {
//       break;
//     }
//     if (letter === " ") {
//       url += "%20";
//     } else {
//       url += letter;
//     }
//   }

//   return url;
// };

// console.log(urlEncode("Lighthouse Labs"));
// console.log(urlEncode(" Lighthouse Labs "));
// console.log(urlEncode("blue is greener than purple for sure"));

// -- Kata 4
// const instructorWithLongestName = function (instructors) {
//   let Obj = instructors[0];

//   for (let index = 0; index < instructors.length; index++) {
//     const instructorObj = instructors[index];

//     if (instructorObj.name.length > Obj.name.length) {
//       Obj = instructorObj;
//     }
//   }

//   return Obj;
// };

// console.log(
//   instructorWithLongestName([
//     { name: "Samuel", course: "iOS" },
//     { name: "Jeremiah", course: "Web" },
//     { name: "Ophilia", course: "Web" },
//     { name: "Donald", course: "Web" },
//   ])
// );
// console.log(
//   instructorWithLongestName([
//     { name: "Matthew", course: "Web" },
//     { name: "David", course: "iOS" },
//     { name: "Domascus", course: "Web" },
//   ])
// );

// -- Kata 3
// const numberOfVowels = function (data) {
//   let sum = 0;

//   for (let index = 0; index < data.length; index++) {
//     const letter = data[index];
//     if (
//       letter === "a" ||
//       letter === "e" ||
//       letter === "i" ||
//       letter === "o" ||
//       letter === "u"
//     ) {
//       sum++;
//     }
//   }
//   return sum;
// };

// console.log(numberOfVowels("orange"));
// console.log(numberOfVowels("lighthouse labs"));
// console.log(numberOfVowels("aeiou"));

// -- Kata 2
// const conditionalSum = function (values, condition) {
//   let sumEven = 0;
//   let sumOdd = 0;

//   values.forEach((element) => {
//     if (element % 2 === 0) {
//       sumEven += element;
//     } else {
//       sumOdd += element;
//     }
//   });

//   if (condition === "even") {
//     return sumEven;
//   } else if (condition === "odd") {
//     return sumOdd;
//   } else {
//     return 0;
//   }
// };

// console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
// console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
// console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
// console.log(conditionalSum([], "odd"));

// -- Kata 1
// const sumLargestNumbers = function (data) {
//   if (data.length < 2) {
//     return undefined;
//   }

//   let largestNumber = 0;
//   let secondLargestNumber = 0;

//   // -- pre-assign the 1st two numbers
//   if (data[0] > data[1]) {
//     largestNumber = data[0];
//     secondLargestNumber = data[1];
//   } else {
//     largestNumber = data[1];
//     secondLargestNumber = data[0];
//   }

//   // -- loop over the rest of the array values and compare the numbers
//   for (let index = 2; index < data.length; index++) {
//     const element = data[index];

//     if (data[index] > largestNumber) {
//       secondLargestNumber = largestNumber;
//       largestNumber = data[index];
//     } else if (data[index] > secondLargestNumber) {
//       secondLargestNumber = data[index];
//     }
//   }

//   return largestNumber + secondLargestNumber;
// };

// console.log(sumLargestNumbers([1, 10]));
// console.log(sumLargestNumbers([1, 2, 3]));
// console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
