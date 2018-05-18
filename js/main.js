$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items: 1,
        autoplay:true, //Автозапуск слайдера
        smartSpeed:1000, //Время движения слайда
        autoplayTimeout:2000,
        loop: true,
        nav:false,
        animateInClass: true
    });
});