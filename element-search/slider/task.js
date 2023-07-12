const allSlides = Array.from(document.querySelectorAll(".slider__item")); 
let currentSlide = allSlides.findIndex(el => el.classList.contains('slider__item_active'))
// Кнопки
const slidePrev = document.querySelector('.slider__arrow_prev');
const slideNext = document.querySelector('.slider__arrow_next');

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function previousSlide() {
    goToSlide(currentSlide - 1);
}

function goToSlide(n) {
    allSlides[currentSlide].classList.remove('slider__item_active')    // удаляем актив у предидущего
    currentSlide = (n + allSlides.length) % allSlides.length;       // изменяем номер слайда
    allSlides[currentSlide].classList.add('slider__item_active')    // добавляем актив новому
}
//      Активируем кнопки по клику
slideNext.onclick = function() {
    nextSlide();
};
slidePrev.onclick = function() {
    previousSlide();
};