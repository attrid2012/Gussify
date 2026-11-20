// GUSSIFY GAME ENGINE

const categoryGrid = document.getElementById("categoryGrid");

let selectedCategory = 0;
let candidates = [];
let asked = [];
let currentQuestion = null;
let questionNumber = 0;
let guessList = [];
let guessIndex = 0;

let gameFinished = false;

// PARTICLES

const particleBox = document.getElementById("particles");

for (let i = 0; i < 45; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "%";
  p.style.top = Math.random() * 100 + "%";
  p.style.animationDelay = Math.random() * 7 + "s";
  particleBox.appendChild(p);
}

// NAVIGATION

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen => {
    screen.classList.remove("active");
  });

  document.getElementById(id).classList.add("active");

  window.scrollTo({ top: 0, behavior: "smooth" });
}

// CATEGORY DISPLAY

categories.forEach((category, index) => {

  const button = document.createElement("button");
  button.className = "category";

  button.innerHTML = `
    <span class="icon">${category.icon}</span>
    <strong>${category.name}</strong>
    <small>${category.desc}</small>
  `;

  button.addEventListener("click", () => startGame(index));

  categoryGrid.appendChild(button);

});

// START GAME

function startGame(category) {

  selectedCategory = category;

  candidates = database[category].map(character => ({
    ...character,
    score: 0
  }));

  asked = [];
  questionNumber = 0;
  guessList = [];
  guessIndex = 0;
  gameFinished = false;

  document.getElementById("categoryBadge").textContent =
    categories[category].name.toUpperCase();

  document.querySelector(".result-actions").innerHTML = `
    <button class="gold-button" onclick="correctGuess()">
      ✦ YES, YOU GOT IT!
    </button>

    <button class="outline-button" onclick="wrongGuess()">
      NO, TRY AGAIN
    </button>
  `;

  showScreen("game");
  nextQuestion();
}

// SELECT NEXT QUESTION

function nextQuestion() {

  if (candidates.length === 0) {
    showScreen("end");
    return;
  }

  if (questionNumber >= 12 || candidates.length === 1) {
    prepareGuess();
    return;
  }

  let bestQuestion = null;
  let bestBalance = Infinity;

  for (const q of questions) {

    if (asked.includes(q[1])) continue;

    const yesCount = candidates.filter(c =>
      c.traits[q[1]] === true
    ).length;

    const noCount = candidates.length - yesCount;

    if (yesCount === 0 || noCount === 0) continue;

    const balance = Math.abs(yesCount - noCount);

    if (balance < bestBalance) {
      bestBalance = balance;
      bestQuestion = q;
    }
  }

  if (!bestQuestion) {
    prepareGuess();
    return;
  }

  currentQuestion = {
    text: bestQuestion[0],
    key: bestQuestion[1]
  };

  asked.push(bestQuestion[1]);

  document.getElementById("questionText").textContent =
    bestQuestion[0];

  document.getElementById("questionCount").textContent =
    "QUESTION " + (questionNumber + 1);

  document.getElementById("progressFill").style.width =
    ((questionNumber + 1) / 12 * 100) + "%";
}

// PROCESS ANSWERS

function answerQuestion(answer) {

  if (!currentQuestion || gameFinished) return;

  const key = currentQuestion.key;

  const weights = {
    yes: 1,
    no: -1,
    probably: 0.5,
    unlikely: -0.5,
    unknown: 0
  };

  const weight = weights[answer];

  if (weight !== 0) {

    candidates.forEach(character => {

      const trait = character.traits[key];

      // Unknown traits should not be treated as false.
      if (typeof trait !== "boolean") return;

      const expected = weight > 0;

      if (trait === expected) {
        character.score += Math.abs(weight);
      } else {
        character.score -= Math.abs(weight);
      }

    });

  }

  candidates.sort((a, b) => b.score - a.score);

  questionNumber++;

  nextQuestion();
}

// PREPARE GUESS

function prepareGuess() {

  candidates.sort((a, b) => b.score - a.score);

  guessList = candidates.slice(0, 5);
  guessIndex = 0;

  displayGuess();
}

// DISPLAY GUESS

function displayGuess() {

  if (guessIndex >= guessList.length) {
    gameFinished = true;
    showScreen("end");
    return;
  }

  const character = guessList[guessIndex];

  document.getElementById("guessName").textContent =
    character.name;

  document.getElementById("guessDescription").textContent =
    character.desc;

  showScreen("result");
}

// CORRECT ANSWER

function correctGuess() {

  gameFinished = true;

  document.getElementById("guessName").textContent =
    "I GOT IT!";

  document.getElementById("guessDescription").textContent =
    "The magic worked! GUSSIFY discovered your secret. Well played!";

  document.querySelector(".result-actions").innerHTML = `
    <button class="gold-button" onclick="showScreen('categories')">
      PLAY AGAIN ✦
    </button>
  `;
}

// INCORRECT ANSWER

function wrongGuess() {

  if (gameFinished) return;

  guessIndex++;

  displayGuess();
}

// KEYBOARD SUPPORT

document.addEventListener("keydown", event => {

  if (!document.getElementById("game").classList.contains("active")) {
    return;
  }

  const answers = {
    "1": "yes",
    "2": "no",
    "3": "probably",
    "4": "unlikely",
    "5": "unknown"
  };

  if (answers[event.key]) {
    answerQuestion(answers[event.key]);
  }

});
