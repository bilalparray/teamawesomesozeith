let Array2020 = [50, 50, 50, 50, 50, 31, 0, 0, 0, 0];
const Sahil2021 = [
  4, 6, 23, 39, 22, 44, 40, 0, 10, 8, 0, 0, 4, 5, 0, 7, 8, 15, 50, 49,
];
const Sahil2022 = [
  51, 40, 17, 0, 27, 17, 87, 24, 10, 1, 20, 17, 5, 1, 18, 16, 2, 10, 19, 0, 10,
  9, 21, 13, 0, 0, 2, 34, 29, 56,
];
const SahilRuns2023 = [
  0, 34, 29, 0, 7, 4, 23, 11, 10, 0, 1, 8, 7, 1, 1, 6, 4, 40, 13, 10, 19, 17, 7,
  27, 0, 6, 0, 5, 10, 4, 1, 10, 14, 7, 0, 1, 10, 10, 10, 0, 10, 0, 8, 12, 10,
  25, 16, 1,
];
const SahilCareerWicketArray = [17, ...SahilWicketArray];
const SahilCareerBallsArray = [
  ...Array2020,
  ...SahilBallsArray,
  ...Sahil2021,
  ...Sahil2022,
  310,
];
const SahilCareerMatchesArray = [
  ...Array2020,
  ...SahilScoreArray,
  ...Sahil2021,
  ...Sahil2022,
  ...SahilRuns2023,
];

let SahilMatches = SahilScoreArray.length;
const SahilScoreSum = SahilScoreArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const SahilWicketSum = SahilWicketArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const SahilAvg = avg(SahilScoreSum, SahilMatches);
const SahilBallsSum = SahilBallsArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const SahilStrike = strike(SahilScoreSum, SahilBallsSum);
const SahilHighest = Math.max(...SahilScoreArray);
document.getElementById("SahilStrike").innerHTML = ` ${SahilStrike}`;
document.getElementById("SahilScore").innerHTML = ` ${SahilScoreSum}`;
document.getElementById("SahilMatches").innerHTML = ` ${SahilMatches}`;
document.getElementById("SahilAvg").innerHTML = ` ${SahilAvg}`;
document.getElementById("SahilWicket").innerHTML = ` ${SahilWicketSum}`;
document.getElementById("SahilBalls").innerHTML = `${SahilBallsSum}`;
document.getElementById("SahilHighest").innerHTML = `${SahilHighest}`;

let lastFour = SahilLastFourArray.slice(-4);
let totalLastFour = lastFour.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
document.getElementById(
  "SahilLastFour"
).innerHTML = `(${lastFour})=${totalLastFour}`;
function avg(x, y) {
  return (x / y).toFixed(2);
}

function strike(c, v) {
  return ((c / v) * 100).toFixed(2);
}

let date = new Date();
let Year = date.getFullYear();
document.getElementById("year").innerHTML = `${Year}`;

let SahilCareerMatches = (document.getElementById(
  "SahilCareerMatches"
).innerHTML = `${SahilCareerMatchesArray.length}`);

const SahilCareerScoreSum = SahilCareerMatchesArray.reduce((a, c) => a + c);
document.getElementById(
  "SahilCareerScore"
).innerHTML = `${SahilCareerScoreSum}`;

const SahilCareerBallsSum = SahilCareerBallsArray.reduce((a, c) => a + c);
document.getElementById(
  "SahilCareerBalls"
).innerHTML = `${SahilCareerBallsSum}`;

const SahilCareerAvg = avg(SahilCareerScoreSum, SahilCareerMatches);
document.getElementById("SahilCareerAvg").innerHTML = `${SahilCareerAvg}`;

const SahilCareerStrike = strike(SahilCareerScoreSum, SahilCareerBallsSum);
document.getElementById(
  "SahilCareerStrike"
).innerHTML = ` ${SahilCareerStrike}`;

const SahilCareerHighest = Math.max(...SahilCareerMatchesArray);
document.getElementById(
  "SahilCareerHighest"
).innerHTML = `${SahilCareerHighest}`;

const SahilCareerWicketSum = SahilCareerWicketArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
document.getElementById(
  "SahilCareerWicket"
).innerHTML = ` ${SahilCareerWicketSum}`;

const Sahil50s = SahilScoreArray.filter(
  (number) => number >= 50 && number < 100
).length;
const Sahil100s = SahilScoreArray.filter((number) => number >= 100).length;

const SahilFifties = `${Sahil50s}/${Sahil100s}`;
document.getElementById("SahilFifties").innerHTML = SahilFifties;
document.getElementById("SahilFifties").innerHTML = `${SahilFifties}`;

const SahilCareer50s = SahilCareerMatchesArray.filter(
  (number) => number >= 50 && number < 100
).length;
const SahilCareer100s = SahilCareerMatchesArray.filter(
  (number) => number >= 100
).length;

const SahilCareerFifties = `${SahilCareer50s}/${SahilCareer100s}`;
document.getElementById("SahilCareerFifties").innerHTML = SahilCareerFifties;
