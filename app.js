
import { didUserWinFunc, getRandomThrow } from './get-random-throw.js';



const throwButton = document.getElementById('throw-button');
const totalSpan = document.getElementById('total');
const winSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');
const messageToUserDiv = document.getElementById('message-to-user');

 
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
    if (result === 'win') wins++;
    if (result === 'lose') losses++;
    if (result === 'draw') draws++;
    
    scoreTally();
});


function scoreTally() {
    
    winSpan.textContent = wins;
    lossesSpan.textContent = losses;
    drawSpan.textContent = draws;

}

//function resultMessageFunc ()
       


