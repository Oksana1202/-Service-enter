const showMoreBtn2 = document.getElementById('showMoreBtn2')
const hiddenTabletSlides = document.querySelectorAll('.hidden-tablet2')
const hiddenDesktopSlides = document.querySelectorAll('.hidden-desktop2')
let isExpanded = false

// Функция для обновления видимости элементов
function updateVisibility() {
  const windowWidth = window.innerWidth

  // Скрываем или показываем элементы в зависимости от ширины окна
  if (windowWidth <= 769) {
  } else if (windowWidth > 769 && windowWidth < 1440) {
    hiddenTabletSlides.forEach((slide) => {
      slide.style.display = isExpanded ? 'block' : 'none'
    })
    hiddenDesktopSlides.forEach((slide) => {
      slide.style.display = 'none'
    })
  } else if (windowWidth >= 1440) {
    // Для десктопов
    hiddenTabletSlides.forEach((slide) => {
      slide.style.display = 'block'
    })
    hiddenDesktopSlides.forEach((slide) => {
      slide.style.display = isExpanded ? 'block' : 'none'
    })
  }
}

// Функция для обновления текста кнопки
function updateButtonText() {
  const buttonText = showMoreBtn2.querySelector('.show-more_text2')
  buttonText.innerText = isExpanded ? 'Скрыть' : 'Показать все' // Обновляем текст кнопки
}

// Обработчик события для кнопки
showMoreBtn2.addEventListener('click', function () {
  isExpanded = !isExpanded // Переключаем состояние
  updateVisibility() // Обновляем видимость
  updateButtonText() // Обновляем текст кнопки
})

// Инициализация видимости при загрузке страницы
updateVisibility()

// Обновление видимости при изменении размера окна
window.addEventListener('resize', updateVisibility)
