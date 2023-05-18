const Liyaqat2022=[2,19,2,1,26,0,0,12,10,1,20,14,22,33,10,0,0,10,4];
console.log(Liyaqat2022.reduce((a,b)=>a+b));
console.log(Liyaqat2022.length);


const LiyaqatCareerWicketArray = [7,3,5,1, ...LiyaqatWicketArray];
const LiyaqatCareerBallsArray = [...LiyaqatBallsArray,...Liyaqat2022];
const LiyaqatCareerMatchesArray = [ ...LiyaqatScoreArray,...Liyaqat2022];




let LiyaqatMatches = LiyaqatScoreArray.length;
const LiyaqatScoreSum = LiyaqatScoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const LiyaqatWicketSum = LiyaqatWicketArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const LiyaqatAvg = avg(LiyaqatScoreSum, LiyaqatMatches);
const LiyaqatBallsSum = LiyaqatBallsArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const LiyaqatStrike = strike(LiyaqatScoreSum, LiyaqatBallsSum);
const LiyaqatHighest = Math.max(...LiyaqatScoreArray);
document.getElementById('LiyaqatStrike').innerHTML = ` ${LiyaqatStrike}`;
document.getElementById('LiyaqatScore').innerHTML = ` ${LiyaqatScoreSum}`;
document.getElementById('LiyaqatMatches').innerHTML = ` ${LiyaqatMatches}`;
document.getElementById('LiyaqatAvg').innerHTML = ` ${LiyaqatAvg}`;
document.getElementById('LiyaqatWicket').innerHTML = ` ${LiyaqatWicketSum}`;
document.getElementById("LiyaqatBalls").innerHTML = `${LiyaqatBallsSum}`;
document.getElementById('LiyaqatHighest').innerHTML = `${LiyaqatHighest}`;

let lastFour = LiyaqatLastFourArray.slice(-4);
let totalLastFour = lastFour.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById('LiyaqatLastFour').innerHTML = `(${lastFour})=${totalLastFour}`;
function avg(x, y) {
    return (x / y).toFixed(2);
};


function strike(c, v) {
    return ((c / v) * 100).toFixed(2);
}


let date = new Date();
let Year = date.getFullYear();
document.getElementById("year").innerHTML = `${Year}`;




let LiyaqatCareerMatches = document.getElementById('LiyaqatCareerMatches').innerHTML = `${LiyaqatCareerMatchesArray.length}`;

const LiyaqatCareerScoreSum = LiyaqatCareerMatchesArray.reduce((a, c) => a + c);
document.getElementById('LiyaqatCareerScore').innerHTML = `${LiyaqatCareerScoreSum}`;


const LiyaqatCareerBallsSum = LiyaqatCareerBallsArray.reduce((a, c) => a + c);
document.getElementById('LiyaqatCareerBalls').innerHTML = `${LiyaqatCareerBallsSum}`;

const LiyaqatCareerAvg = avg(LiyaqatCareerScoreSum, LiyaqatCareerMatches);
document.getElementById('LiyaqatCareerAvg').innerHTML = `${LiyaqatCareerAvg}`;

const LiyaqatCareerStrike = strike(LiyaqatCareerScoreSum, LiyaqatCareerBallsSum);
document.getElementById('LiyaqatCareerStrike').innerHTML = ` ${LiyaqatCareerStrike}`;

const LiyaqatCareerHighest = Math.max(...LiyaqatCareerMatchesArray);
document.getElementById('LiyaqatCareerHighest').innerHTML = `${LiyaqatCareerHighest}`;


const LiyaqatCareerWicketSum = LiyaqatCareerWicketArray.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById('LiyaqatCareerWicket').innerHTML = ` ${LiyaqatCareerWicketSum}`;

const Liyaqat50s = LiyaqatScoreArray.filter(number => number >= 50 && number < 100).length;
const Liyaqat100s = LiyaqatScoreArray.filter(number => number >= 100).length;

const LiyaqatFifties = `${Liyaqat50s}/${Liyaqat100s}`;
document.getElementById('LiyaqatFifties').innerHTML = LiyaqatFifties;
document.getElementById('LiyaqatFifties').innerHTML = `${LiyaqatFifties}`;

const LiyaqatCareer50s = LiyaqatCareerMatchesArray.filter(number => number >= 50 && number < 100).length;
const LiyaqatCareer100s = LiyaqatCareerMatchesArray.filter(number => number >= 100).length;

const LiyaqatCareerFifties = `${LiyaqatCareer50s}/${LiyaqatCareer100s}`;
document.getElementById('LiyaqatCareerFifties').innerHTML = LiyaqatCareerFifties;











