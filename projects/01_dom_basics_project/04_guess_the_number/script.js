let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector("#submit");
const userInput = document.querySelector("#guess_feild");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".last_result");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".result");

const p = document.createElement("p");

let prevAttempts = [];
let numOfAttempts = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess) || guess < 1 || guess > 100) {
    alert("Please enter a valid number.");
  } else {
    prevAttempts.push(guess);
    if (numOfAttempts === 10) {
      displayGuess(guess);
      displayMsg(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNumber) {
    displayMsg(`You guessed it right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMsg(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMsg(`Number is too high`);
  }
}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess}, `;
  guessSlot.style.padding = ".2rem";
  numOfAttempts++;
  remaining.innerHTML = `${11 - numOfAttempts}`;
}

function displayMsg(message) {
  lowOrHigh.innerHTML = `${message}`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<button type="submit" class="btn" id="newGame">Start new Game</button>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameBtn = document.querySelector("#newGame");
  newGameBtn.addEventListener("click", (e) => {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevAttempts = [];
    numOfAttempts = 1;
    guessSlot.innerHTML = "";
    remaining.innerHTML = `${11 - numOfAttempts}`;
    userInput.removeAttribute("disabled");
    guessSlot.style.removeProperty("padding");
    startOver.removeChild(p);
    lowOrHigh.innerHTML = "";
    playGame = true;
  });
}
