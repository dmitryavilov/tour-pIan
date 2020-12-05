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

const menuButton = document.querySelector('.menu-button'),
      modalOverlay = document.querySelector('.modal__overlay'),
      modalDialog = document.querySelector('.modal__dialog'),
      closeBtn = document.querySelector('.modal__close'),
      modalButton = document.querySelector('[data-toggle=modal]');
const openModal = () => {
  modalOverlay.classList.add('modal__overlay--active');
  modalDialog.classList.add('modal__dialog--active');
  document.querySelector('body').style.overflowY="hidden";
}

const closeModal = (e) => {
  event.preventDefault();
  modalOverlay.classList.remove('modal__overlay--active');
  modalDialog.classList.remove('modal__dialog--active');
  document.querySelector('body').style.overflowY="scroll";
}

const keyPress = (e) => {
  if (e.keyCode == 27){
    modalOverlay.classList.remove('modal__overlay--active');
    modalDialog.classList.remove('modal__dialog--active');
    document.querySelector('body').style.overflowY="scroll";
  }
}
modalButton.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', keyPress);

menuButton.addEventListener('click', function(){
  document.querySelector('.navbar-menu').classList.toggle('navbar-menu_visible');
});

$(".newsletter").parallax({ imageSrc: "./img/newsletter/bg.jpg" });
