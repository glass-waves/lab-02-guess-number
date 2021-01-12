// import functions and grab DOM elements
import { compareNumbers } from './utils.js';

const guessesRemaining = document.getElementById('guesses-remaining');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const resultBox = document.getElementById('result-box');
const resetButton = document.getElementById('reset-button');

// console.log(guessesRemaining);
// console.log(answerInput);
// console.log(submitButton);
// console.log(resultBox);


// initialize state
let guessesCounter = 4;
let correctNumber = Math.ceil(Math.random() * 20);
// console.log(correctNumber);


// set event listeners to update state and DOM
submitButton.addEventListener('click', () => {

    //increment and display number of guesses remaining
    guessesCounter--;
    guessesRemaining.textContent = `Guesses Remaining: ${guessesCounter}`;

    //store user input as a number and pass it to compareNumbers function
    const userGuess = answerInput.valueAsNumber;
    const result = compareNumbers(userGuess, correctNumber);

    ;

    //declare result string variable
    let resultString = '';
    // let lostYet = false;

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

resetButton.addEventListener('click', () => {
    resetButton.style.display = 'none';
    guessesCounter = 4;
    correctNumber = Math.ceil(Math.random() * 20);
    answerInput.disabled = false;
    submitButton.disabled = false;
});



function gameEnded() {
    answerInput.disabled = true;
    submitButton.disabled = true;
    resetButton.style.display = 'block';
}