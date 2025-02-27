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
      // Для каждого элемента добавляем класс visible с задержкой
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 200); // Задержка для каждого элемента
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

    // Применяем анимацию для всех пунктов с задержкой
    pointElements.forEach((element, index) => {
      setTimeout(() => {
        element.classList.add('visible');
      }, index * 200); // Задержка для каждого элемента
    });
  }
});
