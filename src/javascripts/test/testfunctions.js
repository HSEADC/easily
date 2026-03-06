'use strict';

import { generateRadarChart } from "./chart";

let currentStage = 0;
const resultCount = {
  health: 0,
  career: 0,
  home: 0,
  docs: 0,
  life: 0,
  finance: 0,
};
const answers = document.querySelectorAll('.a_test_answer');

answers.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('a_test_answer_active')
  })
});

function initTest(test) {
  const questionNum = document.querySelector('.a_question_num');
  const questionText = document.querySelector('.a_test_question');

  questionNum.innerHTML = `вопрос ${currentStage + 1} из ${test.length}`;
  questionText.innerHTML = test[currentStage].question;

  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = test[currentStage].answers[i].text;
  };

  for (let j = 0; j < answers.length; j++) {
    answers[j].dataset.count = test[currentStage].answers[j].count;
  };
};

function chooseAnswer (test) {
  answers.forEach(item => {
    item.addEventListener('click', () => {
        resultCount[test[currentStage].id] += Number(item.dataset.count);
        setTimeout(() => {
          updateStage(test);
          item.checked = false;
        }, 300)
        item.classList.remove('a_test_answer_active');
    })
  })
}

function updateStage(test) {
  if (currentStage + 1 < test.length) {
    currentStage++;
    initTest(test);
  }
  else {
    showResult();
  }
}

function showResult() {
  const testBlock = document.querySelector('.skillstest');
  testBlock.innerHTML = '';

  const testResults = document.createElement('p');
  testResults.classList.add('a_test_question');

  const resultChartWrapper = document.createElement('div');
  resultChartWrapper.classList.add('m_result_chart_wrapper');

  const resultChart = document.createElement('div');

  // testResults.innerHTML = `Ты отлично справляешься с задачами, связанными с ${skill} и ${skill}! Обрати внимание на ${skill} — там есть над чем поработать. Мы подобрали для тебя статьи, которые помогут закрыть этот пробел`
  const result = resultCount.career + resultCount.docs + resultCount.finance + resultCount.health + resultCount.home + resultCount.life;
  console.log(result, resultCount);

  const link = generateLink(resultCount);

  if (result <= 12) {
    testResults.innerHTML = `В решении задач взрослой жизни ты еще новичок! почитай статьи по <a href="${link}">ссылке</a>`;
  }
  else if (result <= 24) {
    testResults.innerHTML = `Ты довольно уверенно решаешь задачи взрослой жизни! почитай статьи по <a href="${link}">ссылке</a>`;
  }
  else {
    testResults.innerHTML = `В решении задач взрослой жизни ты настоящий профи! почитай статьи по <a href="${link}">ссылке</a>`;
  }

  testBlock.style.cssText = 'display: flex; flex-direction:column; gap: 36rem';
  testBlock.append(testResults);
  resultChart.innerHTML = generateRadarChart(resultCount, 570, 570);
  testBlock.append(resultChartWrapper);
  resultChartWrapper.append(resultChart);
}

function generateLink(obj) {
  const params = new URLSearchParams();
  Object.entries(obj).forEach(([category, score]) => {
    params.append(category, score);
  });
  return `/pages/articles/articles.html?${params.toString()}`;
}

export {initTest, chooseAnswer}