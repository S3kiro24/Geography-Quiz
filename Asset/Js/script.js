const startButton = document.getElementById("start-button");
const questionContainer = document.getElementById("question-container");
const questionText = document.getElementById("question-text");
const optionButtons = document.querySelectorAll(".option");
const timerElement = document.getElementById("time");
const resultContainer = document.getElementById("result-container");
const scoreElement = document.getElementById("score");
const initialsInput = document.getElementById("initials");
const saveButton = document.getElementById("save-button");

const questions = [
  // questions here ...
  { question: "What is the capital of France?",
  options: ["Berlin", "Madrid", "Paris", "Rome"],
  answer: 2,
},
{
  question: "What is the largest country in the world",
  options: ["Canada", "United States", "Russia", "China"],
  answer: 2,
},
{
  question: "What is the name of the tallest mountain in the world?",
  options: ["Lhotse", "Mount Everest", "K2", "Himalayas"],
  answer: 1,
},
{
  question: "Which country has the largest population in the world?",
  options: ["Mexico", "Canada", "South Africa", "China"],
  answer: 3,
},
{
  question: "What is the name of the longest river in Africa?",
  options: ["Gamtoos River", "The Nile River", "Chari", "Great Fish River"],
  answer: 1,
},
{
  question: "What is the capital of Canada?",
  options:["Ontario", "Toronto", "Ottawa", "Quebec"],
  answer: 2,
},
{
  question: "What is the name of the largest ocean in the world?",
  options: ["Antarctic", "Atlantic", "Indian", "The Pacific"],
  answer: 3,
},
{
  question: "What is the name of the smallest country in the world?",
  options: ["Spain", "The Vatican City", "Cuba", "Monaco"],
  answer: 1,
},
{
  question: "What is the name of the river that flows through the Brazilian rainforest?",
  options: ["The Nile River", "Congo", "Mississippi", "The Amazon"],
  answer: 3,
},
{
  question: "What season does Australia experience in December?",
  options: ["Summer", "Winter", "Spring","Autumn"],
  answer: 0,
}
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

function startQuiz() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  startTimer();
  showQuestion();
}

function startTimer() {
  timerInterval = setInterval(function() {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
      endQuiz();
    }
  }, 1000);
}

function showQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;

  for (let i = 0; i < optionButtons.length; i++) {
    optionButtons[i].textContent = currentQuestion.options[i];
    optionButtons[i].addEventListener("click", checkAnswer);
  }
}

function checkAnswer(event) {
  const selectedOptionIndex = Array.from(optionButtons).indexOf(event.target);
  const correctAnswerIndex = questions[currentQuestionIndex].answer;

  if (selectedOptionIndex === correctAnswerIndex) {
    score += 10;
  } else {
    timeLeft -= 10;
  }

  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  clearInterval(timerInterval);
  questionContainer.classList.add("hide");
  resultContainer.classList.remove("hide");
  scoreElement.textContent = score;
}

saveButton.addEventListener("click", function() {
  const initials = initialsInput.value.trim();
  if (initials !== "") {
    // You can implement saving the initials and score here
  }
});

startButton.addEventListener("click", startQuiz);


