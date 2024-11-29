let mvdData = [
  {
    question: "Сколько пикселей на метр должно быть в ТСВ для обнаружения, в том числе распознования событий?",
    answers: {
      a: "не менее 250",
      b: "не менее 100",
      c: "не менее 300",
      d: "не менее 500"
    },
    description: "п.6.4 ТКП 664-2021",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Сколько пикселей на метр должно быть в ТСВ для различения, в том числе узнаваемости внешности человека?",
    answers: {
      a: "не менее 100",
      b: "не менее 250",
      c: "не менее 300",
      d: "не менее 500"
    },
    description: "п.6.4 ТКП 664-2021",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Сколько пикселей на метр должно быть в ТСВ для идентификациии лиц людей?",
    answers: {
      a: "не менее 100",
      b: "не менее 500",
      c: "не менее 300",
      d: "не менее 250"
    },
    description: "п.6.4 ТКП 664-2021",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Сколько пикселей на метр должно быть в ТСВ для идентификациии государственных регистрационных знаков транспортных средств?",
    answers: {
      a: "не менее 100",
      b: "не менее 300",
      c: "не менее 500",
      d: "не менее 250"
    },
    description: "п.6.4 ТКП 664-2021",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "С какой минимальной частатой кадров технические средства ТСВ должны обеспечивать формирование, передачу и запись видеоизображения?",
    answers: {
      a: "не менее 10 кадров в секунду",
      b: "не менее 12 кадров в секунду",
      c: "не менее 8 кадров в секунду",
      d: "не менее 4 кадров в секунду"
    },
    description: "п.6.10 ТКП 664-2021",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "На какое минимальное время резервный источник питания должен обеспечить работу технических средств ТСВ?",
    answers: {
      a: "не менее 3 часов",
      b: "не менее 2 часов",
      c: "не менее 24 часов",
      d: "не менее 8 часов"
    },
    description: "п.10.4 ТКП 664-2021",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Какую минимальную разрешающую способность должна иметь видеокамера ТСВ?",
    answers: {
      a: "не менее 1366 х 720 пикселей",
      b: "не менее 1280 х 720 пикселей",
      c: "не менее 1920 х 1080 пикселей",
      d: "не менее 800 х 600 пикселей"
    },
    description: "п.6.4 ТКП 664-2021",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Какой срок хранения видеоархива (время цикла обновления)?",
    answers: {
      a: "не менее 10 суток",
      b: "не менее 30 суток",
      c: "не менее 60 суток",
      d: "не менее 50 суток"
    },
    description: "п.6.8 ТКП 664-2021",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "На какой высоте от пола должны быть установлены органы управления и индикаторы обслуживаемого настенного оборудования?",
    answers: {
      a: "1.0 м",
      b: "1.6 +- 0,1 м",
      c: "2.5 +- 0,5 м",
      d: "3.0 м"
    },
    description: "п.6.11 ТКП 664-2021",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "На какой высоте от пола должно быть установлено необслуживаемое настенное оборудование?",
    answers: {
      a: "3.0 м, но не менее 0.1 м от потолка",
      b: "2.4 +- 0,1 м, но не менее 0.15 м от потолка",
      c: "1.5 +- 0,5 м",
      d: "2.0 м"
    },
    description: "п.6.11 ТКП 664-2021",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Какое максимальное сопротивление может быть у заземляющего устройства ТСВ?",
    answers: {
      a: "2 Ом",
      b: "4 Ом",
      c: "15.5 Ом",
      d: "20 Ом"
    },
    description: "п.11.7 ТКП 664-2021",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "В каком диапазоне температур должна обеспечиваться работоспособность технических средств ТСВ расположенных вне отапливаемых или кондиционируемых помещений?",
    answers: {
      a: "от -5 до +50 °С",
      b: "от -30 до +40 °С",
      c: "от -10 до +70 °С",
      d: "от 0 до +25 °С"
    },
    description: "п.6.3 ТКП 664-2021",
    correctAnswer: "b",
    userAnswer: null
  },



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




let gazpromData = [
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
    question: "Какой документ допускает юридических лиц к оказанию услуг по ТО ИТСО, по договорам?",
    answers: {
      a: "специального разрешения не требуется",
      b: "устав организации",
      c: "организационный приказ в организации эксплуатации ИТСО",
      d: "разрешение (лицензию) установленного образца на право осуществления данного вида работ"
    },
    description: "Закон № 175-3",
    correctAnswer: "d",
    userAnswer: null
  },
  {
    question: "Какой документ создается в филиалах Общества регламентирующий организацию работ то ТО ИТСО?",
    answers: {
      a: "распоряжение главного инженера филиала об организации работ по ТО ИТСО",
      b: "создается акт возобновления работ по ТО ИТСО",
      c: "создается любой документ из представленных вариантов",
      d: "приказ «Об организации эксплуатации ИТСО в филиале»"
    },
    description: "СТП СФШИ.02.82-2015 п.5.6",
    correctAnswer: "d",
    userAnswer: null
  },
  {
    question: "Какой ТКП устанавливает требования к порядку организации и проведения технического обслуживания ИТСО?",
    answers: {
      a: "ТКП 490-2013",
      b: "ТКП 427-2022",
      c: "ТКП 316-2013",
      d: "ТКП 472-2013"
    },
    description: "ТКП 472-2013 «Правила технического обслуживания технических систем охраны»",
    correctAnswer: "d",
    userAnswer: null
  },
  {
    question: "Какой ЛНПА Общества устанавливает порядок организации и проведения работ по ТО ИТСО?",
    answers: {
      a: "СТП СФШИ.02.82-2015",
      b: "СТП СФШИ.08.01-2023",
      c: "СТП СФШИ.09.02-2023",
      d: "ТР ЕАЭС 043/2017"
    },
    description: "СТП СФШИ.02.82-2015 «Руководство по эксплуатации ТСО в ОАО «Газпром трансгаз Беларусь»",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "Какие различают виды ТО ИТСО согласно ТКП 472-2013?",
    answers: {
      a: "плановое, неплановое, ремонт",
      b: "входной, плановый, неплановый",
      c: "текущий, средний, капитальный",
      d: "плановый, входной, капитальный"
    },
    description: "ТКП 472-2013 п.5.3",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "Какие различают виды контроля качества согласно ТКП 472-2013?",
    answers: {
      a: "входной, плановый, неплановый",
      b: "плановое, неплановое, ремонт",
      c: "текущий, средний, капитальный",
      d: "плановый, входной, капитальный"
    },
    description: "ТКП 472-2013 п.8.1.4",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "Какие различают виды ремонта систем охраны согласно ТКП 472-2013?",
    answers: {
      a: "текущий, средний, капитальный",
      b: "входной, плановый, неплановый",
      c: "плановое, неплановое, ремонт",
      d: "текущий, плановый, неплановый"
    },
    description: "ТКП 472-2013 п.5.6",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "Как оформляются результаты входного контроля качества ИТСО?",
    answers: {
      a: "регистрируются в Журналах входного контроля и оформляются Актом входного контроля материалов и оборудования",
      b: "делается отметка в Журнале регистрации работ по ТО и текущего ремонта",
      c: "оформляется Акт планового контроля качества ТО",
      d: "оформляется только Акт входного контроля материалов и оборудования"
    },
    description: "СТП СФШИ.02.82-2015 п.8.6.7",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "В каком случаи проводится внеплановый контроль качества ТО ИТСО согласно ТКП 472-2013?",
    answers: {
      a: "по претензиям, вызовам заказчика, уполномоченных лиц, эксплуатирующим ИТСО, органов, выдавших специальные разрешения (лицензии) на право ТО ИТСО",
      b: "по усмотрению Исполнителя",
      c: "при ложном срабатывании одного и того же шлейфа в течении квартала",
      d: "внеплановый контроль качества ТО ИТСО проводится согласно утвержденного графика"
    },
    description: "ТКП 472-2013 п.8.1.4.3",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "Какие различают виды ТО ИТСО согласно СТП СФШИ.02.82-2015?",
    answers: {
      a: "плановое, неплановое, ремонт, плановое техническое обслуживание при хранении",
      b: "входной, плановый, неплановый",
      c: "текущий, средний, капитальный",
      d: "плановый, входной, капитальный"
    },
    description: "СТП СФШИ.02.82-2015 п.8.1.3",
    correctAnswer: "a",
    userAnswer: null
  },
  {
    question: "В какие сроки проводится плановый контроль качества ТО ИТСО?",
    answers: {
      a: "не реже 1 раза в квартал",
      b: "согласно утвержденного плана-графика, но не реже 1 раза в год",
      c: "по претензиям, вызовам Заказчика",
      d: "не реже 1 раза в месяц"
    },
    description: "ТКП 472-2013 п.8.1.4.2",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "С какой периодичностью проводится ТО ИТСО в объеме Регламента № 1 согласно СТП СФШИ.02.82-2015?",
    answers: {
      a: "не реже двух раз в квартал",
      b: "не реже одного раза в месяц",
      c: "не реже одного раза в год",
      d: "не реже двух раз в год"
    },
    description: "СТП СФШИ.02.82-2015 п.8.3.2",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "С какой периодичностью проводится ТО ИТСО в объеме Регламента № 2 согласно СТП СФШИ.02.82-2015?",
    answers: {
      a: "не реже одного раз в месяц",
      b: "не реже одного раза в квартал",
      c: "не реже одного раза в год",
      d: "не реже двух раз в год"
    },
    description: "СТП СФШИ.02.82-2015 п.8.3.3",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Какие различают этапы проведения пуско-наладочных работ ИТСО согласно СТП СФШИ.02.83-2015?",
    answers: {
      a: "проведение работ, оформление приемо-сдаточной документации",
      b: "подготовительные работы, индивидуальные испытания, комплексное опробование",
      c: "проверка закладных устройств, разметка трасс, электрическая проверка и регулировка ИТСО",
      d: "монтажные работы, пуско-наладочные работы, приемка в эксплуатацию"
    },
    description: "СТП СФШИ.02.83-2015 п.5.1",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Какие различают уровни безопасности при организации охраны объектов с использованием ИТСО согласно ТКП 627-2018?",
    answers: {
      a: "первый, второй и третий",
      b: "низкий, средний, повышенный, высокий",
      c: "стандартный, особый, повышенной важности",
      d: "уровень А1, уровень А2, уровень Б1 и уровень Б2"
    },
    description: "ТКП 627-2018 п.5.2",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Какие различают уровни безопасности при организации охраны объектов с использованием ИТСО согласно ТКП 627-2018?",
    answers: {
      a: "первый, второй и третий",
      b: "низкий, средний, повышенный, высокий",
      c: "стандартный, особый, повышенной важности",
      d: "уровень А1, уровень А2, уровень Б1 и уровень Б2"
    },
    description: "ТКП 627-2018 п.5.2",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Необходимо ли блокировать на пролом (выем) строительные конструкции диаметр (ширина и высота) которых меньше 200мм?",
    answers: {
      a: "да",
      b: "нет",
      c: "необходимо только металлические конструкции",
      d: "необходимо только деревянные конструкции"
    },
    description: "ТКП 627-2018 п.4.2",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Каким образом подключаются антисаботажные (темперные) контакты ИТСО к приемно-контрольному прибору?",
    answers: {
      a: "в один шлейф с данным ИТСО",
      b: "на специальные клеммы прибора либо в отдельный шлейф программируемые в круглосуточном режиме охраны",
      c: "в клеммы запуска оповещения",
      d: "по усмотрению монтажной организации"
    },
    description: "ТКП 627-2018 п.4.3",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "На какие категории подразделяется объекты в зависимости от значимости (важности) и опасности согласно ТКП 627-2018?",
    answers: {
      a: "на три категории: низка, средняя, высокая",
      b: "на две категории: А и Б",
      c: "на четыре категории: низкая, средняя, высокая и повышенная",
      d: "на две категории: первая и вторая"
    },
    description: "ТКП 627-2018 п.4.7",
    correctAnswer: "b",
    userAnswer: null
  },
  {
    question: "Какой срок хранения видезаписи в системах видеонаблюдения?",
    answers: {
      a: "не менее 3 суток",
      b: "не менее 30 суток",
      c: "не менее 1 года",
      d: "не более 3 суток"
    },
    description: "ТКП 627-2018 п.6.3.1",
    correctAnswer: "b",
    userAnswer: null
  }
];



