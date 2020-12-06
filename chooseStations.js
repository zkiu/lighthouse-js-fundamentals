function chooseStations(stations) {
  // -- Array of stations, where each station is anarray with a name, a capacity, and a venue type.
  // -- capacity of at least 20, and be a school or community centre

  let resultArray = stations.filter((station) => {
    return (
      station[1] >= 20 &&
      (station[2] === "school" || station[2] === "community centre")
    );
  });

  let stationName = resultArray.map((station) => {
    return station[0];
  });
  console.log(stationName);

  return stationName;
}

const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

chooseStations(stations);
