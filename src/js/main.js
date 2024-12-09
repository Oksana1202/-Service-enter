document.addEventListener('DOMContentLoaded', function () {
  const burgerButton = document.querySelector('.header_button.burger1')
  const closeButton = document.querySelector('.header_button_burger')
  const mainBurger = document.querySelector('.main_burger')

  burgerButton.addEventListener('click', function () {
    mainBurger.classList.add('active')
  })

  closeButton.addEventListener('click', function () {
    mainBurger.classList.remove('active')
  })
})

document.addEventListener('click', function (el) {
  if (el.target.classList.contains('menu_item')) {
    let menu = document.querySelectorAll('.border-left')
    menu.forEach(function (elem) {
      elem.classList.remove('border-left')
    })

    el.target.classList.add('border-left')
  }
})

let swiper = undefined
function createSwiper() {
  swiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    freeMode: true,
    mousewheel: true,
    observer: true,
    observeParents: true,
    keyboard: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

addEventListener('resize', function () {
  if (window.innerWidth < 769 && !swiper) {
    createSwiper()
  }

  if (window.innerWidth > 768 && swiper) {
    swiper.destroy()
    swiper = undefined
  }
})
if (window.innerWidth < 769 && !swiper) {
  createSwiper()
}
