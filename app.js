// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const guessesRemaining = document.getElementById('guesses-remaining');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const resultBox = document.getElementById('result-box');
const resetButton = document.getElementById('reset-button');


// initialize state
let guessesCounter = 4;
let correctNumber = Math.ceil(Math.random() * 20);

// set event listeners to update state and DOM

//submit button event listener
submitButton.addEventListener('click', () => {

    //increment and display number of guesses remaining
    guessesCounter--;
    guessesRemaining.textContent = `Guesses Remaining: ${guessesCounter}`;

    //store user input as a number and pass it to compareNumbers function
    const userGuess = answerInput.valueAsNumber;
    const result = compareNumbers(userGuess, correctNumber);

    //declare result string variable
    let resultString;
    // let lostYet = false;

    //sort result and set string variable to correct response 
    switch (result){
        case -1:
            if (guessesCounter < 1){
                resultString = 'Sorry you have run out of guesses, you lose!';
                gameEnded();
            } else {
                resultString = 'Your guess is too low!';
            }
            break;
        case 0:
            resultString = 'You guessed the correct number. You won!';
            gameEnded();
            break;
        case 1:
            if (guessesCounter < 1){
                resultString = 'Sorry you have run out of guesses, you lose!';
                gameEnded();
            } else {
                resultString = 'Your guess is too high!';
            }
            break;
    }
    resultBox.textContent = resultString;

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
    resetButton.style.display = 'block';
}