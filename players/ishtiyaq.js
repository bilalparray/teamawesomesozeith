const Ishtiyaq2022=[83,2,19,2,51,25,13,10,1,30,1,10,14,0,9,52,43,12,28,1,30,49,36,5,24,44,0,7,30,2,];



const IshtiyaqCareerWicketArray = [1,4,5,7,4,6,3,5, ...IshtiyaqWicketArray];
const IshtiyaqCareerBallsArray = [ ...IshtiyaqBallsArray,...Ishtiyaq2022];
const IshtiyaqCareerMatchesArray = [ ...IshtiyaqScoreArray,...Ishtiyaq2022];




let IshtiyaqMatches = IshtiyaqScoreArray.length;
const IshtiyaqScoreSum = IshtiyaqScoreArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const IshtiyaqWicketSum = IshtiyaqWicketArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const IshtiyaqAvg = avg(IshtiyaqScoreSum, IshtiyaqMatches);
const IshtiyaqBallsSum = IshtiyaqBallsArray.reduce((accumulator, currentValue) => accumulator + currentValue);
const IshtiyaqStrike = strike(IshtiyaqScoreSum, IshtiyaqBallsSum);
const IshtiyaqHighest = Math.max(...IshtiyaqScoreArray);
document.getElementById('IshtiyaqStrike').innerHTML = ` ${IshtiyaqStrike}`;
document.getElementById('IshtiyaqScore').innerHTML = ` ${IshtiyaqScoreSum}`;
document.getElementById('IshtiyaqMatches').innerHTML = ` ${IshtiyaqMatches}`;
document.getElementById('IshtiyaqAvg').innerHTML = ` ${IshtiyaqAvg}`;
document.getElementById('IshtiyaqWicket').innerHTML = ` ${IshtiyaqWicketSum}`;
document.getElementById("IshtiyaqBalls").innerHTML = `${IshtiyaqBallsSum}`;
document.getElementById('IshtiyaqHighest').innerHTML = `${IshtiyaqHighest}`;

let lastFour = IshtiyaqLastFourArray.slice(-4);
let totalLastFour = lastFour.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById('IshtiyaqLastFour').innerHTML = `(${lastFour})=${totalLastFour}`;
function avg(x, y) {
    return (x / y).toFixed(2);
};


function strike(c, v) {
    return ((c / v) * 100).toFixed(2);
}


let date = new Date();
let Year = date.getFullYear();
document.getElementById("year").innerHTML = `${Year}`;




let IshtiyaqCareerMatches = document.getElementById('IshtiyaqCareerMatches').innerHTML = `${IshtiyaqCareerMatchesArray.length}`;

const IshtiyaqCareerScoreSum = IshtiyaqCareerMatchesArray.reduce((a, c) => a + c);
document.getElementById('IshtiyaqCareerScore').innerHTML = `${IshtiyaqCareerScoreSum}`;


const IshtiyaqCareerBallsSum = IshtiyaqCareerBallsArray.reduce((a, c) => a + c);
document.getElementById('IshtiyaqCareerBalls').innerHTML = `${IshtiyaqCareerBallsSum}`;

const IshtiyaqCareerAvg = avg(IshtiyaqCareerScoreSum, IshtiyaqCareerMatches);
document.getElementById('IshtiyaqCareerAvg').innerHTML = `${IshtiyaqCareerAvg}`;

const IshtiyaqCareerStrike = strike(IshtiyaqCareerScoreSum, IshtiyaqCareerBallsSum);
document.getElementById('IshtiyaqCareerStrike').innerHTML = ` ${IshtiyaqCareerStrike}`;

const IshtiyaqCareerHighest = Math.max(...IshtiyaqCareerMatchesArray);
document.getElementById('IshtiyaqCareerHighest').innerHTML = `${IshtiyaqCareerHighest}`;


const IshtiyaqCareerWicketSum = IshtiyaqCareerWicketArray.reduce((accumulator, currentValue) => accumulator + currentValue);
document.getElementById('IshtiyaqCareerWicket').innerHTML = ` ${IshtiyaqCareerWicketSum}`;

const Ishtiyaq50s = IshtiyaqScoreArray.filter(number => number >= 50 && number < 100).length;
const Ishtiyaq100s = IshtiyaqScoreArray.filter(number => number >= 100).length;

const IshtiyaqFifties = `${Ishtiyaq50s}/${Ishtiyaq100s}`;
document.getElementById('IshtiyaqFifties').innerHTML = IshtiyaqFifties;
document.getElementById('IshtiyaqFifties').innerHTML = `${IshtiyaqFifties}`;

const IshtiyaqCareer50s = IshtiyaqCareerMatchesArray.filter(number => number >= 50 && number < 100).length;
const IshtiyaqCareer100s = IshtiyaqCareerMatchesArray.filter(number => number >= 100).length;

const IshtiyaqCareerFifties = `${IshtiyaqCareer50s}/${IshtiyaqCareer100s}`;
document.getElementById('IshtiyaqCareerFifties').innerHTML = IshtiyaqCareerFifties;











