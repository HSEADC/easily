'use strict';

// import './stylesheets/style.css';
import './skilltest.css';

const test = [
  {
    question: 'Ты хочешь расти по карьере или получать больше. Что делаешь?',
    id: 'career',
    answers: [
      {
        text: 'Думаю об этом, иногда листаю вакансии',
        count: 1,
      },
      {
        text: 'Хожу на курсы, читаю профессиональные каналы',
        count: 2,
      },
      {
        text: 'Жду, когда начальник оценит и повысит сам',
        count: 0,
      }
      ,
      {
        text: 'У меня есть карьерный план и понятные шаги к цели',
        count: 3,
      }
    ]
  },
  {
    question: 'Пришла зарплата. Твои действия?',
    id: 'finance',
    answers: [
      {
        text: 'Примерно представляю, на что уйдут деньги, но без жёсткого плана',
        count: 1,
      },
      {
        text: 'Сразу трачу на нужное и не очень, к концу месяца часто в ноль',
        count: 0,
      },
      {
        text: 'У меня есть чёткий бюджет и финансовая подушка',
        count: 3,
      },
      {
        text: 'Распределяю по статьям в заметках или приложении',
        count: 2,
      }
    ]
  },
  {
    question: 'Нужно срочно получить справку или оформить документ. Ты:',
    id: 'documents',
    answers: [
      {
        text: 'Иду к знакомым/родителям за советом',
        count: 1,
      },
      {
        text: 'Гуглю, нахожу гайд и действую по нему',
        count: 2,
      },
      {
        text: 'Откладываю до последнего',
        count: 0,
      },
      {
        text: 'Уже знаю, куда идти и какие бумаги брать',
        count: 3,
      }
    ]
  },
  {
    question: 'Из крана на кухне перестала течь вода. Твоя реакция:',
    id: 'home',
    answers: [
      {
        text: 'Лезу в Ютуб и пытаюсь понять, можно ли починить самому',
        count: 2,
      },
      {
        text: 'Буду мыть посуду в ванной, пока кто-то другой не починит',
        count: 0,
      },
      {
        text: 'Звоню другу/родителям/знакомому сантехнику',
        count: 1,
      },
      {
        text: 'Проверяю вентили, понимаю примерную причину и решаю — чинить самому или вызывать мастера',
        count: 3,
      }
    ]
  },
    {
    question: 'Третью неделю болит спина/голова/живот. Ты:',
    id: 'health',
    answers: [
      {
        text: 'Гуглю симптомы и успеваю похоронить себя пару раз',
        count: 1,
      },
      {
        text: 'Думаю "само пройдёт" (спойлер: не прошло)',
        count: 0,
      },
      {
        text: 'Читаю проверенные источники и иду к платному врачу за консультацией',
        count: 2,
      },
      {
        text: 'Записываюсь в поликлинику по страховке, потому что знаю свои права',
        count: 2,
      }
    ]
  },
    {
    question: 'Сломалась техника или понадобились срочные деньги. Ты:',
    id: 'finance',
    answers: [
      {
        text: 'Плачу из оставшихся денег, потом ужимаюсь',
        count: 1,
      },
      {
        text: 'Часть могу покрыть из небольших накоплений',
        count: 2,
      },
      {
        text: 'Паникую, лезу в кредитку или занимаю у друзей',
        count: 0,
      },
      {
        text: 'Спокойно беру из финансовой подушки, которая всегда есть',
        count: 3,
      }
    ]
  },
  {
    question: 'Когда ты в последний раз проверял зубы или сдавал базовые анализы?',
    id: 'health',
    answers: [
      {
        text: 'Примерно раз в год прохожу чекап',
        count: 2,
      },
      {
        text: 'У меня есть график обследований, и я его придерживаюсь',
        count: 3,
      },
      {
        text: 'Года два назад, наверное...',
        count: 1,
      }
      ,
      {
        text: 'А что, так можно было?',
        count: 0,
      }
    ]
  },
  {
    question: ' Вечер пятницы. Как ты обычно проводишь выходные?',
    id: 'lifestyle',
    answers: [
      {
        text: 'Лежу в телефоне и удивляюсь, куда улетело время',
        count: 0,
      },
      {
        text: 'Осознанно планирую и отдых, и дела, чтобы всё успевать',
        count: 3,
      },
      {
        text: 'Спонтанно договариваюсь с друзьями или туплю дома',
        count: 1,
      },
      {
        text: 'Примерно представляю, чем хочу заняться',
        count: 2,
      }
    ]
  },
    {
    question: 'Тебе пришла бумажная квитанция или письмо из ведомства. Ты:',
    id: 'documents',
    answers: [
      {
        text: 'Читаю и пытаюсь разобраться через гугл',
        count: 2,
      },
      {
        text: 'Выбрасываю, не читая',
        count: 0,
      },
      {
        text: 'Открываю, но если непонятно — откладываю в долгий ящик',
        count: 1,
      },
      {
        text: 'Знаю, куда обратиться за разъяснениями, и проверяю информацию на официальных источниках',
        count: 3,
      }
    ]
  },
  {
    question: 'Насколько актуально твое резюме прямо сейчас?',
    id: 'career',
    answers: [
      {
        text: 'Регулярно дополняю новыми проектами и навыками',
        count: 3,
      },
      {
        text: 'В целом норм, можно отправлять',
        count: 2,
      },
      {
        text: 'У меня его нет или оно древнее',
        count: 0,
      }
      ,
      {
        text: 'Обновляю, когда прохожу курсы или меняю работу',
        count: 1,
      }
    ]
  },
    {
    question: 'Как обычно выглядит твоя квартира в середине недели?',
    id: 'home',
    answers: [
      {
        text: 'Лёгкий (или не очень) филиал бардака',
        count: 0,
      },
      {
        text: 'Убираюсь, когда уже невозможно терпеть или приходят гости',
        count: 1,
      },
      {
        text: 'Поддерживаю порядок, но бывают завалы',
        count: 3,
      },
      {
        text: 'У меня есть система уборки, и дома всегда комфортно',
        count: 2,
      }
    ]
  },
  {
    question: 'У тебя была цель "начать бегать/читать/учить английский" в этом году?',
    id: 'lifestyle',
    answers: [
      {
        text: 'У меня есть система привычек, и я отслеживаю прогресс',
        count: 3,
      },
      {
        text: 'Пытаюсь, но не удается сформировать привычку',
        count: 1,
      },
      {
        text: 'Была, но умерла через неделю',
        count: 0,
      },
      {
        text: 'Постепенно внедряю, иногда получается',
        count: 2,
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
console.log(document.querySelector('.result_wrapper'))

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

  // testResults.innerHTML = `Ты отлично справляешься с задачами, связанными с ${skill} и ${skill}! Обрати внимание на ${skill} — там есть над чем поработать. Мы подобрали для тебя статьи, которые помогут закрыть этот пробел`
  const result = resultCount.career + resultCount.documents + resultCount.finance + resultCount.health + resultCount.home + resultCount.lifestyle;

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
}

initTest(test);
chooseAnswer(test, resultTable);