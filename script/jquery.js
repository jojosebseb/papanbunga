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

$('.slide#productList').find('.flex').slick({
    slidesToShow: 4,
    nextArrow: arrowNext,
    prevArrow: arrowPrev,
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
      slidesToShow: 2,
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 480,
    settings: {
        arrows: false,
      slidesToShow: 2,
      slidesToScroll: 2
    }
  }
  // You can unslick at a given breakpoint now by adding:
  // settings: "unslick"
  // instead of a settings object
]
});

var src;
$('.product-gallery .product-slide').on('click', function(){
    $('.product-gallery .product-slide').removeClass('active');
    $(this).addClass('active');
    src = $(this).find('img').attr('src');
    $('.product-thumb').find('img').attr('src', src);

})

$('.product-gallery').slick({
    slidesToShow: 8,
    nextArrow: arrowNext,
    prevArrow: arrowPrev,

});

$('.inquiry-button').on('click', function(){
    $('.product-enquiry').toggleClass('active');
});

$('.minimize').on('click', function(){
    $('.product-enquiry').removeClass('active');
});

$('.mobile-handle').on('click', function(){
    $(this).toggleClass('active');
    $('.nav-ul').slideToggle();
});
