document.addEventListener('DOMContentLoaded', function () {
	const openMenu = document.querySelector('.open-menu');
	const closeMenu = document.querySelector('.close-menu');
	const header = document.querySelector('.header')
	const html = document.querySelector('html')

	openMenu.addEventListener('click', function (event) {
		html.classList.add('no-scroll')
		header.classList.add('show-menu');
		setTimeout(() => {
			header.classList.add('slide-menu');
		}, 200);
	})

	closeMenu.addEventListener('click', function (event) {
		html.classList.remove('no-scroll')
		header.classList.remove('slide-menu');
		setTimeout(() => {
			header.classList.remove('show-menu');
		}, 200);
	})
});