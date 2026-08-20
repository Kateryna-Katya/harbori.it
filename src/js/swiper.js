import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const howSwiper = new Swiper('.how-swiper', {
  modules: [Navigation, Autoplay],

  loop: true,
  speed: 700,

  slidesPerView: 1.14,
  spaceBetween: 16,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.how-btn-next',
    prevEl: '.how-btn-prev',
  },

  breakpoints: {
    1440: {
      slidesPerView: 3,
      spaceBetween: 32,

      autoplay: false,
    },
  },
});