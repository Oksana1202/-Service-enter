let swiper3 = undefined;
function createSwiper3() {
  swiper3 = new Swiper(".swiper-container-3", {
    slidesPerView: "auto",
    freeMode: true,
    mousewheel: true,
    observer: true,
    observeParents: true,
    keyboard: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
}

addEventListener("resize", function () {
  if (window.innerWidth < 769 && !swiper3) {
    createSwiper3();
  }

  if (window.innerWidth > 768 && swiper3) {
    swiper3.destroy();
    swiper3 = undefined;
  }
});
if (window.innerWidth < 769 && !swiper3) {
  createSwiper3();
}
