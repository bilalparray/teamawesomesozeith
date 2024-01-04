let Array2020 = [51, 52, 34, 56, 78, 73, 22, 10, 2, 0];
const Muzamil2021 = [
  125, 55, 0, 33, 22, 50, 22, 16, 12, 8, 4, 5, 4, 5, 6, 7, 8, 9, 47, 25,
];
const Muzamil2022 = [
  31, 40, 17, 0, 1, 60, 0, 1, 0, 1, 0, 1, 0, 27, 73, 47, 24, 10, 3, 40, 5, 31,
  4, 26, 2, 37, 1, 21, 13, 12,
];

const MuzamilRuns2023 = [
  8, 7, 10, 0, 5, 15, 40, 10, 4, 0, 30, 10, 2, 2, 10, 0, 19, 10, 5, 17, 22, 27,
  14, 18, 0, 10, 9, 2, 6, 12, 17, 14, 36, 36, 16, 2, 5, 10, 20, 0, 10, 10, 12,
  10, 20, 1, 11, 22, 15,
];

const MuzamilCareerWicketArray = [142, ...MuzamilWicketArray];
const MuzamilCareerBallsArray = [
  ...Array2020,
  ...MuzamilBallsArray,
  ...Muzamil2021,
  ...Muzamil2022,
  479,
];
const MuzamilCareerMatchesArray = [
  ...Array2020,
  ...MuzamilScoreArray,
  ...Muzamil2021,
  ...Muzamil2022,
  ...MuzamilRuns2023,
];

let MuzamilMatches = MuzamilScoreArray.length;
const MuzamilScoreSum = MuzamilScoreArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const MuzamilWicketSum = MuzamilWicketArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const MuzamilAvg = avg(MuzamilScoreSum, MuzamilMatches);
const MuzamilBallsSum = MuzamilBallsArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const MuzamilStrike = strike(MuzamilScoreSum, MuzamilBallsSum);
const MuzamilHighest = Math.max(...MuzamilScoreArray);
document.getElementById("MuzamilStrike").innerHTML = ` ${MuzamilStrike}`;
document.getElementById("MuzamilScore").innerHTML = ` ${MuzamilScoreSum}`;
document.getElementById("MuzamilMatches").innerHTML = ` ${MuzamilMatches}`;
document.getElementById("MuzamilAvg").innerHTML = ` ${MuzamilAvg}`;
document.getElementById("MuzamilWicket").innerHTML = ` ${MuzamilWicketSum}`;
document.getElementById("MuzamilBalls").innerHTML = `${MuzamilBallsSum}`;
document.getElementById("MuzamilHighest").innerHTML = `${MuzamilHighest}`;

let lastFour = MuzamilLastFourArray.slice(-4);
let totalLastFour = lastFour.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
document.getElementById(
  "MuzamilLastFour"
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

let MuzamilCareerMatches = (document.getElementById(
  "MuzamilCareerMatches"
).innerHTML = `${MuzamilCareerMatchesArray.length}`);

const MuzamilCareerScoreSum = MuzamilCareerMatchesArray.reduce((a, c) => a + c);
document.getElementById(
  "MuzamilCareerScore"
).innerHTML = `${MuzamilCareerScoreSum}`;

const MuzamilCareerBallsSum = MuzamilCareerBallsArray.reduce((a, c) => a + c);
document.getElementById(
  "MuzamilCareerBalls"
).innerHTML = `${MuzamilCareerBallsSum}`;

const MuzamilCareerAvg = avg(MuzamilCareerScoreSum, MuzamilCareerMatches);
document.getElementById("MuzamilCareerAvg").innerHTML = `${MuzamilCareerAvg}`;

const MuzamilCareerStrike = strike(
  MuzamilCareerScoreSum,
  MuzamilCareerBallsSum
);
document.getElementById(
  "MuzamilCareerStrike"
).innerHTML = ` ${MuzamilCareerStrike}`;

const MuzamilCareerHighest = Math.max(...MuzamilCareerMatchesArray);
document.getElementById(
  "MuzamilCareerHighest"
).innerHTML = `${MuzamilCareerHighest}`;

const MuzamilCareerWicketSum = MuzamilCareerWicketArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
document.getElementById(
  "MuzamilCareerWicket"
).innerHTML = ` ${MuzamilCareerWicketSum}`;

const Muzamil50s = MuzamilScoreArray.filter(
  (number) => number >= 50 && number < 100
).length;
const Muzamil100s = MuzamilScoreArray.filter((number) => number >= 100).length;

const MuzamilFifties = `${Muzamil50s}/${Muzamil100s}`;
document.getElementById("MuzamilFifties").innerHTML = MuzamilFifties;
document.getElementById("MuzamilFifties").innerHTML = `${MuzamilFifties}`;

const MuzamilCareer50s = MuzamilCareerMatchesArray.filter(
  (number) => number >= 50 && number < 100
).length;
const MuzamilCareer100s = MuzamilCareerMatchesArray.filter(
  (number) => number >= 100
).length;

const MuzamilCareerFifties = `${MuzamilCareer50s}/${MuzamilCareer100s}`;
document.getElementById("MuzamilCareerFifties").innerHTML =
  MuzamilCareerFifties;
