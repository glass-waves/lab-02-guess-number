export function compareNumbers(guess, correctAnswer) {
    if (guess < correctAnswer) return -1;
    if (guess === correctAnswer) return 0;
    if (guess > correctAnswer) return 1;
}