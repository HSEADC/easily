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
const answers = document.querySelectorAll('.A_question_answer');

answers.forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('a_test_answer_active')
  })
});

function initTest(test) {
  const questionNum = document.querySelector('.A_question_step');
  const questionText = document.querySelector('.A_question_title');

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
  const testBlock = document.querySelector('.O_question_block');
  testBlock.innerHTML = '';

  const testResults = document.createElement('p');
  testResults.classList.add('text_m');

  const resultChartWrapper = document.createElement('div');
  resultChartWrapper.classList.add('m_result_chart_wrapper');

  const resultChart = document.createElement('div');

  // testResults.innerHTML = `Ты отлично справляешься с задачами, связанными с ${skill} и ${skill}! Обрати внимание на ${skill} — там есть над чем поработать. Мы подобрали для тебя статьи, которые помогут закрыть этот пробел`
  const result = resultCount.career + resultCount.docs + resultCount.finance + resultCount.health + resultCount.home + resultCount.life;
  console.log(result, resultCount);

  if (result <= 12) {
    testResults.innerHTML = ``;
  }
  else if (result <= 24) {
    testResults.innerHTML = ``;
  }
  else {
    testResults.innerHTML = ``;
  }

  testBlock.style.cssText = 'display: flex; flex-direction:column; gap: 36rem';
  testBlock.append(testResults);
  resultChart.innerHTML = generateRadarChart(resultCount, 570, 570);
  testBlock.append(resultChartWrapper);
  resultChartWrapper.append(resultChart);
}

export {initTest, chooseAnswer}