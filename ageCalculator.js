function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  return name + " is " + age + " years old.";
}

ageCalculator("Suzie", 1983, 2015);

// ("Suzie is 32 years old.");
