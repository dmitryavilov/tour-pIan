var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  spaceBetween: 90
});