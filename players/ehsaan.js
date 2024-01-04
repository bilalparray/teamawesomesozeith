let Ehsaan2020 = [
  101, 57, 85, 0, 0, 67, 0, 53, 18, 54, 22, 21, 0, 0, 50, 63, 0, 0, 0, 8, 13,
  12, 0,
]; //624
const Ehsaan2021 = [
  24, 20, 114, 53, 22, 54, 55, 36, 12, 8, 24, 45, 4, 5, 114, 24, 14, 9, 30, 30,
  30,
]; //727
const Ehsaan2022 = [
  55, 85, 19, 2, 51, 46, 30, 10, 14, 37, 37, 28, 30, 30, 5, 24,
]; //503
const EhsaanRuns2023 = [
  10, 7, 2, 0, 4, 4, 26, 10, 10, 16, 25, 10, 1, 21, 33, 12, 61, 26, 10, 20, 14,
  0, 0, 0, 0, 16, 10, 0, 7, 38, 4, 29, 87, 25, 13, 4, 11, 14, 16, 15, 6, 10, 15,
  4, 3, 10, 68, 15, 16,
];
const EhsaanCareerWicketArray = [179, ...EhsaanWicketArray];
const EhsaanCareerBallsArray = [
  ...Ehsaan2020,
  ...EhsaanBallsArray,
  ...Ehsaan2021,
  ...Ehsaan2022,
  833,
];
const EhsaanCareerMatchesArray = [
  ...Ehsaan2020,
  ...EhsaanScoreArray,
  ...Ehsaan2021,
  ...Ehsaan2022,
  ...EhsaanRuns2023,
];

// ///////////
let EhsaanMatches = EhsaanScoreArray.length;
const EhsaanScoreSum = EhsaanScoreArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const EhsaanWicketSum = EhsaanWicketArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const EhsaanAvg = avg(EhsaanScoreSum, EhsaanMatches);
const EhsaanBallsSum = EhsaanBallsArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const EhsaanStrike = strike(EhsaanScoreSum, EhsaanBallsSum);
const EhsaanHighest = Math.max(...EhsaanScoreArray);
document.getElementById("EhsaanStrike").innerHTML = ` ${EhsaanStrike}`;
document.getElementById("EhsaanScore").innerHTML = ` ${EhsaanScoreSum}`;
document.getElementById("EhsaanMatches").innerHTML = ` ${EhsaanMatches}`;
document.getElementById("EhsaanAvg").innerHTML = ` ${EhsaanAvg}`;
document.getElementById("EhsaanWicket").innerHTML = ` ${EhsaanWicketSum}`;
document.getElementById("EhsaanBalls").innerHTML = `${EhsaanBallsSum}`;
document.getElementById("EhsaanHighest").innerHTML = `${EhsaanHighest}`;

let lastFour = EhsaanLastFourArray.slice(-4);
let totalLastFour = lastFour.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
document.getElementById(
  "EhsaanLastFour"
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

let EhsaanCareerMatches = (document.getElementById(
  "EhsaanCareerMatches"
).innerHTML = `${EhsaanCareerMatchesArray.length}`);

const EhsaanCareerScoreSum = EhsaanCareerMatchesArray.reduce((a, c) => a + c);
document.getElementById(
  "EhsaanCareerScore"
).innerHTML = `${EhsaanCareerScoreSum}`;

const EhsaanCareerBallsSum = EhsaanCareerBallsArray.reduce((a, c) => a + c);
document.getElementById(
  "EhsaanCareerBalls"
).innerHTML = `${EhsaanCareerBallsSum}`;

const EhsaanCareerAvg = avg(EhsaanCareerScoreSum, EhsaanCareerMatches);
document.getElementById("EhsaanCareerAvg").innerHTML = `${EhsaanCareerAvg}`;

const EhsaanCareerStrike = strike(EhsaanCareerScoreSum, EhsaanCareerBallsSum);
document.getElementById(
  "EhsaanCareerStrike"
).innerHTML = ` ${EhsaanCareerStrike}`;

const EhsaanCareerHighest = Math.max(...EhsaanCareerMatchesArray);
document.getElementById(
  "EhsaanCareerHighest"
).innerHTML = `${EhsaanCareerHighest}`;

const EhsaanCareerWicketSum = EhsaanCareerWicketArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
document.getElementById(
  "EhsaanCareerWicket"
).innerHTML = ` ${EhsaanCareerWicketSum}`;

const Ehsaan50s = EhsaanScoreArray.filter(
  (number) => number >= 50 && number < 100
).length;
const Ehsaan100s = EhsaanScoreArray.filter((number) => number >= 100).length;

const EhsaanFifties = `${Ehsaan50s}/${Ehsaan100s}`;
document.getElementById("EhsaanFifties").innerHTML = EhsaanFifties;
document.getElementById("EhsaanFifties").innerHTML = `${EhsaanFifties}`;

const EhsaanCareer50s = EhsaanCareerMatchesArray.filter(
  (number) => number >= 50 && number < 100
).length;
const EhsaanCareer100s = EhsaanCareerMatchesArray.filter(
  (number) => number >= 100
).length;

const EhsaanCareerFifties = `${EhsaanCareer50s}/${EhsaanCareer100s}`;
document.getElementById("EhsaanCareerFifties").innerHTML = EhsaanCareerFifties;
