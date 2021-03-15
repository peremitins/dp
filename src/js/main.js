/**
  * название функции
  *
  * @param {number} first - первое число
  * @returns {number}
  */

// btn-anim
const menuBtn = document.querySelector('.header__btn');

menuBtn.addEventListener('click', function () {
	menuBtn.classList.toggle('active');
});