function howManyHundreds(bottles) {
  let leftOver = bottles % 100;

  let container = (bottles - leftOver) / 100;

  return container;
}
