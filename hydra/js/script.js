"use strict"

window.addEventListener('load', windowLoad)

let isMobile

function windowLoad() {
	isMobile = window.navigator.userAgentData.mobile
	isMobile ? document.body.setAttribute('data-touch', '') : null

	document.addEventListener('click', documentActions)

	const coundown = document.querySelectorAll('[data-coundown]')
	coundown.length ? initCoundown(coundown) : null

	dynamicAdaptHeader();
	slidersInit();
}
function documentActions(e) {
	const targetElement = e.target
	if (targetElement.closest('.icon-menu')) {
		document.body.classList.toggle('scroll-lock')
		document.documentElement.classList.toggle('open-menu')
	}
}
const btn = document.querySelector(".technologies__button");
const block = document.querySelector(".technologies__body");

btn.addEventListener("click", () => {
	block.classList.toggle("active");
   btn.classList.toggle("active");
});
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

	const servicesSlider = document.querySelector('.services__slider');
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
   
	const technologiesSlider = document.querySelector('.technologies__slider');
	if (technologiesSlider) {
   new Swiper(technologiesSlider, {
      loop: true,
      navigation: {
      nextEl: '.technologies__next',
      prevEl: '.technologies__prev',
      },
      breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      600: { slidesPerView: 2, spaceBetween: 20 },
      767: { slidesPerView: 3, spaceBetween: 40 },
      1050: { slidesPerView: 4, spaceBetween: 70 },
      },
   });

}



	const howSlider = document.querySelector('.how__slider');
	if (howSlider) {
   new Swiper(howSlider, {
      loop: true,
      navigation: {
      nextEl: '.how__next',
      prevEl: '.how__prev',
      },
      breakpoints: {
      320: { slidesPerView: 1, spaceBetween: 10 },
      600: { slidesPerView: 2, spaceBetween: 20 },
      767: { slidesPerView: 3, spaceBetween: 20 },
      1050: { slidesPerView: 4, spaceBetween: 20 },
      },
   });
}
}
window.addEventListener("scroll", function() {
   const header = document.querySelector(".header");
   if (window.scrollY > 50) {
      header.classList.add("active");
   } else {
      header.classList.remove("active");
   }
});