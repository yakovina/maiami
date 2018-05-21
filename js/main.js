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

    function checkWidth() {
          var windowWidth = $('body').innerWidth(),
              elem = $(".navigation"); // лучше сохранять объект в переменную, многократно чтобы не насиловать 
                                          // страницу для поиска нужного элемента
          if(windowWidth < 720){
            elem.removeClass('animated');
          }
        }
    checkWidth(); 
    $(window).resize(function(){
        checkWidth(); // проверит при изменении размера окна клиента
      });
});