const mvdTestsButton = document.getElementById('mvd-tests');
const gazpromTestsButton = document.getElementById('gazprom-tests');
const title = document.getElementById('title');
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const questionNumber = document.getElementById('question-number')
const nextButton = document.getElementById('next');
const restartButton = document.getElementById('restart');
const examButton = document.getElementById('exam');
const trainingButton = document.getElementById('training');


let currentQuestion = 0;
let numCorrect = 0;
let testType = '';
let quizData = mvdData.slice();
let initialQuizData = quizData.slice();
quizData.sort(() => Math.random() - 0.5);



mvdTestsButton.addEventListener('click', startMvdTests);
gazpromTestsButton.addEventListener('click', startGazpromTests);
examButton.addEventListener('click', startExam);
trainingButton.addEventListener('click', startTraining);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}


function startMvdTests() {
  quizData = mvdData.slice();
  shuffle(quizData)
  // quizData.sort(() => Math.random() - 0.5);
  initialQuizData = quizData.slice();
  mvdTestsButton.style.display = 'none';
  gazpromTestsButton.style.display = 'none';
  examButton.style.display = 'inline-block';
  trainingButton.style.display = 'inline-block';
  title.innerHTML = 'Проектирование, монтаж, наладка, ТО ИТСО<br>Экзамен МВД</br>';
}

