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

function getRecommendations(resultCount) {
  const priorityOrder = ['finance', 'home', 'health', 'life', 'docs', 'career'];
  const weakCategories = Object.entries(resultCount).filter(([category, score]) => score <= 4).map(([category, score]) => ({ category, score }));

  weakCategories.sort((a, b) => {
    if (a.score !== b.score) {
      return a.score - b.score;
    }
    return priorityOrder.indexOf(a.category) - priorityOrder.indexOf(b.category);
  });

  const topRecommendations = weakCategories.slice(0, 3);

  return topRecommendations.map(item => item.category);
}

function getCatName(category) {
    const names = {
      finance: ['Финансы', 'разберёшься, как планировать расходы и не терять деньги на мелочах.'],
      home: ['Быт', 'базовые вещи, которые делают жизнь удобнее и спокойнее.'],
      health: ['Здоровье', 'поймёшь, как заботиться о себе и когда действительно стоит идти к врачу.'],
      life: ['Лайфстайл', 'здесь можно навести порядок в повседневных привычках и рутине.'],
      docs: ['Документы', 'разберёшься в бумагах, чтобы не путаться и не терять время.'],
      career: ['Карьера', 'поймёшь, как искать работу, расти в профессии и не выгорать.']
    };
    return [names[category][0], names[category][1]];
  };

function showResult() {
  const resetBtn = document.querySelector('.reset_test');
  const testBlock = document.querySelector('.O_question_block');
  const resultContent = document.querySelector('.O_test_result');
  const resultChart = document.querySelector('.M_map');

  // resetBtn.addEventListener('click', () => {
  //   testBlock.style.display = 'flex';
  //   resultContent.style.display = 'none';
  //   initTest(test);
  // });

  testBlock.style.display = 'none';
  resultContent.style.display = 'flex';

  const recs = getRecommendations(resultCount);

  // testBlock.style.cssText = 'flex-direction: row; gap: 28rem;';

  // resultContent.innerHTML = `
  //   <h5 class='title_h5'>Ну что, смотрим правде в&nbsp;глаза? Мы&nbsp;посчитали баллы — вот&nbsp;как&nbsp;сейчас выглядит твоя&nbsp;карта</h5>
  //   <div class='O_tab_section'>
  //     <div class='M_tab_group'>
  //       <button class='A_button'>Что это значит?</button>
  //       <button class='A_button'>Рекомендации</button>
  //     </div>
  //     <p class='text_m'>По карте видно, где навыки пока проседают. Начни с этих категорий — так будет проще и быстрее подтянуть базу.

  //       Рекомендуем начать с:
  //       <ul class='result_recs_list'>
  //         <li class='text_m'><span class='${recs[0]}_span text_m'>${getCatName(recs[0])[0]}</span> — ${getCatName(recs[0])[1]}</li>
  //         <li class='text_m'><span class='${recs[1]}_span text_m''>${getCatName(recs[1])[0]}</span> — ${getCatName(recs[0])[1]}</li>
  //         <li class='text_m'><span class='${recs[2]}_span text_m''>${getCatName(recs[2])[0]}</span> — ${getCatName(recs[0])[1]}</li>
  //       </ul>
  //      </p>
  //   </div>
  // `;

  const result = resultCount.career + resultCount.docs + resultCount.finance + resultCount.health + resultCount.home + resultCount.life;
  console.log(result, resultCount);
  resultChart.innerHTML = generateRadarChart(resultCount, 382, 428);
}

export {initTest, chooseAnswer}