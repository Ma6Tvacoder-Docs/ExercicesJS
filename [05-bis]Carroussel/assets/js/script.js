$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    center: true,
    items:2,
    loop:true,
    margin:15,
    responsive:{
        600:{
            items:2
        }
    },
    nav:true,
    autoplay:false,
    autoplayTimeout: 1000
});
});