function startGazpromTests() {
  quizData = gazpromData.slice();
  shuffle(quizData)
  // quizData.sort(() => Math.random() - 0.5);
  initialQuizData = quizData.slice();
  mvdTestsButton.style.display = 'none';
  gazpromTestsButton.style.display = 'none';
  examButton.style.display = 'inline-block';
  trainingButton.style.display = 'inline-block';
  title.innerHTML = 'Проектирование, монтаж, наладка, ТО ИТСО<br>Техучеба специалистов по ТО ИТСО</br>';
}



function startExam() {
  testType = "Exam";
  const examQuestions = quizData.slice(0, 10);
  setQuizData(examQuestions);
  examButton.style.display = 'none';
  trainingButton.style.display = 'none';
  nextButton.style.display = 'inline-block';
  restartQuiz();
  buildQuiz()
}

function setQuizData(data) {
  quizData.length = 0;
  quizData.push(...data);
}

function startTraining() {
  testType = "Training";
  setQuizData([...initialQuizData]);
  examButton.style.display = 'none';
  trainingButton.style.display = 'none';
  nextButton.style.display = 'inline-block';
  restartQuiz()
  buildQuiz()
}


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
    if (testType == 'Exam') {
      if (quizData.length - numCorrect <= 2){
        quizContainer.innerHTML = '<h2 style="color: green; font-size: 2em">Экзамен сдан!</h2>';
        quizContainer.innerHTML += `<h4>Вы ответили правильно на ${numCorrect} из ${quizData.length} вопросов.</h4>`;
      } else {
        quizContainer.innerHTML = '<h3 style="color: red; font-size: 2em">Экзамен не сдан!</h3>';
        quizContainer.innerHTML += `<h4>Вы ответили правильно на ${numCorrect} из ${quizData.length} вопросов.</h4>`;
      }
      
    } else {
      quizContainer.innerHTML = '<h3>Тест завершен!</h3>';
      quizContainer.innerHTML += `<h4>Вы ответили правильно на ${numCorrect} из ${quizData.length} вопросов.</h4>`;
    }

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
  resultsContainer.innerHTML = '';
  nextButton.style.display = 'block';
  restartButton.style.display = 'none';
}



nextButton.addEventListener('click', nextQuestion);

restartButton.addEventListener('click', function() {
  mvdTestsButton.style.display = 'inline-block';
  gazpromTestsButton.style.display = 'inline-block';
  examButton.style.display = 'none';
  trainingButton.style.display = 'none';
  nextButton.style.display = 'none';
  restartButton.style.display = 'none';
  questionNumber.innerHTML = '';
  quizContainer.innerHTML = '';
  title.innerHTML = 'Проверка знаний специалистов по ТО ИТСО'
});

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