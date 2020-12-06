const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35,
  },
];

const speed = 38;

const carPassing = function (cars, speed) {
  let newObj = { time: Date.now(), speed };
  return [...cars, newObj];
};

// const carPassing = function (cars, speed) {
//   let newObj = { time: Date.now(), speed };
//   return { ...cars, newObj };
// };

/*
[
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  },
  {
    time: 1568431216417,
    speed: 38
  }
]
*/
