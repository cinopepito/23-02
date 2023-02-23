function guessNumber() {
  let randomNumber = Math.floor(Math.random() * 11);
  let guess;
  do {
    guess = prompt("guess the correct number between 1 and 10");
    console.log(guess, randomNumber);
    if (guess < randomNumber) {
      console.log("higher !");
    } else if (guess > randomNumber) {
      console.log("lower please !");
    }
  } while (guess != randomNumber);
}
guessNumber();
