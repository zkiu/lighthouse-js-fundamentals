let number = "489465a";

let result = filterInt(number);

console.log(result);

console.log(isNaN(result));

function filterInt(value) {
  if (/^[-+]?(\d+|Infinity)$/.test(value)) {
    return Number(value);
  } else {
    return NaN;
  }
}

// console.log(result[0]);

//   organizeInstructors([
//     { name: "Samuel", course: "iOS" },
//     { name: "Victoria", course: "Web" },
//     { name: "Karim", course: "Web" },
//     { name: "Donald", course: "Web" },
//   ])
// );

// let newObj = {};

// newObj.iOS = [];

// newObj.iOS.push("Samuel");

// newObj.web = [];

// newObj.web.push("victoria");
// newObj.web.push("karim");

// console.log(newObj);

// var savingsAccount = {
//   balance: 1000,
//   interestRatePercent: 1,
//   deposit: function addMoney(amount) {
//     if (amount > 0) {
//       savingsAccount.balance += amount;
//     }
//   },
//   withdraw: function removeMoney(amount) {
//     var verifyBalance = savingsAccount.balance - amount;
//     if (amount > 0 && verifyBalance >= 0) {
//       savingsAccount.balance -= amount;
//     }
//   },
//   // your code goes here
//   printAccountSummary: function statement() {
//     return (
//       "Welcome!\nYour balance is currently $" +
//       this.balance +
//       " and your interest rate is " +
//       savingsAccount.interestRatePercent +
//       "%."
//     );
//   },
// };

// console.log(savingsAccount.printAccountSummary());
