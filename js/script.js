'use strict'

// =================================================Модуль анімація цифрового лічильника
//Цифри котрі мають анимуватись обгортаємо тегом з атрибутом data-digits-counter
window.addEventListener('load', windowLoad);

function windowLoad() { 

	// Функція ініціалізації
	function digitsCountersInit(digitsCountersItems) {
		let digitsCounters = digitsCountersItems ? digitsCountersItems : document.querySelectorAll("[data-digits-counter]");
		if (digitsCounters.length) {
			digitsCounters.forEach(digitsCounter => {
				digitsCountersAnimate(digitsCounter);
			});
		}
	}

	// Функція анімації
	function digitsCountersAnimate(digitsCounter) {
		let startTimestamp = null;
		const duration = parseInt(digitsCounter.dataset.digitsCounterSpeed) ? parseInt(digitsCounter.dataset.digitsCounterSpeed) : 1000; //Час анімації
		const startValue = parseInt(digitsCounter.innerHTML);
		const startPosition = 0;
		const step = (timestamp) => {
			if (!startTimestamp) startTimestamp = timestamp;
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			digitsCounter.innerHTML = Math.floor(progress * (startPosition + startValue));
			if (progress < 1) {
				window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
	}

	/* Пуск при завантажені сторінки */
	//digitsCountersInit();

	//--------Пуск при скролі до блока:
		let options = {
			threshold: 0.5
		};

		let observer = new IntersectionObserver((entries, observer) => {
			entries.forEach(entry => {
				if(entry.isIntersecting) {
					const targetElement = entry.target;
					const digitsCountersItems = targetElement.querySelectorAll('[data-digits-counter]');
					if (digitsCountersItems.length) {
						digitsCountersInit(digitsCountersItems);
					}
					//Вимкнути після спрацювання
					//observer.unobserve(targetElement);
				}
			});
		}, options);

		let sections = document.querySelectorAll('.numb__date') //Батьківський єлемент, який з'являється на екрані
		if(sections.length) {
			sections.forEach(section => {
				observer.observe(section);
			});
		}
 } 
// =====================================================================================










/* =========================================================== БУРГЕР МЕНЮ */
//Стили для элемента меню который скрываем. Родительский элемент или тег nav или весь хеадер
/* 
.main-menu
    @media (max-width: 939.98px)
        position: absolute
        left: -100%
        top: 0
        width: 100%
        background: #000
        min-height: 100vh
        z-index: 4
        transition: all 0.3s 

.main-menu_active
    left: 0
		
*/

const burger = document.querySelector('.hamburger'),
	hideMenu = document.querySelector('.main-menu'), //Блок который скрывается
	menuLink = document.querySelectorAll('.main-menu__item'); //Класс элементов меню, по которым кликаем 

		burger.addEventListener('click', function() {
			hideMenu.classList.toggle('main-menu__link_active'); //Класс активности
			burger.classList.toggle('hamburger_close');

		});

		menuLink.forEach(function(item) {
			item.addEventListener('click', function() {
				hideMenu.classList.toggle('main-menu__link_active'); //Класс активности
				burger.classList.toggle('hamburger_close');
				document.body.style.overflow = '';
			});
		});



/* =========================================================== Движение элементов по прокрутке страницы */

/* -------------------------------------------Движение ввурх */
function onEntryToTop(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('to-top'); //Добавляем класс активности
		} else change.target.classList.remove('to-top'); // Оставляем - будет срабатывать каждый раз
	});
}

let optionsToTop = {
		threshold: [0.5] 
};

let observerToTop = new IntersectionObserver(onEntryToTop, optionsToTop); 
let elementsToTop = document.querySelectorAll('.to-top_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsToTop) { 
	observerToTop.observe(elm); 
}



/* ---------------------------------------Движение слева на право */
function onEntryLeftToRight(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('left-to-right'); //Добавляем класс активности
		} else change.target.classList.remove('left-to-right'); // Оставляем - будет срабатывать каждый раз
	});
}

let optionsLeftToRight = {
		threshold: [0.5] 
};

let observerLeftToRight = new IntersectionObserver(onEntryLeftToRight, optionsLeftToRight); 
let elementsLeftToRight = document.querySelectorAll('.left-to-right_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsLeftToRight) { 
	observerLeftToRight.observe(elm); 
}



/* ---------------------------------------Движение справа на лево */
function onEntryRightToLeft(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('right-to-left'); //Добавляем класс активности
		} else change.target.classList.remove('right-to-left'); // Оставляем - будет срабатывать каждый раз
	});
}

let optionsRightToLeft = {
		threshold: [0.5] 
};

let observerRightToLeft = new IntersectionObserver(onEntryRightToLeft, optionsRightToLeft); 
let elementsRightToLeft = document.querySelectorAll('.right-to-left_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsRightToLeft) { 
	observerRightToLeft.observe(elm); 
}


/* ---------------------------------------Движение поворот */
function onEntryRotate(entry) {
	entry.forEach(change => {
		if (change.isIntersecting) {
		 change.target.classList.add('rotate'); //Добавляем класс активности
		} else change.target.classList.remove('rotate'); // Оставляем - будет срабатывать каждый раз
	});
}

let optionsRotate = {
		threshold: [0.5] 
};

let observerRotate = new IntersectionObserver(onEntryRotate, optionsRotate); 
let elementsRotate = document.querySelectorAll('.rotate_dote'); // Класс- метка. или любой класс к которому хотим подвязать

for (let elm of elementsRotate) { 
	observerRotate.observe(elm); 
}