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
    nav: true,
    navText: "",
    dotsContainer: '#quotes-dots',
    navContainer: '#quotes-arrows',
    autoplay: true
})
});