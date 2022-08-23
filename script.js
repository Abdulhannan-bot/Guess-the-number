'use strict';

// DOM Document object model

let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score = 20;
let highScore = 0;
let end = false;
document.querySelector(`.number`).value = secretNumber;
let displayResult = function(message) {
  return document.querySelector(`message`).textContent = message;
}

document.querySelector(`.check`).addEventListener(`click`,function() {
  
  const guess = Number(document.querySelector(`.guess`).value);
  if(!guess) {
    document.querySelector(`.score`).textContent = score;
    displayResult(`No Number!`);
    // document.querySelector(`.message`).textContent = `No Number!`;
  }
  else if(guess === secretNumber && end === false) {
    document.querySelector(`.number`).textContent = secretNumber;
    document.querySelector(`body`).style.backgroundColor = `green`;
    score++;
    document.querySelector(`.number`).style.width =`30rem`;
    document.querySelector(`.score`).textContent = score;
    document.querySelector(`.message`).textContent = `Number matched!!!`;
    end = true;
    if(score > highScore) {
      highScore = score;
      document.querySelector(`.highscore`).textContent = highScore;
    }
  }
  else if(guess !== secretNumber) {
    if(score>1) {
      score--;
      document.querySelector(`.score`).textContent = score;
      document.querySelector(`.message`).textContent = guess>secretNumber ? `Too high!`: `Too low!`;
    }else {
      document.querySelector(`.message`).textContent = `You lost the game`;
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `green`;
    }  
  }
});

document.querySelector(`.again`).addEventListener(`click`,function() {
  score = 20;
  end = false;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector(`.message`).textContent = `Start guessing...`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
});

 
