/*
Документація по роботі у шаблоні:
Документація слайдера: https://swiperjs.com/
Сніппет(HTML): swiper
*/

// Підключаємо слайдер Swiper з node_modules
// При необхідності підключаємо додаткові модулі слайдера, вказуючи їх у {} через кому
// Приклад: { Navigation, Autoplay }
import Swiper from "swiper"
import { Scrollbar, Navigation, EffectFade, Autoplay } from "swiper/modules"
/*
Основні модулі слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Детальніше дивись https://swiperjs.com/
*/

// Стилі Swiper
// Базові стилі
import "../../scss/base/swiper.scss"
// Повний набір стилів з scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Повний набір стилів з node_modules
// import 'swiper/css';

// Ініціалізація слайдерів
function initSliders() {
  // Список слайдерів
  // Перевіряємо, чи є слайдер на сторінці
  if (document.querySelector(".swiper123")) {
    // Вказуємо склас потрібного слайдера
    // Створюємо слайдер
    new Swiper(".swiper123", {
      // Вказуємо склас потрібного слайдера
      // Підключаємо модулі слайдера
      // для конкретного випадку
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 0,
      //autoHeight: true,
      speed: 800,

      //touchRatio: 0,
      //simulateTouch: false,
      //loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Ефекти
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагінація
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "вліво/вправо"
      navigation: {
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      },
      /*
			// Брейкпоінти
			breakpoints: {
				640: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
      // Події
      on: {},
    })
  }

  if (document.querySelector(".doctors__slider")) {
    let countSlides = 4
    if (document.querySelector(".doctors__slider.doctors__slider_more")) {
      countSlides = 5
      console.log("1")
    }

    new Swiper(".doctors__slider", {
      modules: [Scrollbar],
      observer: true,
      observeParents: true,
      speed: 500,
      lazyPreloaderClass: "preloader",

      // mousewheel: true,
      // sensitivity: 0.1,
      // thresholdDelta: 2,
      // releaseOnEdges: true,
      eventsTarget: ".doctors__slider .swiper-wrapper",

      scrollbar: {
        el: ".doctors__slider .doctors__scrollbar",
        draggable: true,
        dragClass: "scrollbar__drag",
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1230: {
          slidesPerView: countSlides,
          spaceBetween: 20,
        },
      },
    })
  }

  if (document.querySelector(".beforeafter__slider")) {
    new Swiper(".beforeafter__slider", {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,

      speed: 500,
      lazyPreloaderClass: "preloader",

      navigation: {
        prevEl: ".beforeafter__slider .button-prev",
        nextEl: ".beforeafter__slider .button-next",
      },
    })
  }

  if (document.querySelector(".reviews-slider-sec__slider")) {
    new Swiper(".reviews-slider-sec__slider", {
      modules: [Navigation],
      observer: true,
      observeParents: true,
      loop: true,

      speed: 500,
      lazyPreloaderClass: "preloader",

      navigation: {
        prevEl: ".reviews-slider-sec__slider .button-prev",
        nextEl: ".reviews-slider-sec__slider .button-next",
      },

      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        992: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1230: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
      },
    })
  }

  if (document.querySelector(".photo__slider")) {
    new Swiper(".photo__slider", {
      modules: [Navigation, EffectFade, Autoplay],
      observer: true,
      observeParents: true,
      speed: 300,
      slidesPerView: 1,
      spaceBetween: 20,
      lazyPreloaderClass: "preloader",
      loop: true,
      effect: "fade",

      navigation: {
        prevEl: ".photo__slider .button-prev",
        nextEl: ".photo__slider .button-next",
      },

      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    })
  }
}
// Скролл на базі слайдера (за класом swiper scroll для оболонки слайдера)
function initSlidersScroll() {
  let sliderScrollItems = document.querySelectorAll(".swiper_scroll")
  if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
      const sliderScrollItem = sliderScrollItems[index]
      const sliderScrollBar = sliderScrollItem.querySelector(".swiper-scrollbar")
      const sliderScroll = new Swiper(sliderScrollItem, {
        observer: true,
        observeParents: true,
        direction: "vertical",
        slidesPerView: "auto",
        freeMode: {
          enabled: true,
        },
        scrollbar: {
          el: sliderScrollBar,
          draggable: true,
          snapOnRelease: false,
        },
        mousewheel: {
          releaseOnEdges: true,
        },
      })
      sliderScroll.scrollbar.updateSize()
    }
  }
}

window.addEventListener("load", function (e) {
  // Запуск ініціалізації слайдерів
  initSliders()
  // Запуск ініціалізації скролла на базі слайдера (за класом swiper_scroll)
  //initSlidersScroll();
})
