let Array2020 = [100,0,0,100,50,50,50,40,40,50,40,27,30];
const Owais2021 = [104,100,39,20,44,55,35,12,8,24,27,4,5,6,7,8,9,50,0];
const Owais2022=[48,40,35,15,51,18,24,50,67,50,11,4,27,0,32,1,47,60,31,30,0,10,1,23,26,28,10,30];


console.log(Owais2022.reduce((a,b)=>a+b));
console.log(Owais2021.reduce((a,b)=>a+b));
console.log(Array2020.reduce((a,b)=>a+b));

const OwaisCareerWicketArray = [39,4,8,7,5,12,4,5, ...OwaisWicketArray];
const OwaisCareerBallsArray = [...Array2020, ...OwaisBallsArray,...Owais2021,...Owais2022];
const OwaisCareerMatchesArray = [...Array2020, ...OwaisScoreArray,...Owais2021,...Owais2022];




let OwaisMatches = OwaisScoreArray.length;
const OwaisScoreSum = OwaisScoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const OwaisWicketSum = OwaisWicketArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const OwaisAvg = avg(OwaisScoreSum, OwaisMatches);
const OwaisBallsSum = OwaisBallsArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const OwaisStrike = strike(OwaisScoreSum, OwaisBallsSum);
const OwaisHighest = Math.max(...OwaisScoreArray);
document.getElementById('OwaisStrike').innerHTML = ` ${OwaisStrike}`;
document.getElementById('OwaisScore').innerHTML = ` ${OwaisScoreSum}`;
document.getElementById('OwaisMatches').innerHTML = ` ${OwaisMatches}`;
document.getElementById('OwaisAvg').innerHTML = ` ${OwaisAvg}`;
document.getElementById('OwaisWicket').innerHTML = ` ${OwaisWicketSum}`;
document.getElementById("OwaisBalls").innerHTML = `${OwaisBallsSum}`;
document.getElementById('OwaisHighest').innerHTML = `${OwaisHighest}`;

let lastFour = OwaisLastFourArray.slice(-4);
let totalLastFour = lastFour.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById('OwaisLastFour').innerHTML = `(${lastFour})=${totalLastFour}`;
function avg(x, y) {
    return (x / y).toFixed(2);
};


function strike(c, v) {
    return ((c / v) * 100).toFixed(2);
}


let date = new Date();
let Year = date.getFullYear();
document.getElementById("year").innerHTML = `${Year}`;




let OwaisCareerMatches = document.getElementById('OwaisCareerMatches').innerHTML = `${OwaisCareerMatchesArray.length}`;

const OwaisCareerScoreSum = OwaisCareerMatchesArray.reduce((a, c) => a + c);
document.getElementById('OwaisCareerScore').innerHTML = `${OwaisCareerScoreSum}`;


const OwaisCareerBallsSum = OwaisCareerBallsArray.reduce((a, c) => a + c);
document.getElementById('OwaisCareerBalls').innerHTML = `${OwaisCareerBallsSum}`;

const OwaisCareerAvg = avg(OwaisCareerScoreSum, OwaisCareerMatches);
document.getElementById('OwaisCareerAvg').innerHTML = `${OwaisCareerAvg}`;

const OwaisCareerStrike = strike(OwaisCareerScoreSum, OwaisCareerBallsSum);
document.getElementById('OwaisCareerStrike').innerHTML = ` ${OwaisCareerStrike}`;

const OwaisCareerHighest = Math.max(...OwaisCareerMatchesArray);
document.getElementById('OwaisCareerHighest').innerHTML = `${OwaisCareerHighest}`;


const OwaisCareerWicketSum = OwaisCareerWicketArray.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById('OwaisCareerWicket').innerHTML = ` ${OwaisCareerWicketSum}`;

const Owais50s = OwaisScoreArray.filter(number => number >= 50 && number < 100).length;
const Owais100s = OwaisScoreArray.filter(number => number >= 100).length;

const OwaisFifties = `${Owais50s}/${Owais100s}`;
document.getElementById('OwaisFifties').innerHTML = OwaisFifties;
document.getElementById('OwaisFifties').innerHTML = `${OwaisFifties}`;

const OwaisCareer50s = OwaisCareerMatchesArray.filter(number => number >= 50 && number < 100).length;
const OwaisCareer100s = OwaisCareerMatchesArray.filter(number => number >= 100).length;

const OwaisCareerFifties = `${OwaisCareer50s}/${OwaisCareer100s}`;
document.getElementById('OwaisCareerFifties').innerHTML = OwaisCareerFifties;











