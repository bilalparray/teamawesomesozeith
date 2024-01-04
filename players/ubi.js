let Array2020 = [50, 50, 50, 50, 50, 11, 0, 0, 0, 0, 0, 0, 0];
const Ubi2021 = [4, 6, 23, 39, 22, 44, 40, 0, 10, 0, 0, 40, 31, 23, 34, 50, 50];
const Ubi2022 = [
  48, 40, 35, 15, 31, 118, 24, 34, 70, 47, 50, 11, 36, 27, 0, 32, 10, 47, 40,
  14, 31, 50, 40, 10, 1, 23, 26, 28, 10, 30,
];
const UbiRuns2023 = [
  7, 4, 34, 51, 12, 39, 15, 43, 87, 2, 23, 19, 0, 42, 1, 50, 2, 60, 17, 13, 15,
  0, 18, 19, 7, 9, 2, 10, 24, 29, 26, 2, 54, 11, 19, 7, 29, 100, 24, 17, 0, 30,
  0, 10, 5, 16, 20, 4, 10,
];
const UbiCareerWicketArray = [0, ...UbiWicketArray];
const UbiCareerBallsArray = [
  ...Array2020,
  ...UbiBallsArray,
  ...Ubi2021,
  ...Ubi2022,
  1239,
];
const UbiCareerMatchesArray = [
  ...Array2020,
  ...UbiScoreArray,
  ...Ubi2021,
  ...Ubi2022,
  ...UbiRuns2023,
];

let UbiMatches = UbiScoreArray.length;
const UbiScoreSum = UbiScoreArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const UbiWicketSum = UbiWicketArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const UbiAvg = avg(UbiScoreSum, UbiMatches);
const UbiBallsSum = UbiBallsArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const UbiStrike = strike(UbiScoreSum, UbiBallsSum);
const UbiHighest = Math.max(...UbiScoreArray);
document.getElementById("UbiStrike").innerHTML = ` ${UbiStrike}`;
document.getElementById("UbiScore").innerHTML = ` ${UbiScoreSum}`;
document.getElementById("UbiMatches").innerHTML = ` ${UbiMatches}`;
document.getElementById("UbiAvg").innerHTML = ` ${UbiAvg}`;
document.getElementById("UbiWicket").innerHTML = ` ${UbiWicketSum}`;
document.getElementById("UbiBalls").innerHTML = `${UbiBallsSum}`;
document.getElementById("UbiHighest").innerHTML = `${UbiHighest}`;

let lastFour = UbiLastFourArray.slice(-4);
let totalLastFour = lastFour.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
document.getElementById(
  "UbiLastFour"
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

let UbiCareerMatches = (document.getElementById(
  "UbiCareerMatches"
).innerHTML = `${UbiCareerMatchesArray.length}`);

const UbiCareerScoreSum = UbiCareerMatchesArray.reduce((a, c) => a + c);
document.getElementById("UbiCareerScore").innerHTML = `${UbiCareerScoreSum}`;

const UbiCareerBallsSum = UbiCareerBallsArray.reduce((a, c) => a + c);
document.getElementById("UbiCareerBalls").innerHTML = `${UbiCareerBallsSum}`;

const UbiCareerAvg = avg(UbiCareerScoreSum, UbiCareerMatches);
document.getElementById("UbiCareerAvg").innerHTML = `${UbiCareerAvg}`;

const UbiCareerStrike = strike(UbiCareerScoreSum, UbiCareerBallsSum);
document.getElementById("UbiCareerStrike").innerHTML = ` ${UbiCareerStrike}`;

const UbiCareerHighest = Math.max(...UbiCareerMatchesArray);
document.getElementById("UbiCareerHighest").innerHTML = `${UbiCareerHighest}*`;

const UbiCareerWicketSum = UbiCareerWicketArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
document.getElementById("UbiCareerWicket").innerHTML = ` ${UbiCareerWicketSum}`;

const Ubi50s = UbiScoreArray.filter(
  (number) => number >= 50 && number < 100
).length;
const Ubi100s = UbiScoreArray.filter((number) => number >= 100).length;

const UbiFifties = `${Ubi50s}/${Ubi100s}`;
document.getElementById("UbiFifties").innerHTML = UbiFifties;
document.getElementById("UbiFifties").innerHTML = `${UbiFifties}`;

const UbiCareer50s = UbiCareerMatchesArray.filter(
  (number) => number >= 50 && number < 100
).length;
const UbiCareer100s = UbiCareerMatchesArray.filter(
  (number) => number >= 100
).length;

const UbiCareerFifties = `${UbiCareer50s}/${UbiCareer100s}`;
document.getElementById("UbiCareerFifties").innerHTML = UbiCareerFifties;
