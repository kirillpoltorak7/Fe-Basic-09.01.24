import * as $ from 'jquery';
import mobileNav from './modules/mobile-nav.js';
import tabs from './modules/tabs.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

mobileNav();
tabs();


const swiperTeam = new Swiper('.swiper-team', {
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	allowTouchMove: false,
});

const swiperAboutUs = new Swiper('.about-swiper', {
	loop: true,

	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},

	allowTouchMove: false,
});