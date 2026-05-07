// data/mini-tests.js
export const miniTests = {
  'probation': {
    questions: [
      {
        text: 'Где обязательно должно быть прописано условие об&nbsp;испытательном сроке?',
        answers: [
          { text: 'В устном обещании работодателя при собеседовании', isCorrect: false },
          { text: 'В правилах внутреннего трудового распорядка', isCorrect: false },
          { text: 'В трудовом договоре', isCorrect: true }
        ]
      },
      {
        text: 'Максимальная продолжительность испытательного срока для&nbsp;обычного сотрудника (не&nbsp;руководителя) — это:',
        answers: [
          { text: '1 месяц', isCorrect: false },
          { text: '3 месяца', isCorrect: true },
          { text: '6 месяцев', isCorrect: false }
        ]
      },
      {
        text: 'Вы работаете на&nbsp;испытательном сроке и&nbsp;заболели. Что&nbsp;будет с&nbsp;испытательным сроком?',
        answers: [
          { text: 'Вас могут уволить по причине болезни', isCorrect: false },
          { text: 'Срок испытания продлится на количество дней болезни', isCorrect: true },
          { text: 'Ничего не изменится', isCorrect: false }
        ]
      }
    ]
  },


};