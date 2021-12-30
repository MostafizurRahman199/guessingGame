'use strict';

let secretNumber = Math.trunc(Math.random() * 21);

let score = 10;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 21);
  document.querySelector('.number').textContent = '?';
  score = 10;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  displayMessage('Start guessing');
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  //document.querySelector('.guess').value = '';

  console.log(guess);

  if (!guess) {
    displayMessage('🐸 No Number!');
  } else if (guess == secretNumber) {
    displayMessage('😺 Correct Number!');

    document.querySelector('body').style.backgroundColor = '#2fcc24';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber ? 'Try lower Number⬇️' : 'Try higher Number⬆️'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the Game');
      score--;

      document.querySelector('body').style.backgroundColor = '#ff0000';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;

      if (score < 0) {
        document.querySelector('.score').textContent = 'Try again';
      } else {
        document.querySelector('.score').textContent = score;
      }
    }
  }
});
