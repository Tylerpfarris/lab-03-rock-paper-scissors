
import getRandomThrow from './get-random-throw.js';

// ## JS
const throwButton = document.getElementById('throw-button');
const totalSpan = document.getElementById('total');
const winSpan = document.getElementById('wins');
const lossesSpan = document.getElementById('losses');
const drawSpan = document.getElementById('draws');

//     1) grab DOM elements 
let totalGames = 0;
let wins = 0;
let losses = 0;
let draws = 0;

//     2) Initialize some state
//         -wins: 0
//         -total: 0
//         -losses: 0
//         -draws: 0


    


throwButton.addEventListener('click', () => {
    totalSpan.textContent = totalGames++;
   
    getRandomThrow();
    console.log(getRandomThrow());
    
});





//     3) add event listener to button 
//         -on click
//             1) store the computers throw
//                 - coming up with the computers throw randomly 
//                     > getRandomThrow using math.round(math.random) *3
//                     > asign 1/2/3 to r/p/s
//             2) didUserWinFunc
//                 - has two parameters
//                     >  (player, computer)
//                 -returns 'draw', 'win' or 'lose'

