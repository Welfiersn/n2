// Адаптивное меню
var headerTop = document.querySelector('.header-top');
var headerLang = document.querySelector('.header-top__lang');
var headerBurger = document.querySelector('.header-menu');

var headerMenuNodeList = document.querySelectorAll('.header-bottom__menu');
var headerMenuArray = Array.from(headerMenuNodeList);

var headerColumnsNodeList = document.querySelectorAll('.header-bottom__column');
var headerColumnsArray = Array.from(headerColumnsNodeList);
var headerColumnOne = headerColumnsArray[0];
var headerColumnThree = headerColumnsArray[2]

window.addEventListener('resize',function(){
    function adaptiveHeader() {
		var ww = document.documentElement.clientWidth;
		adaptiveMenu(ww);
		adaptiveLang(ww);
	}
	function adaptiveLang(ww) {
		if (ww < 768) {
			headerBurger.prepend(headerLang);
		} else {
			headerTop.prepend(headerLang);
		}
	}
	function adaptiveMenu(ww) {
		if (ww < 768) {
			for (var i = 0; i < headerMenuArray.length; i++) {
				headerBurger.append(headerMenuArray[i]);
			}
		} else {
			headerColumnOne.append(headerMenuArray[0]);
			headerColumnThree.append(headerMenuArray[1]);
		}
	}
	adaptiveHeader();
});
// Без динамики
function adaptiveHeader() {
	let ww = document.documentElement.clientWidth;
	adaptiveMenu(ww);
	adaptiveLang(ww);
}
function adaptiveLang(ww) {
	if (ww < 768) {
		headerBurger.prepend(headerLang);
	} else {
		headerTop.prepend(headerLang);
	}
}
function adaptiveMenu(ww) {
	if (ww < 768) {
		for (var i = 0; i < headerMenuArray.length; i++) {
			headerBurger.append(headerMenuArray[i]);
		}
	} else {
		headerColumnOne.append(headerMenuArray[0]);
		headerColumnThree.append(headerMenuArray[1]);
	}
}
adaptiveHeader();

// Бургер
var headerBurgerOpen = document.querySelector('.header-menu__icon');
headerBurgerOpen.onclick = () => {
	headerBurgerOpen.classList.toggle('header-menu__icon--active');
   	headerBurger.classList.toggle('header-menu--active');
}
