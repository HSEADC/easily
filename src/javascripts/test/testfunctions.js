'use strict';

import { generateRadarChart } from "./chart";

let currentStage = 0;
let currentTest = null;

const resultCount = {
  health: 0,
  career: 0,
  home: 0,
  docs: 0,
  life: 0,
  finance: 0,
};

const testBlock = document.querySelector('.O_question_block');
const resultBlock = document.querySelector('.O_test_result');
const questionStep = document.querySelector('.A_question_step');
const questionTitle = document.querySelector('.A_question_title');
const resetBtn = document.querySelector('.reset_test');
const resultChart = document.querySelector('.radar_block');

function initTest(test) {
  currentTest = test;
  questionStep.innerHTML = `вопрос ${currentStage + 1} из ${test.length}`;
  questionTitle.innerHTML = test[currentStage].question;

  const answers = document.querySelectorAll('.A_question_answer');

  answers.forEach((answer, index) => {
    answer.innerHTML = test[currentStage].answers[index].text;
    answer.dataset.count = test[currentStage].answers[index].count;
    answer.classList.remove('a_test_answer_active');
  });
}

function chooseAnswer() {
  let answers = document.querySelectorAll('.A_question_answer');

  answers.forEach(answer => {
    const newAnswer = answer.cloneNode(true);
    answer.parentNode.replaceChild(newAnswer, answer);
    newAnswer.addEventListener('click', () => {
      resultCount[currentTest[currentStage].id] += Number(newAnswer.dataset.count);
      newAnswer.classList.add('a_test_answer_active');
      setTimeout(() => {
        if (currentStage + 1 < currentTest.length) {
          currentStage++;
          initTest(currentTest);
          chooseAnswer();
        } else {
          showResult();
        }
      }, 300);
    });
  });
}

function showResult() {
  testBlock.style.display = 'none';
  resultBlock.style.display = 'flex';

  const financeBadge = document.querySelector('.A_badge_finance');
  const documentsBadge = document.querySelector('.A_badge_documents');
  const choresBadge = document.querySelector('.A_badge_chores');
  const healthBadge = document.querySelector('.A_badge_health');
  const lifestyleBadge = document.querySelector('.A_badge_lifestyle');
  const careerBadge = document.querySelector('.A_badge_career');

  if (financeBadge) financeBadge.innerText = `${resultCount.finance}/6`;
  if (documentsBadge) documentsBadge.innerText = `${resultCount.docs}/6`;
  if (choresBadge) choresBadge.innerText = `${resultCount.home}/6`;
  if (healthBadge) healthBadge.innerText = `${resultCount.health}/6`;
  if (lifestyleBadge) lifestyleBadge.innerText = `${resultCount.life}/6`;
  if (careerBadge) careerBadge.innerText = `${resultCount.career}/6`;

  if (resultChart) {
    resultChart.innerHTML = generateRadarChart(resultCount, 382, 438);
  }

  const recs = getRecommendations(resultCount);
  console.log('Рекомендации:', recs);

}

function resetTest() {
  currentStage = 0;
  resultCount.health = 0;
  resultCount.career = 0;
  resultCount.home = 0;
  resultCount.docs = 0;
  resultCount.life = 0;
  resultCount.finance = 0;

  testBlock.style.display = 'flex';
  resultBlock.style.display = 'none';

  initTest(currentTest);
  chooseAnswer();
}

function getRecommendations(resultCount) {
  const priorityOrder = ['finance', 'home', 'health', 'life', 'docs', 'career'];

  const weakCategories = Object.entries(resultCount)
    .filter(([_, score]) => score <= 4)
    .map(([category, score]) => ({ category, score }));

  weakCategories.sort((a, b) => {
    if (a.score !== b.score) {
      return a.score - b.score;
    }
    return priorityOrder.indexOf(a.category) - priorityOrder.indexOf(b.category);
  });

  const topRecommendations = weakCategories.slice(0, 3);
  return topRecommendations.map(item => item.category);
}

export function startTest(testData) {
  currentStage = 0;
  currentTest = testData;

  testBlock.style.display = 'flex';
  resultBlock.style.display = 'none';

  initTest(testData);
  chooseAnswer();

  if (resetBtn) {
    resetBtn.onclick = () => resetTest();
  }
}

export { initTest, chooseAnswer };