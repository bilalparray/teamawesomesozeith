let Array2020 = [
  56, 57, 85, 0, 0, 67, 0, 53, 18, 54, 22, 0, 0, 0, 50, 63, 8, 13, 12, 0,
]; //558
const Bilal2021 = [119, 20, 3, 13, 45, 67, 21, 32, 43, 56]; //419
const Bilal2022 = [
  18, 85, 38, 47, 48, 14, 5, 13, 14, 10, 33, 24, 0, 13, 3, 30, 60, 24, 19, 0,
  23, 82, 35, 0, 36, 1, 0, 29, 24, 10,
]; //738
const BilalRuns2023 = [
  24, 29, 10, 51, 0, 37, 7, 42, 52, 44, 45, 19, 20, 0, 66, 31, 21, 26, 4, 35,
  39, 30, 80, 0, 4, 8, 0, 10, 2, 6, 25, 7, 10, 0, 80, 5, 34, 43, 33, 0, 28, 10,
  23, 53, 27, 27, 7, 18, 37,
]; //1209

const BilalCareerWicketArray = [3, 1, 2, 4, 5, 6, ...BilalWicketArray];
const BilalCareerBallsArray = [
  ...Array2020,
  ...BilalBallsArray,
  ...Bilal2021,
  ...Bilal2022,
  1342,
];
const BilalCareerMatchesArray = [
  ...Array2020,
  ...BilalScoreArray,
  ...Bilal2021,
  ...Bilal2022,
  ...BilalRuns2023,
];

let BilalMatches = BilalScoreArray.length;
const BilalScoreSum = BilalScoreArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

const BilalWicketSum = BilalWicketArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const BilalAvg = avg(BilalScoreSum, BilalMatches);
const BilalBallsSum = BilalBallsArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const BilalStrike = strike(BilalScoreSum, BilalBallsSum);
const BilalHighest = Math.max(...BilalScoreArray);
document.getElementById("BilalStrike").innerHTML = ` ${BilalStrike}`;
document.getElementById("BilalScore").innerHTML = ` ${BilalScoreSum} `;
document.getElementById("BilalMatches").innerHTML = ` ${BilalMatches}`;
document.getElementById("BilalAvg").innerHTML = ` ${BilalAvg}`;
document.getElementById("BilalWicket").innerHTML = ` ${BilalWicketSum}`;
document.getElementById("BilalBalls").innerHTML = `${BilalBallsSum}`;
document.getElementById("BilalHighest").innerHTML = `${BilalHighest}`;

let lastFour = BilalLastFourArray.slice(-4);
let totalLastFour = lastFour.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
document.getElementById(
  "BilalLastFour"
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

// career
const BilalCareerMatches = (document.getElementById(
  "BilalCareerMatches"
).innerHTML = `${BilalCareerMatchesArray.length}`);

const BilalCareerScoreSum = BilalCareerMatchesArray.reduce((a, c) => a + c);
document.getElementById(
  "BilalCareerScore"
).innerHTML = `${BilalCareerScoreSum}`;

const BilalCareerBallsSum = BilalCareerBallsArray.reduce((a, c) => a + c);
document.getElementById(
  "BilalCareerBalls"
).innerHTML = `${BilalCareerBallsSum}`;

const BilalCareerAvg = avg(BilalCareerScoreSum, BilalCareerMatches);
document.getElementById("BilalCareerAvg").innerHTML = `${BilalCareerAvg}`;

const BilalCareerStrike = strike(BilalCareerScoreSum, BilalCareerBallsSum);
document.getElementById(
  "BilalCareerStrike"
).innerHTML = ` ${BilalCareerStrike}`;

const BilalCareerHighest = Math.max(...BilalCareerMatchesArray);
document.getElementById(
  "BilalCareerHighest"
).innerHTML = `${BilalCareerHighest}*`;

const BilalCareerWicketSum = BilalCareerWicketArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
document.getElementById(
  "BilalCareerWicket"
).innerHTML = ` ${BilalCareerWicketSum}`;

const Bilal50s = BilalScoreArray.filter(
  (number) => number >= 50 && number < 100
).length;
const Bilal100s = BilalScoreArray.filter((number) => number >= 100).length;

const BilalFifties = `${Bilal50s}/${Bilal100s}`;
document.getElementById("BilalFifties").innerHTML = BilalFifties;
document.getElementById("BilalFifties").innerHTML = `${BilalFifties}`;

const BilalCareer50s = BilalCareerMatchesArray.filter(
  (number) => number >= 50 && number < 100
).length;
const BilalCareer100s = BilalCareerMatchesArray.filter(
  (number) => number >= 100
).length;

const BilalCareerFifties = `${BilalCareer50s}/${BilalCareer100s}`;
document.getElementById("BilalCareerFifties").innerHTML = BilalCareerFifties;
