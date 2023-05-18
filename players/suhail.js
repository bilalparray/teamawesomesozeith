let Array2020 = [40,40,40,50,50,50,50,50,46,30];
const Suhail2021 = [75,75,23,33,22,5,55,11,12,13,24,45,24,35,36,27,8,39,40,6];

const Suhail2022=[10,10,10,17,10,10,10,13,20,20,20,7,15,15,15,9,40,10,10,10,75,25,15,16,25,50,25,25,20,3];
console.log(Suhail2022.reduce((a,b)=>a+b));
console.log(Suhail2021.reduce((a,b)=>a+b));
console.log(Array2020.reduce((a,b)=>a+b));

const SuhailCareerWicketArray = [29,5,4,7,5,9,8,3,7, ...SuhailWicketArray];
const SuhailCareerBallsArray = [...Array2020, ...SuhailBallsArray,...Suhail2021,...Suhail2022];
const SuhailCareerMatchesArray = [...Array2020, ...SuhailScoreArray,...Suhail2021,...Suhail2022];




let SuhailMatches = SuhailScoreArray.length;
const SuhailScoreSum = SuhailScoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const SuhailWicketSum = SuhailWicketArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const SuhailAvg = avg(SuhailScoreSum, SuhailMatches);
const SuhailBallsSum = SuhailBallsArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const SuhailStrike = strike(SuhailScoreSum, SuhailBallsSum);
const SuhailHighest = Math.max(...SuhailScoreArray);
document.getElementById('SuhailStrike').innerHTML = ` ${SuhailStrike}`;
document.getElementById('SuhailScore').innerHTML = ` ${SuhailScoreSum}`;
document.getElementById('SuhailMatches').innerHTML = ` ${SuhailMatches}`;
document.getElementById('SuhailAvg').innerHTML = ` ${SuhailAvg}`;
document.getElementById('SuhailWicket').innerHTML = ` ${SuhailWicketSum}`;
document.getElementById("SuhailBalls").innerHTML = `${SuhailBallsSum}`;
document.getElementById('SuhailHighest').innerHTML = `${SuhailHighest}`;

let lastFour = SuhailLastFourArray.slice(-4);
let totalLastFour = lastFour.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById('SuhailLastFour').innerHTML = `(${lastFour})=${totalLastFour}`;
function avg(x, y) {
    return (x / y).toFixed(2);
};


function strike(c, v) {
    return ((c / v) * 100).toFixed(2);
}


let date = new Date();
let Year = date.getFullYear();
document.getElementById("year").innerHTML = `${Year}`;




let SuhailCareerMatches = document.getElementById('SuhailCareerMatches').innerHTML = `${SuhailCareerMatchesArray.length}`;

const SuhailCareerScoreSum = SuhailCareerMatchesArray.reduce((a, c) => a + c);
document.getElementById('SuhailCareerScore').innerHTML = `${SuhailCareerScoreSum}`;


const SuhailCareerBallsSum = SuhailCareerBallsArray.reduce((a, c) => a + c);
document.getElementById('SuhailCareerBalls').innerHTML = `${SuhailCareerBallsSum}`;

const SuhailCareerAvg = avg(SuhailCareerScoreSum, SuhailCareerMatches);
document.getElementById('SuhailCareerAvg').innerHTML = `${SuhailCareerAvg}`;

const SuhailCareerStrike = strike(SuhailCareerScoreSum, SuhailCareerBallsSum);
document.getElementById('SuhailCareerStrike').innerHTML = ` ${SuhailCareerStrike}`;

const SuhailCareerHighest = Math.max(...SuhailCareerMatchesArray);
document.getElementById('SuhailCareerHighest').innerHTML = `${SuhailCareerHighest}`;


const SuhailCareerWicketSum = SuhailCareerWicketArray.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById('SuhailCareerWicket').innerHTML = ` ${SuhailCareerWicketSum}`;

const Suhail50s = SuhailScoreArray.filter(number => number >= 50 && number < 100).length;
const Suhail100s = SuhailScoreArray.filter(number => number >= 100).length;

const SuhailFifties = `${Suhail50s}/${Suhail100s}`;
document.getElementById('SuhailFifties').innerHTML = SuhailFifties;
document.getElementById('SuhailFifties').innerHTML = `${SuhailFifties}`;

const SuhailCareer50s = SuhailCareerMatchesArray.filter(number => number >= 50 && number < 100).length;
const SuhailCareer100s = SuhailCareerMatchesArray.filter(number => number >= 100).length;

const SuhailCareerFifties = `${SuhailCareer50s}/${SuhailCareer100s}`;
document.getElementById('SuhailCareerFifties').innerHTML = SuhailCareerFifties;











