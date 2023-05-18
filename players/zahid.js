const Zahid2022=[10,12,5];
console.log(Zahid2022.reduce((a,b)=>a+b));
console.log(Zahid2022.length);


const ZahidCareerWicketArray = [ ...ZahidWicketArray];
const ZahidCareerBallsArray = [...ZahidBallsArray,...Zahid2022];
const ZahidCareerMatchesArray = [ ...ZahidScoreArray,...Zahid2022];




let ZahidMatches = ZahidScoreArray.length;
const ZahidScoreSum = ZahidScoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const ZahidWicketSum = ZahidWicketArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const ZahidAvg = avg(ZahidScoreSum, ZahidMatches);
const ZahidBallsSum = ZahidBallsArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const ZahidStrike = strike(ZahidScoreSum, ZahidBallsSum);
const ZahidHighest = Math.max(...ZahidScoreArray);
document.getElementById('ZahidStrike').innerHTML = ` ${ZahidStrike}`;
document.getElementById('ZahidScore').innerHTML = ` ${ZahidScoreSum}`;
document.getElementById('ZahidMatches').innerHTML = ` ${ZahidMatches}`;
document.getElementById('ZahidAvg').innerHTML = ` ${ZahidAvg}`;
document.getElementById('ZahidWicket').innerHTML = ` ${ZahidWicketSum}`;
document.getElementById("ZahidBalls").innerHTML = `${ZahidBallsSum}`;
document.getElementById('ZahidHighest').innerHTML = `${ZahidHighest}`;

let lastFour = ZahidLastFourArray.slice(-4);
let totalLastFour = lastFour.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById('ZahidLastFour').innerHTML = `(${lastFour})=${totalLastFour}`;
function avg(x, y) {
    return (x / y).toFixed(2);
};


function strike(c, v) {
    return ((c / v) * 100).toFixed(2);
}


let date = new Date();
let Year = date.getFullYear();
document.getElementById("year").innerHTML = `${Year}`;




let ZahidCareerMatches = document.getElementById('ZahidCareerMatches').innerHTML = `${ZahidCareerMatchesArray.length}`;

const ZahidCareerScoreSum = ZahidCareerMatchesArray.reduce((a, c) => a + c);
document.getElementById('ZahidCareerScore').innerHTML = `${ZahidCareerScoreSum}`;


const ZahidCareerBallsSum = ZahidCareerBallsArray.reduce((a, c) => a + c);
document.getElementById('ZahidCareerBalls').innerHTML = `${ZahidCareerBallsSum}`;

const ZahidCareerAvg = avg(ZahidCareerScoreSum, ZahidCareerMatches);
document.getElementById('ZahidCareerAvg').innerHTML = `${ZahidCareerAvg}`;

const ZahidCareerStrike = strike(ZahidCareerScoreSum, ZahidCareerBallsSum);
document.getElementById('ZahidCareerStrike').innerHTML = ` ${ZahidCareerStrike}`;

const ZahidCareerHighest = Math.max(...ZahidCareerMatchesArray);
document.getElementById('ZahidCareerHighest').innerHTML = `${ZahidCareerHighest}`;


const ZahidCareerWicketSum = ZahidCareerWicketArray.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById('ZahidCareerWicket').innerHTML = ` ${ZahidCareerWicketSum}`;

const Zahid50s = ZahidScoreArray.filter(number => number >= 50 && number < 100).length;
const Zahid100s = ZahidScoreArray.filter(number => number >= 100).length;

const ZahidFifties = `${Zahid50s}/${Zahid100s}`;
document.getElementById('ZahidFifties').innerHTML = ZahidFifties;
document.getElementById('ZahidFifties').innerHTML = `${ZahidFifties}`;

const ZahidCareer50s = ZahidCareerMatchesArray.filter(number => number >= 50 && number < 100).length;
const ZahidCareer100s = ZahidCareerMatchesArray.filter(number => number >= 100).length;

const ZahidCareerFifties = `${ZahidCareer50s}/${ZahidCareer100s}`;
document.getElementById('ZahidCareerFifties').innerHTML = ZahidCareerFifties;











