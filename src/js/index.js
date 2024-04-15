import * as $ from 'jquery';
import mobileNav from './modules/mobile-nav.js';
import tabs from './modules/tabs.js';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

mobileNav();
tabs();

const swiper = new Swiper('.swiper', {

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},

});