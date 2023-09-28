
import { didUserWinFunc, getRandomThrow } from './get-random-throw.js';



const throwButton = document.getElementById('throw-button');
const totalSpan = document.getElementById('total');
const winSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');
const messageToUserDiv = document.getElementById('message-to-user');
const clearButton = document.getElementById('clear-button');
const resultsString = document.getElementById('results-string');
 
let totalGames = 0;
let wins = 0;
let losses = 0;
let draws = 0;

throwButton.addEventListener('click', () => {
    totalSpan.textContent = ++totalGames;
   
    const computersThrow = getRandomThrow();
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const usersThrow = selectedRadioButton.value;

    const winString = `Congrats, ${usersThrow} beats ${computersThrow}- YOU WON!`;
    const loseString = `Why\'d you pick ${usersThrow} !`;
    const drawString = `You know what a computer and you have in common you both picked ${usersThrow}`;

    const result = didUserWinFunc(usersThrow, computersThrow); 
    if (result === 'win') {
        resultsString.textContent = winString;
        ++wins;
    }
    else if (result === 'lose') {
        resultsString.textContent = loseString;
        ++losses;
    }
    else if (result === 'draw') {
        resultsString.textContent = drawString;
        ++draws;
    }
    
    messageToUserDiv.textContent = `The computer threw ${computersThrow}`;
    scoreTally();
});


function scoreTally() {
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawSpan.textContent = draws;
}      


clearButton.addEventListener('click', () => {
    wins = 0;
    losses = 0;
    draws = 0;
    totalGames = 0;
    totalSpan.textContent = totalGames;
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawSpan.textContent = draws;
});