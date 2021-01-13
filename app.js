// import functions and grab DOM elements
import { compareNumbers } from './utils.js';
import { 
    decrementAndDisplay,
    tooLow,
    tooHigh,
    youWon,
    youLost} from './userInterfaceUtils.js';

const guessesRemaining = document.getElementById('guesses-remaining');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const resetButton = document.getElementById('reset-button');


// initialize state
let guessesCounter = 4;
let correctNumber = Math.ceil(Math.random() * 20);


//submit button event listener
submitButton.addEventListener('click', () => {

    //increment and display number of guesses remaining
    guessesCounter = decrementAndDisplay(guessesCounter);

    //store user input as a number and pass it to compareNumbers function
    const userGuess = answerInput.valueAsNumber;
    const result = compareNumbers(userGuess, correctNumber);


    //sort result and display correct response
    switch (result){
        case -1:
            if (guessesCounter < 1){
                youLost();
                gameEnded();
            } else {
                tooLow();
            }
            break;
        case 0:
            youWon();
            gameEnded();
            break;
        case 1:
            if (guessesCounter < 1){
                youLost();
                gameEnded();
            } else {
                tooHigh();
            }
            break;
    }
});

// reset button event listener
resetButton.addEventListener('click', () => {
    //hide play again button
    resetButton.style.display = 'none';
    //reset guess counter to 4
    guessesCounter = 4;
    //reseed random number 
    correctNumber = Math.ceil(Math.random() * 20);
    //re-enable input and submit button, display guesses remaining
    answerInput.disabled = false;
    submitButton.disabled = false;
    guessesRemaining.textContent = `Guesses Remaining: ${guessesCounter}`;
});


function gameEnded() {
    answerInput.disabled = true;
    submitButton.disabled = true;
    resetButton.style.display = 'inline';
}