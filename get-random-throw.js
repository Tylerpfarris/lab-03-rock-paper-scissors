
export function getRandomThrow() {
    
    const computerThrowNum = Math.ceil(Math.random() * 3);

    if (computerThrowNum === 1) return 'rock';
    if (computerThrowNum === 2) return 'paper';
    if (computerThrowNum === 3) return 'scissors';
}
    

export function didUserWinFunc(player, computer) {
    if (player === 'rock' && computer === 'scissors') return 'win';
    if (player === 'scissors' && computer === 'paper') return 'win';
    if (player === 'paper' && computer === 'rock') return 'win';
    if (player === 'rock' && computer === 'paper') return 'lose';
    if (player === 'scissors' && computer === 'rock') return 'lose';
    if (player === 'paper' && computer === 'scissors') return 'lose';
    if (player === computer) return 'draw';
}  

