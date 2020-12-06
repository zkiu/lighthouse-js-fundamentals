const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const metric = "plumpness";

const judgeVegetable = function (vegetables, metric) {
  let winner = "";
  let highestValue = 0;

  vegetables.forEach((element) => {
    if (winner === "") {
      winner = element.submitter;
      highestValue = element[metric];
    } else if (element[metric] > highestValue) {
      winner = element.submitter;
    }
  });

  return winner;
};

console.log(judgeVegetable(vegetables, metric));
