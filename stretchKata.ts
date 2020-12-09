// -- kata 15
const squareCode = function (message: string) {
  let newText = stripSpaces(message);
  let numCol: number = Math.ceil(Math.sqrt(newText.length));
  let boxOfString = squareString(newText, numCol);
  let scrambledText = scrambleSquare(boxOfString);

  return scrambledText;
};

const stripSpaces = function (message: string): string {
  let result: string = "";
  // -- loop through the string
  for (let i = 0; i < message.length; i++) {
    const letter = message[i];
    // -- condition where there is a space
    if (letter === " ") {
      continue;
    } else {
      result += letter;
    }
  }
  return result;
};

const squareString = function (text: string, col: number): string[] {
  let resultArray = [];
  let rowString = "";

  for (let i = 0; i < text.length; i++) {
    rowString += text[i];
    if ((i + 1) % col === 0) {
      resultArray.push(rowString);
      rowString = ""; // -- reset this variable once pushed
    }
  }
  // -- push the last bit of the string that shorter than the col length to the array
  if (text.length % col !== 0) {
    resultArray.push(rowString);
  }
  return resultArray;
};

const scrambleSquare = function (textArray: string[]): string {
  let col = textArray[0].length;
  let secretStr = "";
  // -- looping through each row for a given col
  for (let i = 0; i < col; i++) {
    for (const text of textArray) {
      // -- for when the last row has less char than the toher rows, value will be undefined and thus ignored
      if (text[i] !== undefined) {
        secretStr += text[i];
      }
    }
    secretStr += " ";
  }
  return secretStr;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(
  squareCode(
    "if man was meant to stay on the ground god would have given us roots"
  )
);

// // -- Kata 14
// const urlDecode = function (text: string): object {
//   let result = {};

//   let slicedArray = stringSlicerAtChar(text, "&");

//   // -- make each item of the array into an object, then combine the objects into a single object
//   for (const keyPairStr of slicedArray) {
//     let i = indexOfSpecialCharacter(keyPairStr, "=");
//     result = { ...result, ...textSlicedToObj(keyPairStr, i) };
//   }
//   return result;
// };

// // -- return the index of the FIRST special char
// const indexOfSpecialCharacter = function (text: string, char: string): number {
//   for (let i = 0; i < text.length; i++) {
//     if (text[i] === char) {
//       return i;
//     }
//   }
//   // -- returns '-1' if not found
//   return -1;
// };
// // -- slices a key value pair string into an object
// const textSlicedToObj = function (text: string, index: number): object {
//   // -- note that index is where the special character is located
//   let key = "";
//   let value = "";

//   for (let i = 0; i < index; i++) {
//     key += text[i];
//   }
//   for (let i = index + 1; i < text.length; i++) {
//     if (text[i] === "%" && text[i + 1] === "2" && text[i + 2] === "0") {
//       value += " ";
//       i += 2; // -- increment it past the special '%20' str
//     } else {
//       value += text[i];
//     }
//   }
//   return { [key]: value };
// };

// const stringSlicerAtChar = function (text: string, char: string): string[] {
//   let result = [];
//   let firstPart = "";
//   let endPart = "";
//   let IndexOfSpecialCharFound = indexOfSpecialCharacter(text, char); // -- returns '-1' if not found

//   // -- if no special char is found in text
//   if (IndexOfSpecialCharFound === -1) {
//     return [text];
//   } else {
//     // -- if the special char is found in text
//     // -- slice before the special char
//     for (let i = 0; i < IndexOfSpecialCharFound; i++) {
//       firstPart += text[i];
//     }
//     // -- slice after the special char
//     for (let i = IndexOfSpecialCharFound + 1; i < text.length; i++) {
//       endPart += text[i];
//     }
//     result.push(firstPart);
//     // -- do recursive magic
//     result.push(...stringSlicerAtChar(endPart, char));
//   }
//   return result;
// };

// console.log(urlDecode("duck=rubber"));
// console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
// console.log(urlDecode("duck=rubber&bootcamp=Lighthouse%20Labs"));
// console.log(
//   urlDecode(
//     "city=Vancouver&weather=lots%20of%20rain&bootcamp=Lighthouse%20Labs&course=javascript"
//   )
// );
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
// console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

// // -- kata 13
// const makeCase = function (input: string, styles: any): string {
//   let result = input;

//   // -- check if styles is a string
//   if (typeof styles === "string") return cycleThroughStyles(input, styles);

//   // -- if styles is an array
//   // -- assume that the styles array passed in in already in the correct order of precedence
//   for (const style of styles) {
//     result = cycleThroughStyles(result, style);
//   }

//   return result;
// };

// const cycleThroughStyles = function (input: string, style: string) {
//   let result: string;

//   switch (style) {
//     case "camel":
//       result = camelCase(input);
//       break;
//     case "pascal":
//       result = pascalCase(input);
//       break;
//     case "snake":
//       result = snakeCase(input);
//       break;
//     case "kebab":
//       result = kebabCase(input);
//       break;
//     case "title":
//       result = titleCase(input);
//       break;
//     case "vowel":
//       result = vowelCase(input);
//       break;
//     case "consonant":
//       result = consonantCase(input);
//       break;
//     case "upper":
//       result = upperCase(input);
//       break;
//     case "lower":
//       result = lowerCase(input);
//       break;
//     default:
//       break;
//   }
//   return result;
// };

// // -- from previous kata
// const camelCase = function (input: string): string {
//   let result: string = "";
//   // -- loop through the string
//   for (let i = 0; i < input.length; i++) {
//     const letter = input[i];
//     // -- condition where there is a space and there is a next letter
//     if (letter === " " && input[i + 1]) {
//       i++;
//       result += input[i].toUpperCase();
//     } else {
//       result += letter;
//     }
//   }
//   return result;
// };

// const pascalCase = function (input: string): string {
//   let result = camelCase(input);
//   return result[0].toUpperCase() + result.slice(1);
// };

// const snakeCase = function (input: string): string {
//   let result = "";
//   for (let index = 0; index < input.length; index++) {
//     const letter = input[index];
//     // -- if the 1st letter is a space, it will be trimmed
//     if (index === 0 && letter === " ") {
//       continue;
//     }
//     // -- if the last letter is a space, it will be trimmed
//     if (index === input.length - 1 && letter === " ") {
//       break;
//     }
//     if (letter === " ") {
//       result += "_";
//     } else {
//       result += letter;
//     }
//   }
//   return result;
// };
// const kebabCase = function (input: string): string {
//   let result = "";
//   for (let index = 0; index < input.length; index++) {
//     const letter = input[index];
//     // -- if the 1st letter is a space, it will be trimmed
//     if (index === 0 && letter === " ") {
//       continue;
//     }
//     // -- if the last letter is a space, it will be trimmed
//     if (index === input.length - 1 && letter === " ") {
//       break;
//     }
//     if (letter === " ") {
//       result += "-";
//     } else {
//       result += letter;
//     }
//   }
//   return result;
// };
// const titleCase = function (input: string): string {
//   let result = "";
//   for (let index = 0; index < input.length; index++) {
//     const letter = input[index];
//     // -- if the 1st letter is a space, it will be trimmed
//     if (index === 0 && letter === " ") {
//       // -- increment to the start of the next word
//       index++;
//       result += input[index].toUpperCase();
//       continue;
//     } else if (index === 0) {
//       result += letter.toUpperCase();
//       continue;
//     }
//     // -- if the last letter is a space, it will be trimmed
//     if (index === input.length - 1 && letter === " ") {
//       break;
//     }

//     if (letter === " ") {
//       result += " ";
//       // -- increment to the start of the next word
//       index++;
//       result += input[index].toUpperCase();
//     } else {
//       result += letter;
//     }
//   }
//   return result;
// };
// const vowelCase = function (input: string): string {
//   let result = "";
//   for (let index = 0; index < input.length; index++) {
//     const letter = input[index];

//     if (
//       letter === "a" ||
//       letter === "e" ||
//       letter === "i" ||
//       letter === "o" ||
//       letter === "u"
//     ) {
//       result += letter.toUpperCase();
//     } else {
//       result += letter;
//     }
//   }
//   return result;
// };
// const consonantCase = function (input: string): string {
//   let result = "";
//   for (let index = 0; index < input.length; index++) {
//     const letter = input[index];

//     if (
//       letter !== "a" &&
//       letter !== "e" &&
//       letter !== "i" &&
//       letter !== "o" &&
//       letter !== "u"
//     ) {
//       result += letter.toUpperCase();
//     } else {
//       result += letter;
//     }
//   }
//   return result;
// };
// const upperCase = function (input: string): string {
//   let result = "";
//   for (let index = 0; index < input.length; index++) {
//     const letter = input[index];
//     result += letter.toUpperCase();
//   }
//   return result;
// };
// const lowerCase = function (input: string): string {
//   let result = "";
//   for (let index = 0; index < input.length; index++) {
//     const letter = input[index];
//     result += letter.toLowerCase();
//   }
//   return result;
// };

// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));

// // -- kata 12
// const organizeInstructors = function (instructors) {
//   let newObj = {};

//   // -- Loop through the values of an array:
//   for (const instructor of instructors) {
//     let name = instructor.name;
//     let course = instructor.course;
//     // console.log("1 course");
//     // console.log(course);

//     // -- if this is the 1st time the course is iterated over THEN initialize it with an empty array
//     if (newObj[course] === undefined) {
//       newObj[course] = [];

//       // console.log("2 value for: newObj");
//       // console.log(newObj);
//     }

//     newObj[course].push(name);

//     // console.log("3 value for: newObj ");
//     // console.log(newObj);
//   }

//   return newObj;
// };

// console.log(
//   organizeInstructors([
//     { name: "Samuel", course: "iOS" },
//     { name: "Victoria", course: "Web" },
//     { name: "Karim", course: "Web" },
//     { name: "Donald", course: "Web" },
//   ])
// );
// console.log(
//   organizeInstructors([
//     { name: "Brendan", course: "Blockchain" },
//     { name: "David", course: "Web" },
//     { name: "Martha", course: "iOS" },
//     { name: "Carlos", course: "Web" },
//   ])
// );

// {
//   iOS: ["Samuel"],
//   Web: ["Victoria", "Karim", "Donald"]
// }
// {
//   Blockchain: ["Brendan"],
//   Web: ["David", "Carlos"],
//   iOS: ["Martha"]
// }

// // -- kata 11

// interface cashChange {
//   twentyDollar?: number;
//   tenDollar?: number;
//   fiveDollar?: number;
//   twoDollar?: number;
//   oneDollar?: number;
//   quarter?: number;
//   dime?: number;
//   nickle?: number;
//   penny?: number;
//   message?: string;
// }

// // -- this function prioritize giving larger denomination 1st
// const calculateChange = function (total: number, cash: number): cashChange {
//   // -- when the payment is not enough
//   if (cash < total) {
//     return { message: "insufficient cash" };
//   }

//   let changeObj: cashChange = {};
//   let result: { times: number; remainder: number };

//   // -- for twentyDollar
//   result = modulusRemainder(2000, cash - total);
//   if (result.times !== 0) {
//     changeObj.twentyDollar = result.times;
//   }
//   // -- for tenDollar
//   result = modulusRemainder(1000, result.remainder);
//   if (result.times !== 0) {
//     changeObj.tenDollar = result.times;
//   }
//   // -- and so on for other change denomination
//   result = modulusRemainder(500, result.remainder);
//   if (result.times !== 0) {
//     changeObj.fiveDollar = result.times;
//   }
//   result = modulusRemainder(200, result.remainder);
//   if (result.times !== 0) {
//     changeObj.twoDollar = result.times;
//   }
//   result = modulusRemainder(100, result.remainder);
//   if (result.times !== 0) {
//     changeObj.oneDollar = result.times;
//   }
//   result = modulusRemainder(25, result.remainder);
//   if (result.times !== 0) {
//     changeObj.quarter = result.times;
//   }
//   result = modulusRemainder(10, result.remainder);
//   if (result.times !== 0) {
//     changeObj.dime = result.times;
//   }
//   result = modulusRemainder(5, result.remainder);
//   if (result.times !== 0) {
//     changeObj.nickle = result.times;
//   }
//   result = modulusRemainder(1, result.remainder);
//   if (result.times !== 0) {
//     changeObj.penny = result.times;
//   }

//   return changeObj;
// };

// // -- value is the worth of the currency denominator
// function modulusRemainder(
//   value,
//   remainder
// ): { times: number; remainder: number } {
//   if (remainder < value) {
//     // -- just return the remainder if it is smaller than the change value
//     return { times: 0, remainder };
//   } else if (remainder === 0) {
//     // -- if there are no change left to give
//     return { times: 0, remainder: 0 };
//   } else {
//     let times: number = Math.floor(remainder / value);
//     let leftOver: number = remainder % value;
//     return { times, remainder: leftOver };
//   }
// }

// console.log(calculateChange(1787, 2000));
// console.log(calculateChange(2623, 4000));
// console.log(calculateChange(501, 1000));

// // -- Kata 10 - Talking Calendar
// const talkingCalendar = function (date: string): string {
//   // -- date given as str YYYY/MM/DD
//   let YYYY = date.slice(0, 4);
//   let MM = date.slice(5, 7);
//   let DD = date.slice(8, 10);

//   return getMonth(MM) + " " + getDay(DD) + ", " + YYYY;
// };

// function getDay(DD: string): string {
//   // -- for cases where DD is '02', this varible is 2
//   // let dateAsNumber: number = parseInt(DD);
//   let result: string = "";
//   // -- if the 1st char is '0'
//   if (DD[0] === "0") {
//     result = DD[1];
//   } else {
//     result = DD;
//   }

//   if (DD === "11" || DD === "12" || DD === "13") {
//     result += "th";
//   } else if (DD[1] === "1") {
//     result += "st";
//   } else if (DD[1] === "2") {
//     result += "nd";
//   } else if (DD[1] === "3") {
//     result += "rd";
//   } else {
//     result += "th";
//   }

//   return result;
// }

// function getMonth(MM: string): string {
//   switch (MM) {
//     case "01":
//       return "January";
//     case "02":
//       return "February";
//     case "03":
//       return "March";
//     case "04":
//       return "April";
//     case "05":
//       return "May";
//     case "06":
//       return "June";
//     case "07":
//       return "July";
//     case "08":
//       return "August";
//     case "09":
//       return "September";
//     case "10":
//       return "Octorber";
//     case "11":
//       return "November";
//     case "12":
//       return "December";
//     default:
//       break;
//   }
// }

// console.log(talkingCalendar("2017/12/01"));
// console.log(talkingCalendar("2017/12/02"));
// console.log(talkingCalendar("2007/11/03"));
// console.log(talkingCalendar("1987/08/04"));
// console.log(talkingCalendar("1987/08/11"));
// console.log(talkingCalendar("1987/08/13"));
// console.log(talkingCalendar("1987/08/20"));
// console.log(talkingCalendar("1987/08/21"));

/*
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/

// // -- kata 10
// const chooseRecipe = function (bakeryA, bakeryB, recipes) {
//   // -- code not considering where one bakery has BOTH the ingredients for a recipe
//   // -- code not considering both bakery has the same matching ingredient
//   // -- code assumes a suitable recipe will always be found

//   // -- loops through the recipes
//   for (const recipe of recipes) {
//     if (ingredientCheck(bakeryA, recipe) && ingredientCheck(bakeryB, recipe)) {
//       return recipe.name;
//     }
//   }
// };

// // -- checks if the bakery has an ingredient in the recipe's list of ingredients
// function ingredientCheck(bakery, recipe) {
//   // -- loop through each item of ingredients
//   for (const ingredient of recipe.ingredients) {
//     // console.log("ingredient " + ingredient);
//     // -- search if ingredient in bakery
//     for (const item of bakery) {
//       //   console.log("item " + item);
//       // -- if the bakery has the ingredient
//       if (item === ingredient) {
//         // console.log("MATCH: " + item + " " + ingredient);
//         return true;
//       }
//     }
//   }
//   // -- returns false if no match
//   return false;
// }

// let bakeryA = ["saffron", "eggs", "tomato paste", "coconut", "custard"];
// let bakeryB = ["milk", "butter", "cream cheese"];
// let recipes = [
//   {
//     name: "Coconut Sponge Cake",
//     ingredients: ["coconut", "cake base"],
//   },
//   {
//     name: "Persian Cheesecake",
//     ingredients: ["saffron", "cream cheese"],
//   },
//   {
//     name: "Custard Surprise",
//     ingredients: ["custard", "ground beef"],
//   },
// ];
// console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// bakeryA = ["potatoes", "bay leaf", "raisins"];
// bakeryB = ["red bean", "dijon mustard", "apples"];
// recipes = [
//   {
//     name: "Potato Ganache",
//     ingredients: ["potatoes", "chocolate"],
//   },
//   {
//     name: "Sweet Fish",
//     ingredients: ["anchovies", "honey"],
//   },
//   {
//     name: "Nima's Famous Dijon Raisins",
//     ingredients: ["dijon mustard", "raisins"],
//   },
// ];
// console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// // -- kata 9
// // Use the value below whenever you need the value of Pi
// const PI = 3.14159;

// const sphereVolume = function (radius) {
//   return (4 / 3) * PI * radius ** 3;
// };

// console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

// const coneVolume = function (radius, height) {
//   return (PI / 3) * radius ** 2 * height;
// };

// console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

// const prismVolume = function (height, width, depth) {
//   return height * width * depth;
// };

// console.log(prismVolume(3, 4, 5) === 60);

// interface Solid {
//   type: string;
//   radius?: number;
//   height?: number;
//   width?: number;
//   depth?: number;
// }

// const totalVolume = function (solids: Array<Solid>): number {
//   let totalVolume = 0;

//   prismVolume;
//   sphereVolume;
//   coneVolume;

//   // -- loop through the array of solids
//   solids.forEach((solid) => {
//     switch (solid.type) {
//       case "sphere":
//         totalVolume += sphereVolume(solid.radius);
//         break;
//       case "cone":
//         totalVolume += coneVolume(solid.radius, solid.height);
//         break;
//       case "prism":
//         totalVolume += prismVolume(solid.height, solid.width, solid.depth);
//         break;

//       default:
//         break;
//     }
//   });

//   return totalVolume;
// };

// const largeSphere = {
//   type: "sphere",
//   radius: 40,
// };

// const smallSphere = {
//   type: "sphere",
//   radius: 10,
// };

// const cone = {
//   type: "cone",
//   radius: 3,
//   height: 5,
// };

// const duck = [largeSphere, smallSphere, cone];

// console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

// // -- kata 8
// const multiplicationTable = function (maxValue: number): string {
//   let multiTable: string = "";

//   // -- loop through rows
//   for (let y = 1; y <= maxValue; y++) {
//     // -- loop through columns
//     for (let x = 1; x <= maxValue; x++) {
//       multiTable += (y * x).toString() + " ";
//     }
//     multiTable += "\n";
//   }

//   return multiTable;
// };

// console.log(multiplicationTable(1));
// console.log(multiplicationTable(5));
// console.log(multiplicationTable(10));

// -- kata 7
// const camelCase = function (input: string): string {
//   let result: string = "";
//   // -- loop through the string
//   for (let i = 0; i < input.length; i++) {
//     const letter = input[i];
//     // -- condition where there is a space and there is a next letter
//     if (letter === " " && input[i + 1]) {
//       i++;
//       result += input[i].toUpperCase();
//     } else {
//       result += letter;
//     }
//   }
//   // -- current code does not consider if the 1st char of the str is a space or special char
//   return result;
// };

// console.log(camelCase("this is a string"));
// console.log(camelCase("loopy lighthouse"));
// console.log(camelCase("supercalifragalisticexpialidocious"));
// console.log(camelCase("loopy lighthouse "));
// console.log(camelCase("supercalifragalisticexpialidocious heck"));

// // -- kata 6
// export const repeatNumbers = function (data: Array<[number, number]>): string {
//   // -- making the output into a string so that we can concactenate the numbers instead of doing the + operant
//   let outputStr: string = "";

//   let value: number = 0;
//   let repeat: number = 0;

//   // -- if more than 1 pair in the array
//   // -- outer array loop
//   for (let index = 0; index < data.length; index++) {
//     // -- add comma if not the 1st array pair
//     if (index !== 0) {
//       outputStr += ", ";
//     }

//     [value, repeat] = data[index];
//     // -- looping to repeat
//     for (let index = 0; index < repeat; index++) {
//       outputStr += value;
//     }

//     // -- if there is only 1 array pair
//     if (data.length === 1) {
//       break;
//     }
//   }

//   return outputStr;
// };

// console.log(repeatNumbers([[1, 10]]));
// console.log(
//   repeatNumbers([
//     [1, 2],
//     [2, 3],
//   ])
// );
// console.log(
//   repeatNumbers([
//     [10, 4],
//     [34, 6],
//     [92, 2],
//   ])
// );
