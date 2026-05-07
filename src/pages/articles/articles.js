import "./articles.css";
import "./articles_covers.css";

import { miniTests } from "./testsdata/minitests";

function getCurrentArticleId() {
  const path = window.location.pathname;
  const fileName = path.split('/').pop();
  return fileName.replace('.html', '');
}

document.addEventListener('DOMContentLoaded', () => {
  const articleId = getCurrentArticleId();
  const testData = miniTests[articleId];

  const container = document.querySelector('.O_question_block');
  if (testData && container) {
    initMiniTest(container, testData);
  }
});

function initMiniTest(container, testData, onComplete) {
  let currentQuestionIndex = 0;
  let canAnswer = true;
  let totalCorrect = 0;

  function showQuestion(index) {
    const question = testData.questions[index];
    container.innerHTML = `
      <p class="text_l_medium">${question.text}</p>
      <div class="C_answer_options">
        ${question.answers.map((answer, i) => `
          <div class="A_answer" data-index="${i}" data-correct="${answer.isCorrect}">
          <p class="text_m_medium">${answer.text}</p>
          </div>
        `).join('')}
      </div>
    `;
    attachAnswerListeners();
  }

  function attachAnswerListeners() {
    const answers = container.querySelectorAll('.A_answer');
    answers.forEach(ans => {
      ans.addEventListener('click', () => handleAnswer(ans));
    });
  }

  function handleAnswer(selectedAns) {
    if (!canAnswer) return;
    canAnswer = false;

    const isCorrect = selectedAns.dataset.correct === 'true';
    const allAnswers = container.querySelectorAll('.A_answer');
    const currentQuestion = testData.questions[currentQuestionIndex];

    selectedAns.classList.add('shake_animation');

    if (isCorrect) {
      totalCorrect++;
      selectedAns.classList.add('correct');
    } else {
      selectedAns.classList.add('incorrect');

      allAnswers.forEach(btn => {
        if (btn.dataset.correct === 'true') {
          btn.classList.add('correct');
        }
      });
    }

    currentQuestion.userAnswer = {
      selectedIndex: parseInt(selectedAns.dataset.index),
      isCorrect: isCorrect
    };

    setTimeout(() => {
      currentQuestionIndex++;

      if (currentQuestionIndex < testData.questions.length) {
        showQuestion(currentQuestionIndex);
        canAnswer = true;
      } else {
        showResult();
        if (onComplete) onComplete(totalCorrect, testData.questions.length);
      }
    }, 2000);
  }

  function showResult() {
    const totalQuestions = testData.questions.length;
    const percentage = Math.round((totalCorrect / totalQuestions) * 100);

    container.innerHTML = `
      <div class="M_minitest_result_block">
      <h5 class="title_h5">${totalCorrect}/${totalQuestions}</h5>
        <h5 class="title_h5">Если вдруг что-то не получилось, тест можно пройти еще раз</h5>
        <button class="A_button dark">Пройти заново</button>
      </div>
    `;

    const retryBtn = container.querySelector('.A_button');
    if (retryBtn) {
      retryBtn.addEventListener('click', () => {
        currentQuestionIndex = 0;
        totalCorrect = 0;
        canAnswer = true;
        showQuestion(0);
      });
    }
  }

  showQuestion(0);
}