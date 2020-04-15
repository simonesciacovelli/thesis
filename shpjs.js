

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

$( document ).ready(function() {

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
        labels:
        ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            data: [12, 19, 3, 5, 2, 3],
            // backgroundColor: [
            //     'rgba(255, 99, 132, 1)',
            //     'rgba(54, 162, 235, 1)',
            //     'rgba(255, 206, 86, 1)',
            //     'rgba(75, 192, 192, 1)',
            //     'rgba(153, 102, 255, 1)',
            //     'rgba(255, 159, 64, 1)'
            // ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],

            // borderColor: [
            //     'rgba(0, 0, 0, 1)',
            //     'rgba(0, 0, 0, 1)',
            //     'rgba(0, 0, 0, 1)',
            //     'rgba(0, 0, 0, 1)',
            //     'rgba(0, 0, 0, 1)',
            //     'rgba(0, 0, 0, 1)',
            // ],

            borderWidth: 2,
        }]
    },

    options: {

    responsive: false,  
    
    legend: {
        position: "bottom",
        align:"center",

            labels: {
                boxWidth: 20,
                fontColor: 'rgb(255, 255, 255)',
                fontSize: 15,
                padding: 20,

            }

    },

         layout: {
            padding: {
                left: 40,
                right: 40,
                top: 0,
                bottom: 0
            }
        },

    plugins: {
      deferred: {
        xOffset: 150,   
        yOffset: '44%',
        delay: 600
      }
    }

  }

});


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

});

// $("#button").click(function() {
//     $('html, body').animate({
//         scrollTop: $("#myDiv").offset().top
//     }, 2000);
// });

if($(".contextmenu").css("display", "none")); {
    $('.arrowdown').css('opacity') == 1;
}