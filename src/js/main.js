// Это слайдер Slick. Вот
$('.brands__slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1430,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1230,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 680,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.catalog__slick').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: false
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

// Переключение кнопок меню

var menuButtonOpen = document.querySelector('.header-top__button-menu')
var menuButtonClose = document.querySelector('.header-top__button-menu--close')
var menuMobileOpen = document.querySelector('.header__mobile-menu')

// 480
menuButtonOpen.addEventListener('click', function() {
    menuButtonOpen.classList.toggle('hidden')
    menuButtonClose.classList.toggle('hidden')
    menuMobileOpen.classList.toggle('hidden')
})

menuButtonClose.addEventListener('click', function() {
    menuButtonOpen.classList.toggle('hidden')
    menuButtonClose.classList.toggle('hidden')
    menuMobileOpen.classList.toggle('hidden')
})

// 320
var menuButtonOpenMobile = document.querySelector('.header-mobile__button-menu--mobile')
var menuButtonCloseMobile = document.querySelector('.header-mobile__button-menu--mobile--closed')
var menuMobileOpenMobile = document.querySelector('.header__mobile-menu')

menuButtonOpenMobile.addEventListener('click', function() {
    menuButtonOpenMobile.classList.toggle('hidden')
    menuButtonCloseMobile.classList.toggle('hidden')
    menuMobileOpenMobile.classList.toggle('hidden')
})

menuButtonCloseMobile.addEventListener('click', function() {
    menuButtonOpenMobile.classList.toggle('hidden')
    menuButtonCloseMobile.classList.toggle('hidden')
    menuMobileOpenMobile.classList.toggle('hidden')
})

// Вызов попапа Callback
var openPopupButtons = document.querySelectorAll('.popup__button')
var popup = document.querySelector('.callback-popup')
var closePopupCallback = document.querySelector('.popup__close')

openPopupButtons.forEach(function(domElement) {
    domElement.addEventListener('click', function() {
        popup.classList.remove('hidden')
    })
})

closePopupCallback.addEventListener('click', function() {
    popup.classList.add('hidden')
})

// Скрытие попапа при клике на пустом месте
$(".callback-popup").on('click', function (e) {
	if (e.target == this) $(".callback-popup").addClass('hidden');
})