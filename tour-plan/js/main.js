var hotelSlider = new Swiper(".hotel-slider", {
  loop: true,
  navigation: {
    nextEl: ".hotel-slider__button--next",
    prevEl: ".hotel-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  spaceBetween: 90,
});

var reviewsSlider = new Swiper(".reviews-slider", {
  loop: true,
  navigation: {
    nextEl: ".reviews-slider__button--next",
    prevEl: ".reviews-slider__button--prev",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  spaceBetween: 90,
});

const menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', function(){
  document.querySelector('.navbar-menu').classList.toggle('navbar-menu_visible');
});

$(".newsletter").parallax({ imageSrc: "./img/newsletter/bg.jpg" });
