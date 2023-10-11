let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let compScore = 0;

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const results = document.querySelector('.results');
const pScore = document.querySelector('.pScoreNum');
const cScore = document.querySelector('.cScoreNum');
const buttons = document.querySelectorAll('button');

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice()); 
});

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice()); 
});

scissors.addEventListener('click', () => {
    playRound('scissors', getComputerChoice()); 
});

function getComputerChoice() {
    let compChoice = choices[(Math.floor(Math.random() * choices.length))];
    return compChoice;
}


function playRound(playerSelection, computerSelection) {
    let winLose = '';
    if (playerSelection == computerSelection) {
        results.textContent = 'You tied!';
        winLose = '';
    } else {
        if (playerSelection == 'rock') {
            if (computerSelection == 'paper') {
                winLose = 'lose';
            } else {
            winLose = 'win';
            }
        } else if (playerSelection == 'paper') {
            if (computerSelection == 'scissors') {
                winLose = 'lose';
            } else {
            winLose = 'win';
            }
        } else if (playerSelection == 'scissors') {
            if (computerSelection == 'rock') {
                winLose = 'lose';
            } else {
            winLose = 'win';
            }
        } else {
            //return error
        }
    }
    if (playerScore >= 5 || compScore >= 5) {
        if (playerScore > compScore) {
            results.textContent = `Game Over! You win!`;
        } else {
            results.textContent = `Game Over! Computer wins.`;
        };
    } else {
        if (winLose == 'win') {
            playerScore ++;
            results.textContent = `You win! ${playerSelection} beats ${computerSelection}.`;
            pScore.textContent = playerScore;

        } else if (winLose == 'lose') {
            compScore ++;
            results.textContent = `You lose.. ${computerSelection} beats ${playerSelection}.`;
            cScore.textContent = compScore;
        } else {
            //do nothing
        }
    }
}