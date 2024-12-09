let swiper2 = undefined
function createSwiper2() {
  swiper2 = new Swiper('.swiper-container-2', {
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
  if (window.innerWidth < 769 && !swiper2) {
    createSwiper2()
  }

  if (window.innerWidth > 768 && swiper2) {
    swiper2.destroy()
    swiper2 = undefined
  }
})
if (window.innerWidth < 769 && !swiper2) {
  createSwiper2()
}
