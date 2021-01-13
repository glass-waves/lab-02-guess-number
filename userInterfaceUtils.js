
const guessesRemaining = document.getElementById('guesses-remaining');
const resultBox = document.getElementById('result-box');
// const resetButton = document.getElementById('reset-button');

export function decrementAndDisplay(variableToDecrement) {
    variableToDecrement--;
    guessesRemaining.textContent = `Guesses Remaining: ${variableToDecrement}`;
    return variableToDecrement;
}
export function tooLow() {
    resultBox.textContent = 'Your guess is too low!';
}
export function tooHigh() {
    resultBox.textContent = 'Your guess is too high!';
}
export function youWon() {
    resultBox.textContent = 'You guessed the correct number. You won!';
}
export function youLost() {
    resultBox.textContent = 'Sorry you have run out of guesses, you lose!';
}



// Attempt at refactoring Game Ended function

// export function gameEnded(element1, element2) {
//     element1.classList.add('disable');
//     element2.classList.add('disable');
//     resetButton.style.display = 'inline';
// }

// export function resetClickHandler(element1, element2, counter, correctNumber) {
//     //hide play again button
//     resetButton.style.display = 'none';
//     //reset guess counter to 4
//     decrementAndDisplay(counter);
//     //reseed random number 
//     correctNumber = Math.ceil(Math.random() * 20);
//     //re-enable input and submit button, display guesses remaining
//     element1.disabled = false;
//     element2.disabled = false;
    
// }
