// import functions and grab DOM elements
import { compareNumbers } from './utils';

const guessesRemaining = document.getElementById('guesses-remaining');
const answerInput = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const resultBox = document.getElementById('result-box');

// console.log(guessesRemaining);
// console.log(answerInput);
// console.log(submitButton);
// console.log(resultBox);


// initialize state
let guessesCounter = 4;
let correctNumber = Math.ceil(Math.random() * 20);
// console.log(correctNumber);


// set event listeners to update state and DOM
submitButton.addEventListener('click', {


});