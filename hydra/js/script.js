"use strict"

// window.addEventListener('load', windowLoad)

// let isMobile

// function windowLoad() {
	// isMobile = window.navigator.userAgentData.mobile
	// isMobile ? document.body.setAttribute('data-touch', '') : null

	// document.addEventListener('click', documentActions)

	// const coundown = document.querySelectorAll('[data-coundown]')
	// coundown.length ? initCoundown(coundown) : null

	// dynamicAdaptHeader();
	// slidersInit();
// }
	document.addEventListener('click', documentActions)
	dynamicAdaptHeader();
	slidersInit();
function documentActions(e) {
	const targetElement = e.target
	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('scroll-lock')
		document.documentElement.classList.toggle('open-menu')
	}
}

function dynamicAdaptHeader() {
	const headerMenu = document.querySelector('.menu-header__body')

	const headerButtons = document.querySelector('.header__buttons')

	const buttonsBody = document.querySelector('.buttons__body')

	const media = window.matchMedia("(max-width: 479.98px)")

	media.addEventListener("change", (e) => {
		dynamicAdaptHeaderInit(media)
	})
		dynamicAdaptHeaderInit(media)

	function dynamicAdaptHeaderInit(media) {
		if (media.matches) {
			headerMenu.insertAdjacentElement('beforeend', buttonsBody)
		} 
		else {
			headerButtons.insertAdjacentElement('beforeend', buttonsBody)
		}
	}
}

// function slidersInit() {
// 	if (document.querySelector('.slider-contacts')) {
// 		const sliderContacts = new Swiper('.slider-contacts', {
// 			loop: true,
// 			// Navigation arrows
// 				navigation: {
// 				nextEl: '.contacts__next',
// 				prevEl: '.contacts__prev',
// 			},
// 			breakpoints: {
// 				320: {
// 					slidesPerView: 1,
// 					spaceBetween: 10,
// 				},
// 				768: {
// 					slidesPerView: 2,
// 					spaceBetween: 20,
// 				},
// 				1050: {
// 					slidesPerView: 3,
// 					spaceBetween: 25,
// 				},
// 			},
// 		});
// 	}
// 	if (document.querySelector('.slider-services')) {
// 		const sliderServices = new Swiper('.slider-services', {
// 			loop: true,
// 			// Navigation arrows
// 				navigation: {
// 				nextEl: '.services__next',
// 				prevEl: '.services__prev',
// 			},
// 			breakpoints: {
// 				320: {
// 					slidesPerView: 1,
// 					spaceBetween: 10,
// 				},
// 				450: {
// 					slidesPerView: 2,
// 					spaceBetween: 10,
// 				},
// 				767: {
// 					slidesPerView: 3,
// 					spaceBetween: 10,
// 				},
// 				1050: {
// 					slidesPerView: 4,
// 					spaceBetween: 10,
// 				},
// 			},
// 		});
// 	}
// }
function slidersInit() {
   const contactsSlider = document.querySelector('.slider-contacts');
   if (contactsSlider) {
      new Swiper(contactsSlider, {
      loop: true,
      navigation: {
      nextEl: '.contacts__next',
		prevEl: '.contacts__prev',
      },
      breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      768: { slidesPerView: 2, spaceBetween: 20 },
      1050: { slidesPerView: 3, spaceBetween: 25 },
      },
   });
}

	const servicesSlider = document.querySelector('.slider-services');
	if (servicesSlider) {
   new Swiper(servicesSlider, {
      loop: true,
      navigation: {
      nextEl: '.services__next',
      prevEl: '.services__prev',
      },
      breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      500: { slidesPerView: 2, spaceBetween: 10 },
      767: { slidesPerView: 3, spaceBetween: 10 },
      1050: { slidesPerView: 4, spaceBetween: 10 },
      },
   });
}
}