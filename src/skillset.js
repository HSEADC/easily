'use strict';

// import './stylesheets/style.css';
import './skilltest.css';

const test = [
  {
    question: 'Как ты отслеживаешь свои доходы и расходы?',
    id: 'finance',
    answers: [
      {
        text: 'Примерно держу в голове или иногда записываю',
        count: 1,
      },
      {
        text: 'Не отслеживаю, трачу, что есть',
        count: 0,
      },
      {
        text: 'Веду бюджет в приложении или таблице, знаю структуру трат',
        count: 2,
      }
    ]
  },
  {
    question: 'Как ты поступаешь с новым договором аренды?',
    id: 'documents',
    answers: [
      {
        text: 'Быстро пролистываю и подписываю там, где сказали',
        count: 0,
      },
      {
        text: 'Внимательно читаю, проверяю пункты об ответственности, ремонте, коммуналке',
        count: 2,
      },
      {
        text: 'Просматриваю, обращаю внимание на срок и цену',
        count: 1,
      }
    ]
  },
  {
    question: 'Как ты поступаешь с использованными батарейками, лампочками, старой техникой?',
    id: 'home',
    answers: [
      {
        text: 'Коплю где-то дома, но не знаю точно, куда сдать',
        count: 1,
      },
      {
        text: 'Выбрасываю в общее мусорное ведро',
        count: 0,
      },
      {
        text: 'Знаю пункты приёма поблизости и сдаю на утилизацию',
        count: 2,
      }
    ]
  },
  {
    question: 'Как ты выбираешь врача или записываешься в клинику?',
    id: 'health',
    answers: [
      {
        text: 'Спрошу у знакомых или поищу отзывы в интернете',
        count: 1,
      },
      {
        text: 'Позвоню в первую попавшуюся клинику из рекламы',
        count: 0,
      },
      {
        text: 'Проверю, покрывает ли это моя страховка (ДМС/ОМС) необходимую услугу, и выберу клинику по ней или по рекомендациям',
        count: 2,
      }
    ]
  },
  {
    question: 'Насколько актуально твое резюме прямо сейчас?',
    id: 'career',
    answers: [
      {
        text: 'Обновляю, когда прохожу курсы или меняю работу',
        count: 1,
      },
      {
        text: 'Регулярно дополняю новыми проектами и навыками; готово к отправке',
        count: 2,
      },
      {
        text: 'Лежит в архиве с момента трудоустройства',
        count: 0,
      }
    ]
  },
  {
    question: 'Как ты планируешь и бронируешь отпуск?',
    id: 'lifestyle',
    answers: [
      {
        text: 'Обновляю, когда прохожу курсы или меняю работу',
        count: 1,
      },
      {
        text: 'Знаю, как сравнивать цены на отели и билеты, оформляю страховку и планирую бюджет заранее',
        count: 2,
      },
      {
        text: 'Выбираю направление и жильё, но могу переплатить из-за спешки',
        count: 1,
      }
    ]
  },
];

const resultTable = [
  {

  }
];

let currentStage = 0;

const resultCount = {
  health: 0,
  career: 0,
  home: 0,
  documents: 0,
  lifestyle: 0,
  finance: 0,
};

const answers = document.querySelectorAll('input[type=checkbox]');

function initTest(test) {
  const questionNum = document.querySelector('.question_num');
  const questionText = document.querySelector('.test_question');
  const answersText = document.querySelectorAll('.test_answer_text');

  questionNum.innerHTML = `${currentStage + 1} вопрос из ${test.length}`;
  questionText.innerHTML = test[currentStage].question;

  for (let i = 0; i < answersText.length; i++) {
    answersText[i].innerHTML = test[currentStage].answers[i].text;
  };

  for (let j = 0; j < answers.length; j++) {
    answers[j].dataset.count = test[currentStage].answers[j].count;
  };
};

function chooseAnswer (test, resultTable) {
  answers.forEach(item => {
    item.addEventListener('change', () => {
      if(item.checked) {

        resultCount[test[currentStage].id] += Number(item.dataset.count);

        setTimeout(() => {
          updateStage(test, resultTable);
          item.checked = false;
        }, 300)
      }
    })
  })
}

function updateStage(test, resultTable) {
  if (currentStage + 1 < test.length) {
    currentStage++;
    initTest(test);
  }
  else {
    showResult(resultTable);
  }
}

function showResult(resultTable) {
  const testBlock = document.querySelector('.skillstest');
  const testResults = document.createElement('p');

  testBlock.innerHTML = '';
  testResults.classList.add('test_final_count');

  testBlock.append(testResults);

  // testResults.innerHTML = `Ты отлично справляешься с задачами, связанными с ${skill} и ${skill}! Обрати внимание на ${skill} — там есть над чем поработать. Мы подобрали для тебя статьи, которые помогут закрыть этот пробел`
  const result = resultCount.career + resultCount.documents + resultCount.finance + resultCount.health + resultCount.home + resultCount.lifestyle;
  console.log(result <= 8);

    if (result <= 4) {
      testResults.innerHTML = 'В решении задач взрослой жизни ты еще новичок!';
      console.log('новичок');
    }
    else if (result <= 8) {
      testResults.innerHTML = 'Ты довольно уверенно решаешь задачи взрослой жизни!';
      console.log('уверенно');
    }
    else {
      testResults.innerHTML = 'В решении задач взрослой жизни ты настоящий профи!';
      console.log('профи');
    }

  console.log(document.querySelector('.test_final_count'));
  console.log(resultCount);


}

initTest(test);
chooseAnswer(test, resultTable)