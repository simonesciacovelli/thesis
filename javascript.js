
// $("p").css("background-color", "yellow");

// $(".bttn").click(function() {
//     $('html, body').animate({
//         scrollBottom: $(".container2").offset().top
//     }, 2000);
// });

$(document).ready(function() {

   $('.bttn').click(function() {
           $("html,body").stop().animate({scrollTop:$('.container2').offset().top}); });
});



