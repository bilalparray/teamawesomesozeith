let Array2020 = [57, 50, 30, 0, 0, 0, 0, 0];
const Showket2021 = [
  0, 0, 23, 0, 22, 33, 0, 0, 10, 8, 0, 0, 5, 0, 8, 9, 0, 0, 50, 50, 50, 50,
];

const Showket2022 = [
  31, 40, 17, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 27, 17, 47, 24, 10, 3, 20, 5, 1, 4,
  6, 2, 7, 1, 1, 3, 12,
];
const ShowketRuns2023 = [
  4, 6, 3, 4, 11, 10, 1, 7, 0, 12, 39, 16, 21, 13, 0, 20, 1, 10, 0, 0, 1, 14,
  26, 11, 0, 21, 0, 4, 10, 6, 1, 2, 10, 10, 22, 4, 20, 0, 14, 0, 10, 10, 2, 10,
  34, 20, 1, 11, 17,
];
const ShowketCareerWicketArray = [11, ...ShowketWicketArray];
const ShowketCareerBallsArray = [
  ...Array2020,
  ...ShowketBallsArray,
  ...Showket2021,
  ...Showket2022,
  269,
];
const ShowketCareerMatchesArray = [
  ...Array2020,
  ...ShowketScoreArray,
  ...Showket2021,
  ...Showket2022,
  ...ShowketRuns2023,
];

let ShowketMatches = ShowketScoreArray.length;
const ShowketScoreSum = ShowketScoreArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const ShowketWicketSum = ShowketWicketArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const ShowketAvg = avg(ShowketScoreSum, ShowketMatches);
const ShowketBallsSum = ShowketBallsArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
const ShowketStrike = strike(ShowketScoreSum, ShowketBallsSum);
const ShowketHighest = Math.max(...ShowketScoreArray);
document.getElementById("ShowketStrike").innerHTML = ` ${ShowketStrike}`;
document.getElementById("ShowketScore").innerHTML = ` ${ShowketScoreSum}`;
document.getElementById("ShowketMatches").innerHTML = ` ${ShowketMatches}`;
document.getElementById("ShowketAvg").innerHTML = ` ${ShowketAvg}`;
document.getElementById("ShowketWicket").innerHTML = ` ${ShowketWicketSum}`;
document.getElementById("ShowketBalls").innerHTML = `${ShowketBallsSum}`;
document.getElementById("ShowketHighest").innerHTML = `${ShowketHighest}`;

let lastFour = ShowketLastFourArray.slice(-4);
let totalLastFour = lastFour.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
document.getElementById(
  "ShowketLastFour"
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

let ShowketCareerMatches = (document.getElementById(
  "ShowketCareerMatches"
).innerHTML = `${ShowketCareerMatchesArray.length}`);

const ShowketCareerScoreSum = ShowketCareerMatchesArray.reduce((a, c) => a + c);
document.getElementById(
  "ShowketCareerScore"
).innerHTML = `${ShowketCareerScoreSum}`;

const ShowketCareerBallsSum = ShowketCareerBallsArray.reduce((a, c) => a + c);
document.getElementById(
  "ShowketCareerBalls"
).innerHTML = `${ShowketCareerBallsSum}`;

const ShowketCareerAvg = avg(ShowketCareerScoreSum, ShowketCareerMatches);
document.getElementById("ShowketCareerAvg").innerHTML = `${ShowketCareerAvg}`;

const ShowketCareerStrike = strike(
  ShowketCareerScoreSum,
  ShowketCareerBallsSum
);
document.getElementById(
  "ShowketCareerStrike"
).innerHTML = ` ${ShowketCareerStrike}`;

const ShowketCareerHighest = Math.max(...ShowketCareerMatchesArray);
document.getElementById(
  "ShowketCareerHighest"
).innerHTML = `${ShowketCareerHighest}`;

const ShowketCareerWicketSum = ShowketCareerWicketArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);
document.getElementById(
  "ShowketCareerWicket"
).innerHTML = ` ${ShowketCareerWicketSum}`;

const Showket50s = ShowketScoreArray.filter(
  (number) => number >= 50 && number < 100
).length;
const Showket100s = ShowketScoreArray.filter((number) => number >= 100).length;

const ShowketFifties = `${Showket50s}/${Showket100s}`;
document.getElementById("ShowketFifties").innerHTML = ShowketFifties;
document.getElementById("ShowketFifties").innerHTML = `${ShowketFifties}`;

const ShowketCareer50s = ShowketCareerMatchesArray.filter(
  (number) => number >= 50 && number < 100
).length;
const ShowketCareer100s = ShowketCareerMatchesArray.filter(
  (number) => number >= 100
).length;

const ShowketCareerFifties = `${ShowketCareer50s}/${ShowketCareer100s}`;
document.getElementById("ShowketCareerFifties").innerHTML =
  ShowketCareerFifties;
