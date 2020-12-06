function lastIndexOf(array, value) {
  for (let index = array.length - 1; index >= 0; index--) {
    const item = array[index];
    // console.log(item);
    if (item === value) {
      return index;
    }
  }
  return -1;
}

console.log(lastIndexOf([0, 1, 4, 1, 2], 1), "=?", 3);
console.log(lastIndexOf([0, 1, 4, 1, 2], 2), "=?", 4);
console.log(lastIndexOf([0, 1, 4, 1, 2], 3), "=?", -1);
console.log(lastIndexOf([5, 5, 5], 5), "=?", 2);
console.log(lastIndexOf([], 3), "=?", -1);
