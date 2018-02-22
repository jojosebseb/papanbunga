var arrowNext = '<div class="arrow-box next"><div class="arrow"></div</div>';
var arrowPrev = '<div class="arrow-box prev"><div class="arrow"></div</div>';
var arrowNextWhite = '<div class="arrow-box next invert"><div class="arrow"></div</div>';
var arrowPrevWhite = '<div class="arrow-box prev invert"><div class="arrow"></div</div>';


$('#indexSlider > .slide-container').slick({
    nextArrow: arrowNext,
    prevArrow: arrowPrev,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
});

$('#navbar .has-sub').on('click', function(){
    $(this).toggleClass('active');
    $(this).find('.submenu').fadeToggle(300);
});

$('#indexProdSlide').slick({
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        arrows: true,
        nextArrow: arrowNext,
        prevArrow: arrowPrev,
        slidesToShow: 2,
          fade: true,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
          fade: true,
        arrows: true,
        dots: false,
        nextArrow: arrowNextWhite,
        prevArrow: arrowPrevWhite,
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// $('#stepSlider').slick({
//   dots: true,
//   infinite: false,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         arrows: true,
//         nextArrow: arrowNext,
//         prevArrow: arrowPrev,
//         slidesToShow: 2,
//         slidesToScroll: 2,
//           fade: true,
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: true,
//         dots: false,
//         fade: true,
//         nextArrow: arrowNextWhite,
//         prevArrow: arrowPrevWhite,
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//     // You can unslick at a given breakpoint now by adding:
//     // settings: "unslick"
//     // instead of a settings object
//   ]
// });

$('.mobile-handle').on('click', function(){
    $(this).toggleClass('active');
    $('.nav-ul').toggleClass('active');
})

$('#indexPopupClose').on('click', function(){
    $('#indexPopup').hide();
    $('#stepSlider .flex-module').each(function(i){
        $(this).css({
            'transition': 'all .3s ease ' + i/10+'s',
            'opacity': 1,
            'right': 0
        });
    });
    $('#stepSlider').css({
        'border': '2px solid #99C0F5',
        'box-shadow': '0px 0px 4px 2px rgba(255,255,255,0.4)'
    })

})

$( document ).ready(function(){
    $('#indexPopup').addClass('show');
    $('#indexPopup > .content-box *').each(function(i){
        $(this).css({
            'transition': 'all .3s ease '+ i/20+'s'
        });
    });

});
