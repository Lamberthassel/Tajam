//Owl carousel customizing

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



//Scroll header events

function yScroll(){
	var header = document.querySelector("#header");
	var yPos = window.pageYOffset;
	if(yPos > 630){
		header.style.background = "rgba(0,0,0,.3)";
	} else {
		header.style.background = "none";
	}
}
window.addEventListener("scroll", yScroll);



//Smooth anchor link navigation

$(document).ready(function(){
    $("#header-menu__list").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});