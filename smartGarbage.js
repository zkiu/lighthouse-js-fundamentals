const smartGarbage = function (trash, bins) {
  bins[trash]++;
  return bins;
};

console.log(smartGarbage("compost", { waste: 4, recycling: 2, compost: 5 }));
