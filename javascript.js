AOS.init();

// $(document).ready(function() {
//   $(",menunav").click(function() {
//     $(".sidenav").css("opacity", "1");
//   });
// });


$('.imgcont_1, .plybtn_1').click(function(){
  $('#my-video_1').get(0).play()
  $(".imgcont_1").css('border', 'solid #404040 9px');
  $('#my-video_1').css('opacity', '1');
  $(".plybtn_1").css('backgroundColor', '#404040');
});

$('.imgcont_2, .plybtn_2').click(function(){
  $('#my-video_2').get(0).play()
  $('#my-video_2').css('opacity', '1');
  $(".imgcont_2").css('border', 'solid #404040 9px');
  $(".plybtn_2").css('backgroundColor', '#404040');
});

$('.imgcont_3, .plybtn_3').click(function(){
  $('#my-video_3').get(0).play()
  $('#my-video_3').css('opacity', '1');
  $(".imgcont_3").css('border', 'solid #404040 9px');
  $(".plybtn_3").css('backgroundColor', '#404040');
});

$('.imgcont_4, .plybtn_4').click(function(){
  $('#my-video_4').get(0).play()
  $('#my-video_4').css('opacity', '1');
  $(".imgcont_4").css('border', 'solid #404040 9px');
  $(".plybtn_4").css('backgroundColor', '#404040');
});

$('.imgcont_5, .plybtn_5').click(function(){
  $('#my-video_5').get(0).play()
  $('#my-video_5').css('opacity', '1');
  $(".imgcont_5").css('border', 'solid #404040 9px');
  $(".plybtn_5").css('backgroundColor', '#404040');
});

$('.imgcont_6, .plybtn_6').click(function(){
  $('#my-video_6').get(0).play()
  $('#my-video_6').css('opacity', '1');
  $(".imgcont_6").css('border', 'solid #404040 9px');
  $(".plybtn_6").css('backgroundColor', '#404040');
});

$('.imgcont_7, .plybtn_7').click(function(){
  $('#my-video_7').get(0).play()
  $('#my-video_7').css('opacity', '1');
  $(".imgcont_7").css('border', 'solid #404040 9px');
  $(".plybtn_7").css('backgroundColor', '#404040');
});

$('.imgcont_8, .plybtn_8').click(function(){
  $('#my-video_8').get(0).play()
  $('#my-video_8').css('opacity', '1');
  $(".imgcont_8").css('border', 'solid #404040 9px');
  $(".plybtn_8").css('backgroundColor', '#404040');
});

$('.imgcont_9, .plybtn_9').click(function(){
  $('#my-video_9').get(0).play()
  $('#my-video_9').css('opacity', '1');
  $(".imgcont_9").css('border', 'solid #404040 9px');
  $(".plybtn_9").css('backgroundColor', '#404040');
});

$('.imgcont_10, .plybtn_10').click(function(){
  $('#my-video_10').get(0).play()
  $('#my-video_10').css('opacity', '1');
  $(".imgcont_10").css('border', 'solid #404040 9px');
  $(".plybtn_10").css('backgroundColor', '#404040');
});

$('[data-sidenav]').sidenav();

  // $(function() {
  //   $('img').Lazy();
  //       $('.video-js').Lazy();
  //   });

// videojs('#my-video').ready(function() {
//     this.play();
// });

// var myScroll = new IScroll('.imgbox', {
     
//         fade: false,
//         ignoreBoundaries: false,
//         interactive: false,
//         listenX: true,
//         listenY: true,
//         resize: true,
//         shrink: false,
//         speedRatioX: 0,
//         speedRatioY: 0,
//         bindToWrapper: true,
    
// });


var rellax = new Rellax('.imgboximg', {
    speed: 7,
    center: true,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });


// let images = document.querySelectorAll(".video-js");
// lazyload(images);

// new LazyLoad(images, {
//      root: null,
//      rootMargin: "0px",
//      threshold: 0
// });

function isInView(el) {
    windowTop = $(window).scrollTop();
    windowButtom = windowTop + $(window).height();
    elTop = $(el).offset().top;
    elButtom = elTop + $(el).height();

    return (elTop >= windowTop && elButtom <= windowButtom);
}

// $(window).scroll(function() {
//     $('.imgcont').find("video").each(function() {
//         if(isInView(this)) {
//             this.play();
//             $(this).css('opacity', '1');
//         } else {
//             this.pause();
//             $(this).css('opacity', '0');
//         }
//     });
// });

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



// const loadingManager = new THREE.LoadingManager( () => {

//     const loadingScreen = document.getElementById( 'loading-screen' );
//     loadingScreen.classList.add( 'fade-out' );

//     // optional: remove loader from DOM via event listener
//     loadingScreen.addEventListener( 'transitionend', onTransitionEnd );

// } );


$("#arrowdown").click(function() {
    $('html, body').animate({
        scrollTop: $("#txt").offset().top
    }, 1000);
});


Chart.Legend.prototype.afterFit = function() {
    this.height = this.height + 50;
};


// var ctx = document.getElementById('myChart').getContext('2d');
// var myChart = new Chart(ctx, {
//     type: "doughnut",
//     data: {
//         labels:
//         ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
//         datasets: [{
//             data: [12, 19, 3, 5, 2, 3],
//             // backgroundColor: [
//             //     'rgba(255, 99, 132, 1)',
//             //     'rgba(54, 162, 235, 1)',
//             //     'rgba(255, 206, 86, 1)',
//             //     'rgba(75, 192, 192, 1)',
//             //     'rgba(153, 102, 255, 1)',
//             //     'rgba(255, 159, 64, 1)'
//             // ],
//             borderColor: [
//                 'rgba(255, 99, 132, 1)',
//                 'rgba(54, 162, 235, 1)',
//                 'rgba(255, 206, 86, 1)',
//                 'rgba(75, 192, 192, 1)',
//                 'rgba(153, 102, 255, 1)',
//                 'rgba(255, 159, 64, 1)'
//             ],

//             // borderColor: [
//             //     'rgba(0, 0, 0, 1)',
//             //     'rgba(0, 0, 0, 1)',
//             //     'rgba(0, 0, 0, 1)',
//             //     'rgba(0, 0, 0, 1)',
//             //     'rgba(0, 0, 0, 1)',
//             //     'rgba(0, 0, 0, 1)',
//             // ],

//             borderWidth: 2,
//         }]
//     },

//     options: {

//     responsive: false,	
    
// 	legend: {
//         position: "bottom",
//         align:"center",

//         	labels: {
//         		boxWidth: 20,
//         		fontColor: 'rgb(255, 255, 255)',
//         		fontSize: 15,
//         		padding: 20,

//         	}

//     },

//          layout: {
//             padding: {
//                 left: 40,
//                 right: 40,
//                 top: 0,
//                 bottom: 0
//             }
//         },

//     plugins: {
//       deferred: {
//         xOffset: 150,   
//         yOffset: '44%',
//         delay: 600
//       }
//     }

//   }

// });

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

// function openNav() {
//   document.getElementById("mySidenav").style.width = "250px";
// }

// function closeNav() {
//   document.getElementById("mySidenav").style.width = "150px";
// }



// $(document).ready(function() {
//   $("#mtogg").click(function() {
//     console.log()
//     $("#mySidenav").toggle();
//   });
// });



$("#button").click(function() {
    $('html, body').animate({
        scrollTop: $("#myDiv").offset().top
    }, 2000);
});

if($(".contextmenu").css("display", "none")); {
    $('.arrowdown').css('opacity') == 1;
}



// --------bkanim-------




