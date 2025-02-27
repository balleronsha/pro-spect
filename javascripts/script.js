// Функция для активации видимости элементов при скролле
window.addEventListener('scroll', function () {
  const section2 = document.querySelector('.sec2');
  const zdanie1 = document.querySelector('.zdanie1');
  const textElements = document.querySelectorAll(
    '.comp, .text1, .text2, .text3, .text4, .text5'
  );

  // Получаем расстояние от верхней границы окна до секции
  const sectionTop = section2.getBoundingClientRect().top;
  const sectionHeight = section2.offsetHeight;

  // Проверяем, когда секция попадает в область видимости
  if (sectionTop < window.innerHeight && sectionTop + sectionHeight > 0) {
    // Применяем класс visible для изображения и текста
    zdanie1.classList.add('visible');
    textElements.forEach((element, index) => {
      // Для каждого элемента добавляем класс visible с задержкой 0.3 сек
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 500); // Задержка 0.3 сек для каждого элемента
    });
  }
});

// Функция для активации анимации при скролле 3 блок
window.addEventListener('scroll', function () {
  const sec3 = document.querySelector('.sec3');
  const zdanie2 = document.querySelector('.zdanie2');
  const napr = document.querySelector('.napr');
  const pointElements = document.querySelectorAll(
    '.point1, .point2, .point3, .point4, .point5, .point6, .point7'
  );

  // Получаем расстояние от верхней границы окна до секции
  const sec3Top = sec3.getBoundingClientRect().top;
  const sec3Height = sec3.offsetHeight;

  // Проверяем, когда секция попадает в область видимости
  if (sec3Top < window.innerHeight && sec3Top + sec3Height > 0) {
    // Активируем анимацию для изображения и текста
    zdanie2.classList.add('visible');
    napr.classList.add('visible');

    // Применяем анимацию для всех пунктов с задержкой 0.3 сек
    pointElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 700); // Задержка 0.3 сек для каждого элемента
    });
  }
});
// 4 секцияяяяяяяяя
// Функция для отслеживания скролла
window.addEventListener('scroll', function () {
  const sec4 = document.querySelector('.sec4');
  const strlElements = document.querySelectorAll(
    '.strl1, .strl2, .strl3, .strl4, .strl5, .strl6, .strl7, .strl8, .strl9, .strl10, .strl11, .strl12'
  );
  const akaElements = document.querySelectorAll(
    '.aka1, .aka2, .aka3, .aka4, .aka5, .aka6, .aka7, .aka8, .aka9, .aka10, .aka11'
  );

  // Проверяем, когда секция 4 попадает в область видимости
  const sec4Top = sec4.getBoundingClientRect().top;
  const sec4Height = sec4.offsetHeight;

  if (sec4Top < window.innerHeight && sec4Top + sec4Height > 0) {
    // Добавляем класс 'visible' для каждого элемента, чтобы анимация началась
    strlElements.forEach((strl, index) => {
      setTimeout(() => {
        strl.classList.add('visible');
      }, index * 500); // Задержка для каждого элемента
    });

    akaElements.forEach((aka, index) => {
      setTimeout(() => {
        aka.classList.add('visible');
      }, index * 500); // Задержка для каждого элемента
    });
  }
});
// 5 секцииииииия
// Создаем IntersectionObserver для отслеживания появления элемента в области видимости
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      // Если элемент вошел в область видимости
      if (entry.isIntersecting) {
        const posl = entry.target;
        posl.classList.add('visible'); // Добавляем класс visible для анимации

        observer.unobserve(posl); // Прекращаем наблюдение за этим элементом, чтобы анимация сработала только один раз
      }
    });
  },
  { threshold: 0.5 }
); // Элемент должен быть хотя бы на 50% видимым

// Наблюдаем за элементом
const posl = document.querySelector('.posl');
observer.observe(posl);
