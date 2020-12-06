function range(start, end, step) {
  if (start === undefined || end === undefined || step === undefined) {
    return [];
  }
  if (start > end) {
    return [];
  }
  if (step <= 0) {
    return [];
  }

  let result = [];

  for (let index = start; index < end + 1; index += step) {
    console.log(index);
    result.push(index);
  }
  return result;
}
