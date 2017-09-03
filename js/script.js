$(document).ready(function(){
  $('.owl-carousel--promo').owlCarousel({
    loop:true,
    items:1,
    dotsContainer: '#promo-dots',
    autoplay: true
  })
  $('.owl-carousel--quotes').owlCarousel({
    loop:true,
    items:1,
    dots: false,
    nav: false,
    navText: "",
    dotsContainer: '#quotes-dots',
    navContainer: '#quotes-arrows',
    autoplay: true,
    responsive : {
    720 : {
        dots : true,
        nav : true
    }}
  })
});