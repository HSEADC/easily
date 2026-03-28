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
  const recsParagraph = document.querySelector('.recomendations');

  if (financeBadge) financeBadge.innerText = `${resultCount.finance}/6`;
  if (documentsBadge) documentsBadge.innerText = `${resultCount.docs}/6`;
  if (choresBadge) choresBadge.innerText = `${resultCount.home}/6`;
  if (healthBadge) healthBadge.innerText = `${resultCount.health}/6`;
  if (lifestyleBadge) lifestyleBadge.innerText = `${resultCount.life}/6`;
  if (careerBadge) careerBadge.innerText = `${resultCount.career}/6`;

  if (resultChart) {
    resultChart.innerHTML = generateRadarChart(resultCount, 520, 614);
  }

  const firstTab = document.querySelector('.A_button_tab');
  if (firstTab) {
    firstTab.click();
  }

  const recs = getRecommendations(resultCount);
  console.log(recs);

  const totalScore = resultCount.health + resultCount.career + resultCount.home + resultCount.docs + resultCount.life + resultCount.finance;

  if (totalScore === 0) {
    recsParagraph.innerHTML = `
    Нам не удалось построить твою карту, потому что во всех категориях пока по 0 баллов. Не переживай: это не ошибка и не провал! Скорее всего, ты только начинаешь разбираться во взрослой жизни, и это нормальный результат сейчас — никто не рождается с готовыми знаниями.

    А пока мы советуем тебе начать с базовых тем:
    <ul class="result_recs_list">
      <li><a href="./pages/articles/articles.html"><span class="finance_span">Финансы</span></a> — разберёшься, как не терять деньги и держать их под контролем.</li>
      <li><a href="./pages/articles/articles.html"><span class="home_span">Быт</span></a> — простые вещи, которые делают повседневную жизнь заметно легче.</li>
      <li><a href="./pages/articles/articles.html"><span class="health_span">Здоровье</span></a> — база, без которой сложно чувствовать себя стабильно.</li>
    </ul>`;
  }
  else if (totalScore === 36) {
    recsParagraph.innerHTML = `
      Ого, у тебя максимальные баллы во всех категориях!
      Карта получилась идеальной формы — ромб, к которому мы и стремимся.
      Похоже, ты уже хорошо ориентируешься в базовых вопросах взрослой жизни. Но если хочется копнуть глубже или освежить знания, загляни в наши <a href="./pages/guides/guides.html"><span class="text_l_medium">гайды</span></a> — там мы собрали короткие и полезные материалы на разные темы.`;
  }

  else {
    recsParagraph.innerHTML = `
      По карте видно, где навыки пока проседают. Начни с этих категорий — так будет проще и быстрее подтянуть базу.

      Рекомендуем начать с:

      <ul class="result_recs_list">
      <li><a href="./pages/articles/articles.html"><span class="${recs[0]}_span text_m_medium">${getCatName(recs[0])[0]}</span> — ${getCatName(recs[0])[1]}</a></li>
      <li><a href="./pages/articles/articles.html"><span class="${recs[1]}_span text_m_medium">${getCatName(recs[1])[0]}</span> — ${getCatName(recs[1])[1]}</a></li>
      <li><a href="./pages/articles/articles.html"><span class="${recs[2]}_span text_m_medium">${getCatName(recs[2])[0]}</span> — ${getCatName(recs[2])[1]}</a></li>
    </ul>
    `
  }

}

function getCatName(category) {
    const names = {
      finance: ['Финансы', 'разберёшься, как планировать расходы и не терять деньги на мелочах.'],
      home: ['Быт', 'базовые вещи, которые делают жизнь удобнее и спокойнее.'],
      health: ['Здоровье', 'поймёшь, как заботиться о себе и когда действительно стоит идти к врачу.'],
      life: ['Лайфстайл', 'здесь можно навести порядок в повседневных привычках и рутине.'],
      docs: ['Документы', 'разберёшься в бумагах, чтобы не путаться и не терять время.'],
      career: ['Карьера', 'поймёшь, как искать работу, расти в профессии и не выгорать.']
    };
    return [names[category][0], names[category][1]];
};

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