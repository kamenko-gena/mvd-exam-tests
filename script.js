const quizData = [
  {
    question: "С какой периодичностью проводится техническое обслуживание в составе и объеме регламента №1 ?",
    answers: {
      a: "два раза в месяц",
      b: "один раз в месяц",
      c: "два раза в квартал",
      d: "один раз в год"
    },
    description: "п.5.4 ТКП 472-2013",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "После подписания договора на техническое обслуживание, что должен оформить Исполнитель?",
    answers: {
      a: "акт технического освидетельстваования",
      b: "график проведения технического обслуживания",
      c: "дефектную ведомость",
      d: "журнал учета контроля качества технического обслуживания"
    },
    description: "п.6.14 ТКП 472-2013",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Кто рассписывается в Журналах регистрации работ по техническому обслуживанию средств и систем охраны?",
    answers: {
      a: "ответственное лицо Исполнителя и Заказчика",
      b: "только представители Исполнителя",
      c: "только Заказчик либо ответсвтенное лицо Заказчика",
      d: "любое лицо принимающее работы по ТО у Исполнителя"
    },
    description: "п.7.12 ТКП 472-2013",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "Каким образом осуществляется крепление узлов извещателя на поверхности?",
    answers: {
      a: "шурупами - на деревянной, винтами - на металлической, клеем - на стеклянной",
      b: "шурупами - на металлической и деревянной, винтами - на стеклянной",
      c: "клеем - на металлической, шурупами или винтами - на стеклянной",
      d: "согласно технологической карте на техническое обслуживание извещателя"
    },
    description: "п.6.3.4.1 ТКП 490-2013",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "Сколько допускается подключать, в один шлейф, объемных извещателей, вибрационных, сейсмических или акустических?",
    answers: {
      a: "не боллее 10",
      b: "в один шлейф не допускается подключать более одного извещателя",
      c: "не более 4-х",
      d: "неограниченное количетсво"
    },
    description: "п.4.9 ТКП 627-2018",
    correctAnswer: "c",
    userAnswer: null
  },
  {
    question: "Какие требования предъявляются к конструкциям для монтажа объемных охранных извещателей?",
    answers: {
      a: "монтаж объемных охранных извещателей допускается только на деревянных конструкциях",
      b: "на любых конструкциях",
      c: "на жестких, устойчивых к вибрации опорах (капитальных стенах, колоннах, столбах и т.п.)",
      d: "на подвижных конструкциях"
    },
    description: "п.6.3.2 ТКП 490-2013",
    correctAnswer: "c",
    userAnswer: null
  },
  {
    question: "Резервный источник питания должен обеспечить работу системы охранной сигнализации в 'дежурном режиме' на время ...",
    answers: {
      a: "24 часа",
      b: "12 часов",
      c: "на время необходимое для прибытия обслуживающей организации",
      d: "1 час"
    },
    description: "п.4.12 ТКП 627-2018",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "Допускается ли использовать техническое средство охранной сигнализации с нарушенным опломбированием завода-изготовителя?",
    answers: {
      a: "допускается, после проверки организацией осуществляющей ТО и последующем опломбированием",
      b: "не допускается",
      c: "по усмотрению Заказчика",
      d: "допускается в любом случае"
    },
    description: "п.5.14 ТКП 490-2013",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "Необходимо ли уведомить территориальное подразделение Департамента охраны о готовности к началу работ перед монтажом системы охранной телевизионной?",
    answers: {
      a: "необходимо, если объект охраняется или передается под охрану подразделения Департамента охраны",
      b: "нет",
      c: "необходимо, в обязательном порядке",
      d: "по усмотрению организации выполняющей монтажные работы"
    },
    description: "п.5.2 ТКП 490-2013",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "В какие сроки необходимо проводить ТО на объекте?",
    answers: {
      a: "не более 3-х дней",
      b: "согласно утвержденному плану-графику",
      c: "по заявкам Закачкика",
      d: "согласно утвержденным технологическим картам"
    },
    description: "ТКП 472-2013",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "На какой высоте устанавливаются тревожные ручные извещатели в коридорах по пути транспортирования материальных ценностей?",
    answers: {
      a: "на высоте 1,5 м от пола",
      b: "700 - 800 мм от пола",
      c: "на высоте равной половины высоты коридора",
      d: "100 - 200 мм от пола"
    },
    description: "п.6.3.5.1 ТКП 490-2013",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "На каком рассотоянии от вертикальной или горизонтальной линии раствора двери устанавливаются магнтоконтактные извещатели?",
    answers: {
      a: "от 300 мм",
      b: "до 200 мм",
      c: "на расстоянии равном половины ширины двери",
      d: "на любом расстоянии"
    },
    description: "п.6.3.4.1 ТКП 490-2013",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "На каком рассотоянии от боковой стороны рамы окна приклеивается омический охранный извещатель типа Фольга?",
    answers: {
      a: "10 - 15 мм",
      b: "2 - 5 мм",
      c: "на расстоянии равном половины ширины окна",
      d: "на любом расстоянии"
    },
    description: "п.6.3.6.1 ТКП 490-2013",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Между магнитоконтактным извещателем и металлической поверхностью, для повышения работы извещателя, устанавливается...",
    answers: {
      a: "прокладку из немагнитного материала толщиной до 25-30 мм",
      b: "дополнительный магнитоконтактный извещатель",
      c: "металлическая прокладка толщиной до 10 мм",
      d: "дополнительный омический извещатель"
    },
    description: "п.6.3.4.1 ТКП 490-2013",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "На каком расстоянии устанавливается ППК и элементы управления на охраняемом объекте?",
    answers: {
      a: "при отсутствии специально выделенного помещения и защиты ППК от несанкионированного доступа - на высоте не менее 2,2 м",
      b: "на расстоянии 700-800 мм от пола",
      c: "на любом расстоянии",
      d: "на высоте не более 1 м"
    },
    description: "п.6.4.1 ТКП 490-2013",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "Какой тип охранных извещателей не допускается использовать в музеях?",
    answers: {
      a: "омические",
      b: "магнитоконтактные",
      c: "допускается использовать любой тип извещателей",
      d: "объемные"
    },
    description: "п.5.4.4 РД 28/3.006 - 2005 (отменен)",
    correctAnswer: "d",
    userAnswer: null
  },
  {
    question: "Какой тип охранных извещателей допускается использовать во взрывоопасных зонах при подключении их в искробезопасный шлейф?",
    answers: {
      a: "объемные",
      b: "емкостные",
      c: "радиоволновые",
      d: "омические"
    },
    description: "п.8 ТКП 490-2013",
    correctAnswer: "d",
    userAnswer: null
  },
  {
    question: "Каким крепежным изделием производится крепление корпуса объемных извещателей к опоре?",
    answers: {
      a: "клеем",
      b: "болтами",
      c: "любым крепежным изделием",
      d: "шурупами"
    },
    description: "п.6.3.2 ТКП 490-2013",
    correctAnswer: "d",
    userAnswer: null
  }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const questionNumber = document.getElementById('question-number')
const nextButton = document.getElementById('next');
const restartButton = document.getElementById('restart');

let currentQuestion = 0;
let numCorrect = 0;

quizData.sort(() => Math.random() - 0.5);

function buildQuiz() {
  const output = [];
  const currentQuestionData = quizData[currentQuestion];
  const answers = Object.entries(currentQuestionData.answers);

  answers.sort(() => Math.random() - 0.5);

  output.push(
    `<div class="question" style="font-size: large; font-weight: 600; text-align: center"> ${currentQuestionData.question} </div>`
  );
  
  answers.forEach(([letter, answerText]) => {
    const isCorrect = letter === currentQuestionData.correctAnswer;
    output.push(
      `<button class="answer-button" style="max-width: 50em; text-align: center; font-size: initial" data-letter="${letter}" ${currentQuestionData.userAnswer ? 'disabled' : ''}>
        ${answerText}
      </button>`
    );
  });


  quizContainer.innerHTML = output.join('');
  questionNumber.innerHTML = `Вопрос №${currentQuestion + 1} из ${quizData.length}`;
}

function showResults() {
  const currentQuestionData = quizData[currentQuestion];
  const userAnswer = currentQuestionData.userAnswer;

  const selectedButton = quizContainer.querySelector(`.answer-button[data-letter="${userAnswer}"]`);
  selectedButton.disabled = true;

  const correctButton = quizContainer.querySelector(`.answer-button[data-letter="${currentQuestionData.correctAnswer}"]`);
  correctButton.classList.add('correct');

  if (userAnswer === currentQuestionData.correctAnswer) {
    numCorrect++;
    resultsContainer.innerHTML = '<div style="color: green;">Правильно!</div>';
  } else {
    selectedButton.classList.add('incorrect');
    resultsContainer.innerHTML = `<div style="color: red;">Неправильно!</div><div style="color: red; font-size: small">${currentQuestionData.description}</div>`;
  }
}

function nextQuestion() {
  const allAnswered = quizData.every(question => question.userAnswer !== null);

  if (allAnswered) {
    quizContainer.innerHTML = '<h3>Тест завершен!</h3>';
    quizContainer.innerHTML += `<h4>Вы ответили правильно на ${numCorrect} из ${quizData.length} вопросов.</h4>`;
    resultsContainer.innerHTML = ' ';
    nextButton.style.display = 'none';
    restartButton.style.display = 'block';
  } else {
    nextButton.style.display = 'block';
    currentQuestion++;
    if (currentQuestion >= quizData.length) {
      currentQuestion = 0;
      while (quizData[currentQuestion].userAnswer !== null) {
        currentQuestion++;
        if (currentQuestion >= quizData.length) {
          currentQuestion = 0;
        }
      }
    }
    buildQuiz();
    resultsContainer.innerHTML = '';
  }
}


function restartQuiz() {
  quizData.sort(() => Math.random() - 0.5);

  currentQuestion = 0;
  numCorrect = 0;
  quizData.forEach(question => {
    question.userAnswer = null;
  });
  buildQuiz();
  resultsContainer.innerHTML = '';
  nextButton.style.display = 'block';
  restartButton.style.display = 'none';
}

restartQuiz()

buildQuiz();

nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

quizContainer.addEventListener('click', function(event) {
  const clickedButton = event.target.closest('.answer-button');
  if (clickedButton) {
    const selectedLetter = clickedButton.getAttribute('data-letter');
    quizData[currentQuestion].userAnswer = selectedLetter;
    showResults();

    // Disable other buttons
    const answerButtons = quizContainer.querySelectorAll('.answer-button');
    answerButtons.forEach(button => {
      if (button !== clickedButton) {
        button.disabled = true;
        button.style.transform = 'none';
        button.style.cursor = 'default';
      }
    });
  }
});