
    const questions = [
      {
        question: "What does JS stand for?",
        options: ["JavaScript", "JavaSource", "JustScript", "JSON"],
        answer: "JavaScript"
      },
      {
        question: "Which symbol is used for comments in JS?",
        options: ["//", "/*", "#", "<!--"],
        answer: "//"
      },
      {
        question: "Which HTML tag includes JavaScript?",
        options: ["<script>", "<js>", "<code>", "<javascript>"],
        answer: "<script>"
      }
    ];

    let currentIndex = 0;
    let score = 0;

    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("next-btn");
    const resultBox = document.getElementById("result-box");
    const quizBox = document.getElementById("quiz-box");
    const scoreEl = document.getElementById("score");

    function loadQuestion() {
      let q = questions[currentIndex];
      questionEl.textContent = q.question;
      optionsEl.innerHTML = "";

      q.options.forEach(option => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => checkAnswer(btn, option);
        optionsEl.appendChild(btn);
      });
    }

    function checkAnswer(btn, selected) {
      if (selected === questions[currentIndex].answer) {
        btn.classList.add("correct");
        score++;
      } else {
        btn.classList.add("wrong");
      }

      Array.from(optionsEl.children).forEach(button => {
        button.disabled = true;
        if (button.textContent === questions[currentIndex].answer) {
          button.classList.add("correct");
        }
      });

      nextBtn.style.display = "inline-block";
    }

    nextBtn.addEventListener("click", () => {
      currentIndex++;
      if (currentIndex < questions.length) {
        loadQuestion();
        nextBtn.style.display = "none";
      } else {
        showResult();
      }
    });

    function showResult() {
      quizBox.style.display = "none";
      resultBox.style.display = "block";
      scoreEl.textContent = `${score} / ${questions.length}`;
    }

    loadQuestion();
