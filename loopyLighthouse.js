for (let index = 100; index < 201; index++) {
  if (index % 3 === 0 && index % 4 === 0) {
    console.log("LoopyLighthouse");
    continue;
  }
  if (index % 3 === 0) {
    console.log("Loopy");
    continue;
  }
  if (index % 4 === 0) {
    console.log("Lighthouse");
    continue;
  }
  console.log(index);
}
