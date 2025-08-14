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
	if (document.querySelector('.slider-contacts')) {
		const sliderContacts = new Swiper('.slider-contacts', {
			loop: true,
			// Navigation arrows
				navigation: {
				nextEl: '.contacts__next',
				prevEl: 'contacts__prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				1050: {
					slidesPerView: 3,
					spaceBetween: 24,
				},
			},
			
		});
	}
}