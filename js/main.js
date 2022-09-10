$(function(){
    $('.title').bgSwitcher({
        images: ['images/background1.jpg','images/background2.jpg','images/background3.jpg','images/background4.jpg','images/background5.jpg'],
        interval: 5000,
        loop: true
    });

    $('.slider').slick({
        arrows: false,
        autoplay: true,
        dots: true,
        centerMode: true,
        centerPadding: '35%',
    });

    $(document).ready(function(){
        $('.fuwat').css('visibility','hidden');
        $(window).scroll(function(){
         var windowHeight = $(window).height(),
             topWindow = $(window).scrollTop();
         $('.fuwat').each(function(){
          var objectPosition = $(this).offset().top;
          if(topWindow > objectPosition - windowHeight + 200){
           $(this).addClass("fuwatAnime");
          }
         });
        });
      });
});

