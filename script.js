'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const dipslayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

const changeBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When there is no input
  if (!guess) {
    dipslayMessage('No Number!!');

    //When Player Wins
  } else if (guess === secretNumber) {
    dipslayMessage('Correct Number!🙌');
    changeBackgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      dipslayMessage(
        guess > secretNumber
          ? '📈 Number is too high!'
          : ' 📉 Number is too low!'
      );
      score--;
      displayScore(score);
    } else {
      dipslayMessage('You lost the game 😓');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore(score);
  dipslayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  changeBackgroundColor('#4b6587');
  document.querySelector('.number').style.width = '15rem';
});
