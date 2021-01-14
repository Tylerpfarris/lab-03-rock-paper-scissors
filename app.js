
import { didUserWinFunc, getRandomThrow } from './get-random-throw.js';



const throwButton = document.getElementById('throw-button');
const totalSpan = document.getElementById('total');
const winSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');
const messageToUserDiv = document.getElementById('message-to-user');
const clearButton = document.getElementById('clear-button');
 
let totalGames = 0;
let wins = 0;
let losses = 0;
let draws = 0;

throwButton.addEventListener('click', () => {
    totalSpan.textContent = ++totalGames;
   
    const computersThrow = getRandomThrow();
    const selectedRadioButton = document.querySelector('input[type="radio"]:checked');
    const usersThrow = selectedRadioButton.value;
  
    const result = didUserWinFunc(usersThrow, computersThrow); 
    if (result === 'win') ++wins;
    if (result === 'lose') ++losses;
    if (result === 'draw') ++draws;
    
    
    
    messageToUserDiv.textContent = `The computer threw ${computersThrow}`;
    scoreTally();
});


function scoreTally() {
    
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawSpan.textContent = draws;


}      


clearButton.addEventListener('click', () => {
    totalSpan.textContent = totalGames;
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawSpan.textContent = draws;
    wins = 0;
    losses = 0;
    draws = 0;
    totalGames = 0;
});


/*
 const winString = `Congrats, ${usersThrow} beats ${computersThrow}- YOU WON!`;
    const loseString = 'Why\'d you pick ${usersThrow} !';
    const drawString = `You know what a a computer and you have in common you both picked ${usersThrow}`;
    */