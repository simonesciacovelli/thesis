AOS.init();

// $(document).ready(function() {
//   $(",menunav").click(function() {
//     $(".sidenav").css("opacity", "1");
//   });
// });


$('.plybtn').click(function(){
  $('#my-video_1').get(0).play()
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
    $('.imgcont').each(function() {
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

    // options: {

    // legend: {
    //     display: false
    // }
    //     layout: {
    //         padding: {
    //             left: 40,
    //             right: 40,
    //             top: 0,
    //             bottom: 0
    //         }
    //     }

    //     plugins: {
    //   		deferred: {
    //     	xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
    //     	yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
    //     	delay: 500      // delay of 500 ms after the canvas is considered inside the viewport
    //   		}
    // 	}
    // }

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




