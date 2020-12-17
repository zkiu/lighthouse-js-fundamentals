// -- fibonacci sequence
// function fib(n, memo = {}) {
// -- recursive way
// if (n === 1 || n === 2) {
//   return 1;
// } else {
//   return fib(n - 1) + fib(n - 2);
// }
// -- non recursive way
// let nSmall = 1;
// let nSmaller = 1;
// let temp = 0;
// for (let i = 3; i < n + 1; i++) {
//   temp = nSmall + nSmaller;
//   nSmaller = nSmall;
//   nSmall = temp;
// }
// return temp;

// -- recursive witht memoization
// if (n in memo) return memo[n];
// if (n <= 2) return 1;
// memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
// return memo[n];
// }
// console.log(fib(50));

/*******************************************************************/
/*******************************************************************/

//   // --my way without help(except for the memoization) - process is very slow when m and n are high numbers
// function gridTraveler(m, n, memo = [0]) {
//   if (m === 1 && n === 1) {
//     memo[0] += 1;
//     return;
//   }
//   if (m > 1) {
//     gridTraveler(m - 1, n, memo);
//   }
//   if (n > 1) {
//     gridTraveler(m, n - 1, memo);
//   }
//   return memo[0];
// }

// -- better way with memozation of past answers
function gridTraveler(m, n, memo = {}) {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  let index1 = m + "," + n;
  let index2 = n + "," + m;

  if (index1 in memo) return memo[index1];
  if (index2 in memo) return memo[index2];

  // -- each time the recursion is complete, the result is recorded into the referenced object (which is the initial memo = {})
  memo[index1] = memo[index2] =
    gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[index1];
}

console.log(gridTraveler(18, 18));
