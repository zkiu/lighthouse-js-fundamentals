var laugh = (laughCount) => {
  laughCount--;
  if (laughCount > 0) {
    return "ha" + laugh(laughCount);
  }
  return "ha!";
};

console.log(laugh(10));
