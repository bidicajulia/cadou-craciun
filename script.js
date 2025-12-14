const questions = [
  {
    text: "Unde mergem de Crăciun?",
    answers: ["Acasă", "La munte", "Într-un oraș european", "Surpriză"],
    correct: 3
  },
  {
    text: "Câte zile de relaxare credeți că sunt suficiente?",
    answers: ["1", "2", "3", "Câte sunt"],
    correct: 2
  },
  {
    text: "Ce nu trebuie să lipsească din bagaj?",
    answers: ["Bună dispoziție", "Poze", "Plimbări", "Toate"],
    correct: 3
  },
  {
    text: "Sunteți gata de surpriză?",
    answers: ["DA", "SIGUR DA"],
    correct: 1
  }
];

let current = 0;

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const quiz = document.querySelector(".quiz-container");
const questionText = document.getElementById("question-text");
const answersDiv = document.getElementById("answers");
const resultBox = document.getElementById("result-box");

startBtn.onclick = function () {
  intro.classList.add("hidden");
  quiz.classList.remove("hidden");
  showQuestion();
};

function showQuestion() {
  const q = questions[current];
  questionText.innerText = q.text;
  answersDiv.innerHTML = "";

  for (let i = 0; i < q.answers.length; i++) {
    const btn = document.createElement("button");
    btn.innerText = q.answers[i];
    btn.onclick = function () {
      checkAnswer(i);
    };
    answersDiv.appendChild(btn);
  }
}

function checkAnswer(index) {
  if (index === questions[current].correct) {
    current++;

    if (current < questions.length) {
      showQuestion();
    } else {
      quiz.classList.add("hidden");
      resultBox.classList.remove("hidden");

      if (typeof confetti === "function") {
        confetti({
          particleCount: 200,
          spread: 150
        });
      }
    }
  } else {
    alert("Mai încearcă 🙂");
  }
}
