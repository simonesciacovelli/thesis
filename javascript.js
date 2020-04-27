AOS.init();

var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
});

// ----nav----

$(".sidenav-link-title_1").click(function() {
    $('html, body').animate({
        scrollTop: $(".spacetop").offset().top
    }, 1000);
});

$(".sidenav-link-title_2").click(function() {
    $('html, body').animate({
        scrollTop: $(".anatomparam").offset().top
    }, 1000);
});

$(".sidenav-link-title_4").click(function() {
    $('html, body').animate({
        scrollTop: $(".intro").offset().top
    }, 1000);
});

$(".menu1").click(function() {
    $('html, body').animate({
        scrollTop: $("#s1").offset().top
    }, 1000);
});

$(".menu2").click(function() {
    $('html, body').animate({
        scrollTop: $("#s2").offset().top
    }, 1000);
});

$(".menu3").click(function() {
    $('html, body').animate({
        scrollTop: $("#s3").offset().top
    }, 1000);
});

$(".menu4").click(function() {
    $('html, body').animate({
        scrollTop: $("#s4").offset().top
    }, 1000);
});

$(".menu5").click(function() {
    $('html, body').animate({
        scrollTop: $("#s5").offset().top
    }, 1000);
});

$(".menu6").click(function() {
    $('html, body').animate({
        scrollTop: $("#s6").offset().top
    }, 1000);
});

$(".menu7").click(function() {
    $('html, body').animate({
        scrollTop: $("#s8").offset().top
    }, 1000);
});

$(".menu9").click(function() {
    $('html, body').animate({
        scrollTop: $("#s9").offset().top
    }, 1000);
});

$(".menu10").click(function() {
    $('html, body').animate({
        scrollTop: $("#s10").offset().top
    }, 1000);
});
// ----nav----




$('.imgcont_1, .plybtn_1').click(function(){
  $('#my-video_1').get(0).play()
  $(".imgcont_1").css('border', 'solid #121212 9px');
  $('#my-video_1').css('opacity', '1');
  $(".plybtn_1").css('backgroundColor', '#121212');
});

$('.imgcont_2, .plybtn_2').click(function(){
  $('#my-video_2').get(0).play()
  $('#my-video_2').css('opacity', '1');
  $(".imgcont_2").css('border', 'solid #121212 9px');
  $(".plybtn_2").css('backgroundColor', '#121212');
});

$('.imgcont_3, .plybtn_3').click(function(){
  $('#my-video_3').get(0).play()
  $('#my-video_3').css('opacity', '1');
  $(".imgcont_3").css('border', 'solid #121212 9px');
  $(".plybtn_3").css('backgroundColor', '#121212');
});

$('.imgcont_4, .plybtn_4').click(function(){
  $('#my-video_4').get(0).play()
  $('#my-video_4').css('opacity', '1');
  $(".imgcont_4").css('border', 'solid #121212 9px');
  $(".plybtn_4").css('backgroundColor', '#121212');
});

$('.imgcont_5, .plybtn_5').click(function(){
  $('#my-video_5').get(0).play()
  $('#my-video_5').css('opacity', '1');
  $(".imgcont_5").css('border', 'solid #121212 9px');
  $(".plybtn_5").css('backgroundColor', '#121212');
});

$('.imgcont_6, .plybtn_6').click(function(){
  $('#my-video_6').get(0).play()
  $('#my-video_6').css('opacity', '1');
  $(".imgcont_6").css('border', 'solid #121212 9px');
  $(".plybtn_6").css('backgroundColor', '#121212');
});

$('.imgcont_7, .plybtn_7').click(function(){
  $('#my-video_7').get(0).play()
  $('#my-video_7').css('opacity', '1');
  $(".imgcont_7").css('border', 'solid #121212 9px');
  $(".plybtn_7").css('backgroundColor', '#121212');
});

$('.imgcont_8, .plybtn_8').click(function(){
  $('#my-video_8').get(0).play()
  $('#my-video_8').css('opacity', '1');
  $(".imgcont_8").css('border', 'solid #121212 9px');
  $(".plybtn_8").css('backgroundColor', '#121212');
});

$('.imgcont_9, .plybtn_9').click(function(){
  $('#my-video_9').get(0).play()
  $('#my-video_9').css('opacity', '1');
  $(".imgcont_9").css('border', 'solid #121212 9px');
  $(".plybtn_9").css('backgroundColor', '#121212');
});

$('.imgcont_10, .plybtn_10').click(function(){
  $('#my-video_10').get(0).play()
  $('#my-video_10').css('opacity', '1');
  $(".imgcont_10").css('border', 'solid #121212 9px');
  $(".plybtn_10").css('backgroundColor', '#121212');
});

$('[data-sidenav]').sidenav();


var rellax = new Rellax('.imgboximg', {
    speed: 3,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });


function isInView(el) {
    windowTop = $(window).scrollTop();
    windowButtom = windowTop + $(window).height();
    elTop = $(el).offset().top;
    elButtom = elTop + $(el).height();

    return (elTop >= windowTop && elButtom <= windowButtom);
}

$(window).scroll(function() {
    $("div[class^='imgcont']").each(function() {
        if(isInView(this)) {
               $(this).css('opacity', '1');
        } else {
                $(this).css('opacity', '0');
        }
    });
});

$(window).scroll(function() {
    $('.plybtn_1, .plybtn_2, .plybtn_3, .plybtn_4, .plybtn_5, .plybtn_6, .plybtn_7, .plybtn_8, .plybtn_9, .plybtn_10').each(function() {
        if(isInView(this)) {
               $(this).css('opacity', '1');
        } else {
                $(this).css('opacity', '0');
        }
    });
});

anime({
  targets: '.cls-1',
  strokeDashoffset: [anime.setDashoffset, 0],
  duration: 3150,
  direction: 'alternate',
  baseFrequency: 2,
  easing: 'easeInOutExpo',
  loop: true
});



