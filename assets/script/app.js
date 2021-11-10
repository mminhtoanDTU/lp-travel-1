
$('.beach__carousel-list').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false
});

const btnBarOpen = document.querySelector('.header__bar-icon');
const btnBarClose = document.querySelector('.header__bar-close');
const barList = document.querySelector('.header__bar-list');
const classActive = 'active'

btnBarOpen.addEventListener('click', () => {
    barList.classList.add(classActive);
});
btnBarClose.addEventListener('click', () => {
    barList.classList.remove(classActive);
});

document.addEventListener('click', (e) => {
    if (!barList.contains(e.target) && !btnBarOpen.contains(e.target)) {
        barList.classList.remove(classActive);
    }
})
