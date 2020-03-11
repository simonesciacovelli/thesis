AOS.init();

const loadingManager = new THREE.LoadingManager( () => {

    const loadingScreen = document.getElementById( 'loading-screen' );
    loadingScreen.classList.add( 'fade-out' );

    // optional: remove loader from DOM via event listener
    loadingScreen.addEventListener( 'transitionend', onTransitionEnd );

} );

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
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
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

            borderWidth: 0,
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


