

$( document ).ready(function() {
  var lazyLoadInstance = new LazyLoad({
      elements_selector: ".lazy"
  });
  
  $('#my-video').get(0).play()
});



$("#arrowdown").click(function() {
    $('html, body').animate({
        scrollTop: $("#txt").offset().top
    }, 1000);
});


Chart.Legend.prototype.afterFit = function() {
    this.height = this.height + 50;
};







anime({
  targets: '.cls-1',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});

anime({
  targets: '.cls-3',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 2500,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true

  });




// $("#button").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#myDiv").offset().top
//     }, 2000);
// });

if($(".contextmenu").css("display", "none")); {
    $('.arrowdown').css('opacity') == 1;
}